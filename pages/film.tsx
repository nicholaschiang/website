import Grid from 'components/grid';
import Page from 'components/page';
import Video from 'components/video';

// TODO: Instead of using the default JPG thumbnails from Mux, I should see if I
// can create my own optimized versions using `next-optimized-images`.
export default function FilmPage(): JSX.Element {
  return (
    <Page title='Filmmaking - Nicholas Chiang' id='film'>
      <Grid cell='var(--geist-page-width)'>
        <Video thumb={56} id='PE4KdIrENlIY3LYIvfzOAO496VexiAPCrr1PIccJnc4' />
        <Video thumb={26} id='MCOe00cp5LCWa3jtr7xQyBJNUtWUVlBT6RkpoRKycFF4' />
        <Video thumb={17} id='OJibVn7k3QxG9W8xyg8F0175zUWmguLPlBu302CLPiUcY' />
        <Video thumb={141} id='i92mUmNJScSIhuv28fZrAbMTZu8yDsFLxzrWuCCTXTY' />
        <Video thumb={3} id='NNIfytq35KfrleHqFWdZm0200f7kfMDXEzJXPPrfvH68U' />
        <Video thumb={2} id='Gl44sjwE7TzZsCbGz8mxIvIykPABE1svoFVWKUXptpo' />
      </Grid>
    </Page>
  );
}
