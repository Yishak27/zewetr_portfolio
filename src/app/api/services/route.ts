import { NextResponse } from 'next/server';
import db from '../../../lib/database';

export async function GET() {
  try {
    const items = db.prepare('SELECT * FROM services ORDER BY created_at DESC').all();
    
    // Parse features JSON for each service
    const servicesWithFeatures = items.map((service: any) => ({
      ...service,
      features: service.features ? JSON.parse(service.features) : []
    }));
    
    return NextResponse.json(servicesWithFeatures);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}