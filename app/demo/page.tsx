'use client';

import Link from 'next/link';

type DemoStep = {
  title: string;
  body: string;
};

const steps: DemoStep[] = [
  {
    title: 'Step 1. Monthly Awards Theme Announcement',
    body:
      'At the end of every month, Myshot.pi officially announces the next month’s Awards theme. ' +
      'This theme guides what kind of images the community will focus on for the month.',
  },
  {
    title: 'Step 2. Capture Real Photos with a Smartphone',
    body:
      'Participants directly capture nature, climate, and objects around daily life using a smartphone. ' +
      'AI-generated or artificially created images are not allowed. ' +
      'Images containing identifiable people are restricted due to portrait rights and legal risk.',
  },
  {
    title: 'Step 3. Upload to Myshot.pi',
    body:
      'Anyone can upload their smartphone-captured images to Myshot.pi. ' +
      'Once uploaded, the content becomes tradable within the Pi ecosystem.',
  },
  {
    title: 'Step 4. Search and Purchase',
    body:
      'Participants can freely search and purchase images inside Myshot.pi. ' +
      'Every participant can be both a seller and a buyer—creating a dynamic marketplace.',
  },
  {
    title: 'Step 5. Awards Prize Pool Distribution',
    body:
      'When you purchase an image, you become eligible for the monthly Awards program. ' +
      'At the end of the month, Awards-selected images pay out prizes to the final image owner. ' +
      'Specifically, 50% of the platform fee is distributed equally to the final owners of selected images.',
  },
  {
    title: 'Step 6. Building a Global Standard for the Pi Ecosystem',
    body:
      'Through this cycle—theme announcement, real capture, upload, purchase, and Awards—' +
      'Myshot.pi helps establish a global standard marketplace in the Pi ecosystem.',
  },
];

export default function DemoPage() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '24px 16px 64px' }}>
      <header style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 14, opacity: 0.8 }}>Myshot.pi Demo</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 28, lineHeight: 1.2 }}>
          How Myshot.pi Works (6 Steps)
        </h1>
        <p style={{ margin: '10px 0 0', fontSize: 15, opacity: 0.9 }}>
          A simple story that shows why everyone will want to upload and buy—fast.
        </p>
      </header>

      <section
        style={{
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 14,
          padding: 14,
        }}
      >
        {steps.map((s, idx) => (
          <article
            key={idx}
            style={{
              padding: '14px 12px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              marginBottom: 12,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 16 }}>{s.title}</div>
            <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, opacity: 0.95 }}>
              {s.body}
            </div>
          </article>
        ))}
      </section>

      <footer style={{ marginTop: 18, display: 'flex', gap: 10 }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 14px',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.18)',
            textDecoration: 'none',
            fontSize: 14,
          }}
        >
          Back to Home
        </Link>

        <Link
          href="/explore"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 14px',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.10)',
            textDecoration: 'none',
            fontSize: 14,
          }}
        >
          Explore Images
        </Link>
      </footer>
    </main>
  );
}
