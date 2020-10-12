import Cell from 'components/cell';
import Grid from 'components/grid';

import Backpack from 'static/backpack.jpg';
import Family from 'static/family.jpg';
import Graffiti from 'static/graffiti.jpg';
import Pinecone from 'static/pinecone.jpg';
import Sitting from 'static/sitting.jpg';
import Standing from 'static/standing.jpg';
import Sunset from 'static/sunset.jpg';
import Water from 'static/water.jpg';

// TODO: Use `next-optimized-images` to:
// 1. Make these high-quality images load faster (e.g. use `webm` or `jpg`).
// 2. Show blurred thumbnails while they're loading (like Medium).
// @see {@link https://github.com/cyrilwanner/next-optimized-images}
export default function Photos(): JSX.Element {
  return (
    <main>
      <Grid>
        <Cell img={Backpack} alt='MW Backpack at Stanford University' />
        <Cell img={Family} alt='Family enjoying California weather' />
        <Cell img={Sitting} alt='Couple on the grass at Stanford University' />
        <Cell
          img={Standing}
          alt='Couple framed on the steps of Stanford University'
        />
        <Cell
          img={Graffiti}
          alt='Admiring the iconic graffiti in San Francisco'
        />
        <Cell
          img={Pinecone}
          alt='Beauties of nature as embodied by a pinecone branch'
        />
        <Cell img={Sunset} alt='Captured while driving by a field at 60mph' />
        <Cell img={Water} alt='An inviolate stream of chaotic water' />
      </Grid>
    </main>
  );
}
