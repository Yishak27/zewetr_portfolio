import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare(`
      SELECT * FROM portfolio_items
      ORDER BY created_at DESC
    `).all();

    const formattedItems = items.map((item: any) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.image,
      videoUrl: item.video_url,
      audioUrl: item.audio_url,
      link: item.link,
      type: item.type
    }));

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio items' }, { status: 500 });
  }
}