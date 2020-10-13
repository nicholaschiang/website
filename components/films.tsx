import Grid from 'components/grid';
import Video from 'components/video';

export default function Films(): JSX.Element {
  return (
    <main>
      <Grid cell='var(--geist-page-width)'>
        <Video src='https://stream.mux.com/3L4R01YIn5SAiAl3XxIyiwSrWP6ART5Ssvzj6qZjZDp00.m3u8' />
        <Video src='https://stream.mux.com/3L4R01YIn5SAiAl3XxIyiwSrWP6ART5Ssvzj6qZjZDp00.m3u8' />
        <Video src='https://stream.mux.com/3L4R01YIn5SAiAl3XxIyiwSrWP6ART5Ssvzj6qZjZDp00.m3u8' />
        <Video src='https://stream.mux.com/3L4R01YIn5SAiAl3XxIyiwSrWP6ART5Ssvzj6qZjZDp00.m3u8' />
      </Grid>
    </main>
  );
}
