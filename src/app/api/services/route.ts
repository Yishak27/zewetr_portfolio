import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const services = db.prepare(`
      SELECT * FROM services
      ORDER BY created_at ASC
    `).all();

    const formattedServices = services.map((service: any) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: service.features ? JSON.parse(service.features) : []
    }));

    return NextResponse.json(formattedServices);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}