import Footer from 'components/footer';
import Header from 'components/header';

import PageName from 'lib/page-name';

export interface PageProps {
  children: JSX.Element | JSX.Element[];
  page: PageName;
}

export default function Page({ children, page }: PageProps): JSX.Element {
  return (
    <>
      <div>
        <Header page={page} />
        {children}
        <style jsx>{`
          div {
            min-height: 100vh;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}
