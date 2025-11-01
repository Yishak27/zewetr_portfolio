import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, excerpt, content, date, readTime, category, image, slug, author, tags } = body;

    // Insert blog post
    const insertBlogPost = db.prepare(`
      INSERT INTO blog_posts (title, excerpt, content, date, read_time, category, image, slug, author_name, author_image, author_bio)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insertBlogPost.run(
      title,
      excerpt,
      content,
      date,
      readTime,
      category,
      image,
      slug,
      author.name,
      author.image,
      author.bio
    );

    // Insert tags
    if (tags && tags.length > 0) {
      const insertBlogTag = db.prepare(`
        INSERT INTO blog_tags (blog_post_id, tag)
        VALUES (?, ?)
      `);

      tags.forEach((tag: string) => {
        insertBlogTag.run(result.lastInsertRowid, tag);
      });
    }

    return NextResponse.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, excerpt, content, date, readTime, category, image, slug, author, tags } = body;

    // Update blog post
    const updateBlogPost = db.prepare(`
      UPDATE blog_posts 
      SET title = ?, excerpt = ?, content = ?, date = ?, read_time = ?, category = ?, image = ?, slug = ?, 
          author_name = ?, author_image = ?, author_bio = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    updateBlogPost.run(
      title,
      excerpt,
      content,
      date,
      readTime,
      category,
      image,
      slug,
      author.name,
      author.image,
      author.bio,
      id
    );

    // Delete existing tags and insert new ones
    db.prepare('DELETE FROM blog_tags WHERE blog_post_id = ?').run(id);
    
    if (tags && tags.length > 0) {
      const insertBlogTag = db.prepare(`
        INSERT INTO blog_tags (blog_post_id, tag)
        VALUES (?, ?)
      `);

      tags.forEach((tag: string) => {
        insertBlogTag.run(id, tag);
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Blog post ID is required' }, { status: 400 });
    }

    // Delete blog post (tags will be deleted automatically due to foreign key constraint)
    const deleteBlogPost = db.prepare('DELETE FROM blog_posts WHERE id = ?');
    deleteBlogPost.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}