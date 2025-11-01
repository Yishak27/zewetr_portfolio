import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM portfolio_items ORDER BY created_at DESC').all();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio items' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, category, description, image, video_url, audio_url, link, type } = await request.json();
    
    if (!title || !category || !description || !image || !type) {
      return NextResponse.json(
        { error: 'Title, category, description, image, and type are required' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      INSERT INTO portfolio_items (title, category, description, image, video_url, audio_url, link, type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(title, category, description, image, video_url || null, audio_url || null, link || null, type);
    
    const newItem = db.prepare('SELECT * FROM portfolio_items WHERE id = ?')
      .get(result.lastInsertRowid);
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    return NextResponse.json({ error: 'Failed to create portfolio item' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, title, category, description, image, video_url, audio_url, link, type } = await request.json();
    
    if (!id || !title || !category || !description || !image || !type) {
      return NextResponse.json(
        { error: 'ID, title, category, description, image, and type are required' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      UPDATE portfolio_items 
      SET title = ?, category = ?, description = ?, image = ?, video_url = ?, audio_url = ?, link = ?, type = ?
      WHERE id = ?
    `);
    
    const result = stmt.run(title, category, description, image, video_url || null, audio_url || null, link || null, type, id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }
    
    const updatedItem = db.prepare('SELECT * FROM portfolio_items WHERE id = ?').get(id);
    
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating portfolio item:', error);
    return NextResponse.json({ error: 'Failed to update portfolio item' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    const stmt = db.prepare('DELETE FROM portfolio_items WHERE id = ?');
    const result = stmt.run(id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting portfolio item:', error);
    return NextResponse.json({ error: 'Failed to delete portfolio item' }, { status: 500 });
  }
}