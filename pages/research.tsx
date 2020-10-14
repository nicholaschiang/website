import Page from 'components/page';
import Project from 'components/project';

import LCTES from 'assets/lctes.json';
import STAT from 'assets/stat.json';
import TECS from 'assets/tecs.json';

export default function ResearchPage(): JSX.Element {
  return (
    <Page title='Nicholas Chiang - Research' id='research'>
      <Project {...LCTES} />
      <Project {...TECS} />
      <Project {...STAT} />
    </Page>
  );
}
