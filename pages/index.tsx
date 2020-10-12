import Page from 'components/page';
import Photos from 'components/photos';

export default function IndexPage(): JSX.Element {
  return (
    <Page page='photo'>
      <Photos />
    </Page>
  );
}
