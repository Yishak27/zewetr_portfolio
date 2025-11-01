import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const clients = db.prepare(`
      SELECT * FROM client_logos
      ORDER BY created_at DESC
    `).all();

    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error fetching client logos:', error);
    return NextResponse.json({ error: 'Failed to fetch client logos' }, { status: 500 });
  }
}