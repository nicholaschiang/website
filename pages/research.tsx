import Page from 'components/page';
import Project from 'components/project';

import LCTES from 'static/lctes.json';
import LCTESPreview from 'static/lctes.jpg';
import TECS from 'static/tecs.json';
import TECSPreview from 'static/tecs.jpg';

export default function ResearchPage(): JSX.Element {
  return (
    <Page title='Nicholas Chiang - Research' id='research'>
      <Project {...LCTES} preview={LCTESPreview} />
      <Project {...TECS} preview={TECSPreview} />
    </Page>
  );
}
