import { useEffect, useRef } from 'react';

import Grid from 'components/grid';

import Backpack from 'static/backpack.jpg';
import Family from 'static/family.jpg';
import Graffiti from 'static/graffiti.jpg';
import Pinecone from 'static/pinecone.jpg';
import Sitting from 'static/sitting.jpg';
import Standing from 'static/standing.jpg';
import Sunset from 'static/sunset.jpg';
import Water from 'static/water.jpg';

async function initTilt(elem: HTMLDivElement): Promise<void> {
  const { default: VanillaTilt } = await import('vanilla-tilt');
  VanillaTilt.init(elem, { max: 4 });
}

interface CellProps {
  src: string;
  alt: string;
}

function Cell({ src, alt }: CellProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    void initTilt(ref.current);
  }, [ref]);

  return (
    <div ref={ref}>
      <img src={src} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          cursor: pointer;
          margin-bottom: -4px;
        }
      `}</style>
    </div>
  );
}

// TODO: Use `next-optimized-images` to:
// 1. Make these high-quality images load faster (e.g. use `webm` or `jpg`).
// 2. Show blurred thumbnails while they're loading (like Medium).
// @see {@link https://github.com/cyrilwanner/next-optimized-images}
export default function Photos(): JSX.Element {
  return (
    <main>
      <Grid>
        <Cell src={Backpack} alt='MW Backpack at Stanford University' />
        <Cell src={Family} alt='Family enjoying California weather' />
        <Cell src={Sitting} alt='Couple on the grass at Stanford University' />
        <Cell
          src={Standing}
          alt='Couple framed on the steps of Stanford University'
        />
        <Cell
          src={Graffiti}
          alt='Admiring the iconic graffiti in San Francisco'
        />
        <Cell
          src={Pinecone}
          alt='Beauties of nature as embodied by a pinecone branch'
        />
        <Cell src={Sunset} alt='Captured while driving by a field at 60mph' />
        <Cell src={Water} alt='An inviolate stream of chaotic water' />
      </Grid>
    </main>
  );
}
