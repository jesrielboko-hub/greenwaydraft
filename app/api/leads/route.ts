import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    console.log('[GREENWAY FIELD ASSESSMENT LEAD]', {
      ...body,
      name,
      email,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error('[GREENWAY LEAD ERROR]', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to submit the assessment request right now.' },
      { status: 500 }
    );
  }
}
