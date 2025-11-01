import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const socialLinks = db.prepare(`
      SELECT * FROM social_links
      WHERE is_active = 1
      ORDER BY created_at ASC
    `).all();

    return NextResponse.json(socialLinks);
  } catch (error) {
    console.error('Error fetching social links:', error);
    return NextResponse.json({ error: 'Failed to fetch social links' }, { status: 500 });
  }
}