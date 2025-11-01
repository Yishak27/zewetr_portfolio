import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const posts = db.prepare(`
      SELECT 
        bp.*,
        GROUP_CONCAT(bt.tag) as tags
      FROM blog_posts bp
      LEFT JOIN blog_tags bt ON bp.id = bt.blog_post_id
      GROUP BY bp.id
      ORDER BY bp.date DESC
    `).all();

    const formattedPosts = posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      readTime: post.read_time,
      category: post.category,
      image: post.image,
      slug: post.slug,
      author: {
        name: post.author_name,
        image: post.author_image,
        bio: post.author_bio
      },
      tags: post.tags ? post.tags.split(',') : []
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}