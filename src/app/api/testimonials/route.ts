import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC').all();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}