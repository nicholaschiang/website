import Head from 'next/head';

import Footer from 'components/footer';
import Header from 'components/header';

import PageId from 'lib/page';

export interface PageProps {
  id: PageId;
  title: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

// TODO: Research SEO and update the page titles and descriptions accordingly.
export default function Page({
  id,
  title,
  description,
  children,
}: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title || 'Nicholas Chiang'}</title>
        <meta
          name='description'
          content={description || 'Porfolio website for Nicholas Chiang'}
        />
      </Head>
      <div>
        <Header page={id} />
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
