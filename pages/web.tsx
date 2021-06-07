import Grid from 'components/grid';
import Page from 'components/page';
import Window from 'components/window';

export default function WebPage(): JSX.Element {
  return (
    <Page title='Web Development - Nicholas Chiang' id='web'>
      <Grid cell='var(--geist-page-width)'>
        <Window
          title='Connect students with expert mentors and volunteer tutors'
          url='tutorbook.app'
        />
        <Window
          title='A place where you can enjoy learning from newsletters'
          url='readhammock.com'
        />
        <Window
          title='The Saint Michael Trio is Silicon Valley’s update to the classical music scene.'
          url='saintmichaeltrio.vercel.app'
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
    </Page>
  );
}
