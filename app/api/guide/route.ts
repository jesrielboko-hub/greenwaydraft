import { NextResponse } from 'next/server';
import { clean, saveLead } from '../../../lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = clean(await request.json());

    if (!data.name || !data.email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const lead = saveLead('guide', data);
    console.log('[GREENWAY GUIDE REQUEST]', lead.id, data.name, data.email);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error('[GREENWAY GUIDE ERROR]', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to process the guide request right now.' },
      { status: 500 }
    );
  }
}
