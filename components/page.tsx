import Footer from 'components/footer';
import Header from 'components/header';

export interface PageProps {
  children: JSX.Element | JSX.Element[];
}

export default function Page({ children }: PageProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <style jsx>{`
        div {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
