import { useEffect, useRef } from 'react';
import Img from 'react-optimized-image';

import Grid from 'components/grid';
import Page from 'components/page';

async function initTilt(elem: HTMLDivElement): Promise<void> {
  const { default: VanillaTilt } = await import('vanilla-tilt');
  VanillaTilt.init(elem, { max: 4 });
}

interface CellProps {
  src: string;
  alt: string;
}

// TODO: Remove the `require()` statement and instead import these images using
// ES6 syntax. Blocker: the way that `react-optimized-image/plugin` is setup.
// @see {@link https://github.com/cyrilwanner/react-optimized-image/issues/6}
// @see {@link https://github.com/cyrilwanner/next-optimized-images/issues/186}

// TODO: Properly set the breakpoints:
// 1. Less than 448px viewport width, use 400px images.
// 2. Between 448px - 872px viewport width, use 800px images.
// 3. Greater than 872px viewport width, use 600px images.
// @see {@link https://github.com/cyrilwanner/react-optimized-image/issues/17}

// TODO: Add a blurred image loading placeholder once it's added to canary.
// @see {@link https://github.com/cyrilwanner/react-optimized-image/issues/5}

function Cell({ src, alt }: CellProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    void initTilt(ref.current);
  }, [ref]);

  return (
    <div ref={ref}>
      <a href={require(`assets/${src}.jpg?original`)}>
        <Img
          src={require(`assets/${src}.jpg`)}
          alt={alt}
          sizes={[400, 600, 800]}
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
          width: 100%;
          margin-bottom: -4px;
        }
      `}</style>
    </div>
  );
}

export default function PhotoPage(): JSX.Element {
  return (
    <Page title='Nicholas Chiang - Photography' id='photo'>
      <Grid>
        <Cell src='backpack' alt='MW Backpack at Stanford University' />
        <Cell src='family' alt='Family enjoying California weather' />
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
