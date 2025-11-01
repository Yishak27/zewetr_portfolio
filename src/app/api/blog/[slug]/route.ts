import { NextResponse } from 'next/server';
import db from '../../../../lib/database';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    const post = db.prepare(`
      SELECT 
        bp.*,
        GROUP_CONCAT(bt.tag) as tags
      FROM blog_posts bp
      LEFT JOIN blog_tags bt ON bp.id = bt.blog_post_id
      WHERE bp.slug = ?
      GROUP BY bp.id
    `).get(slug);

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const formattedPost = {
      id: (post as any).id,
      title: (post as any).title,
      excerpt: (post as any).excerpt,
      content: (post as any).content,
      date: (post as any).date,
      readTime: (post as any).read_time,
      category: (post as any).category,
      image: (post as any).image,
      slug: (post as any).slug,
      author: {
        name: (post as any).author_name,
        image: (post as any).author_image,
        bio: (post as any).author_bio
      },
      tags: (post as any).tags ? (post as any).tags.split(',') : []
    };

    return NextResponse.json(formattedPost);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}