import { useEffect, useRef } from 'react';
import Image from 'next/image';

import Grid from 'components/grid';
import Page from 'components/page';

async function initTilt(elem: HTMLDivElement): Promise<void> {
  const { default: VanillaTilt } = await import('vanilla-tilt');
  VanillaTilt.init(elem, {
    'max-glare': 0.1,
    glare: true,
    max: 4,
  });
}

interface CellProps {
  priority?: boolean;
  src: string;
  alt: string;
}

// TODO: Add a blurred image loading placeholder once it's added to canary.
// @see {@link https://github.com/cyrilwanner/react-optimized-image/issues/5}

function Cell({ priority, src, alt }: CellProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    void initTilt(ref.current);
  }, [ref]);

  return (
    <div ref={ref}>
      <a href={`/imgs/${src}.jpg`}>
        <Image
          sizes={
            '(max-width: 448px) 400px, ' +
            '(max-width: 548px) 500px, ' +
            '(max-width: 648px) 600px, ' +
            '(max-width: 748px) 700px, ' +
            '(max-width: 848px) 800px, ' +
            '(min-width: 848px) 500px'
          }
          src={`/imgs/${src}.jpg`}
          priority={priority}
          objectPosition='center'
          objectFit='cover'
          layout='fill'
          alt={alt}
        />
      </a>
      <style jsx>{`
        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          font-size: 14px;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a:hover {
          color: var(--geist-foreground);
        }

        div {
          background-color: var(--accents-2);
          padding-bottom: calc(100% / 3 * 2);
          position: relative;
        }

        div :global(img) {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
    </div>
  );
}

export default function PhotoPage(): JSX.Element {
  return (
    <Page title='Photography - Nicholas Chiang' id='photo'>
      <Grid cell='388.5px'>
        <Cell
          src='backpack'
          alt='MW Backpack at Stanford University'
          priority
        />
        <Cell src='family' alt='Family enjoying California weather' priority />
        <Cell src='sitting' alt='Couple on the grass at Stanford University' />
        <Cell
          src='standing'
          alt='Couple framed on the steps of Stanford University'
        />
        <Cell
          src='graffiti'
          alt='Admiring the iconic graffiti in San Francisco'
        />
        <Cell
          src='pinecone'
          alt='Beauties of nature as embodied by a pinecone branch'
        />
        <Cell src='sunset' alt='Captured while driving by a field at 60mph' />
        <Cell src='water' alt='An inviolate stream of chaotic water' />
      </Grid>
    </Page>
  );
}
