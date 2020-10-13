import Grid from 'components/grid';
import Window from 'components/window';

export default function Websites(): JSX.Element {
  return (
    <main>
      <Grid cell='var(--geist-page-width)'>
        <Window
          title='Connects students with expert mentors and volunteer tutors'
          url='tutorbook.app'
        />
        <Window
          title='Ecommerce site for a luxury clothing brand'
          url='niveaux-de-gris.web.app'
        />
        <Window
          title='Community non-profit working to provide space for everyone'
          url='new-cubberley.vercel.app'
        />
        <Window
          title='Timeline of the ongoing Israeli-Palestinian conflict'
          url='perspectives.netlify.app'
        />
      </Grid>
    </main>
  );
}
