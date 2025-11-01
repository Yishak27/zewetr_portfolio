import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC').all();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, title, company, image, rating, text } = await request.json();
    
    if (!name || !title || !company || !image || !text) {
      return NextResponse.json(
        { error: 'All fields except rating are required' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      INSERT INTO testimonials (name, title, company, image, rating, text)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(name, title, company, image, rating || 5, text);
    
    const newItem = db.prepare('SELECT * FROM testimonials WHERE id = ?')
      .get(result.lastInsertRowid);
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, name, title, company, image, rating, text } = await request.json();
    
    if (!id || !name || !title || !company || !image || !text) {
      return NextResponse.json(
        { error: 'All fields except rating are required' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      UPDATE testimonials 
      SET name = ?, title = ?, company = ?, image = ?, rating = ?, text = ?
      WHERE id = ?
    `);
    
    const result = stmt.run(name, title, company, image, rating || 5, text, id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }
    
    const updatedItem = db.prepare('SELECT * FROM testimonials WHERE id = ?').get(id);
    
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    const stmt = db.prepare('DELETE FROM testimonials WHERE id = ?');
    const result = stmt.run(id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  }
}