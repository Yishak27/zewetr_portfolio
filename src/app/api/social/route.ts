import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM social_links WHERE is_active = 1 ORDER BY created_at DESC').all();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching social links:', error);
    return NextResponse.json({ error: 'Failed to fetch social links' }, { status: 500 });
  }
}