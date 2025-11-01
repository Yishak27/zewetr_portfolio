import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM gallery_items ORDER BY created_at DESC').all();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, image, category } = await request.json();
    
    if (!title || !description || !image || !category) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      INSERT INTO gallery_items (title, description, image, category)
      VALUES (?, ?, ?, ?)
    `);
    
    const result = stmt.run(title, description, image, category);
    
    const newItem = db.prepare('SELECT * FROM gallery_items WHERE id = ?')
      .get(result.lastInsertRowid);
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, title, description, image, category } = await request.json();
    
    if (!id || !title || !description || !image || !category) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      UPDATE gallery_items 
      SET title = ?, description = ?, image = ?, category = ?
      WHERE id = ?
    `);
    
    const result = stmt.run(title, description, image, category, id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }
    
    const updatedItem = db.prepare('SELECT * FROM gallery_items WHERE id = ?').get(id);
    
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ error: 'Failed to update gallery item' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    const stmt = db.prepare('DELETE FROM gallery_items WHERE id = ?');
    const result = stmt.run(id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 });
  }
}