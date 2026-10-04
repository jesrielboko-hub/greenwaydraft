import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function GuidePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">GREENWAY ATHLETIC FIELD SERVICES</div>
          <h1 className="display">BUILT BENEATH THE SURFACE.</h1>
          <p>
            A practical guide to the decisions that influence drainage,
            surface performance, durability and long-term athletic-field
            maintenance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="card" style={{ padding: 'clamp(28px, 5vw, 56px)' }}>
            <div className="eyebrow">TEMPORARY GUIDE PAGE</div>
            <h2 className="display">YOUR GUIDE ACCESS IS READY.</h2>
            <p className="muted" style={{ lineHeight: 1.8 }}>
              This is a temporary access page while the final downloadable PDF
              is being connected. The guide covers drainage, construction,
              grading, soil and materials, and ongoing field maintenance.
            </p>

            <div style={{ marginTop: 28 }}>
              <Link href="/resources" className="btn btn-primary">
                <ArrowLeft size={16} /> BACK TO RESOURCES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
