import { NextResponse } from 'next/server';
import { clean, saveLead } from '../../../lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = clean(await request.json());
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ') || data.name || '';

    if (!name || !data.email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const lead = saveLead('assessment', data);
    console.log('[GREENWAY FIELD ASSESSMENT LEAD]', lead.id, name, data.email);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error('[GREENWAY LEAD ERROR]', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to submit the assessment request right now.' },
      { status: 500 }
    );
  }
}
