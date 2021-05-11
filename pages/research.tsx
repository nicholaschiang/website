import Page from 'components/page';
import Project from 'components/project';

import LCTES from 'assets/lctes.json';
import TECS from 'assets/tecs.json';

export default function ResearchPage(): JSX.Element {
  return (
    <Page title='Research - Nicholas Chiang' id='research'>
      <Project {...LCTES} />
      <Project {...TECS} />
    </Page>
  );
}
