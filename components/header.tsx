import Link from 'components/link';

import PageId from 'lib/page';

export interface HeaderProps {
  page: PageId;
}

export default function Header({ page }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>Nicholas Chiang</h1>
      <nav>
        <ul>
          <Link active={page === 'about'} href='/'>
            About
          </Link>
          <Link active={page === 'photo'} href='/photo'>
            Photography
          </Link>
          <Link active={page === 'film'} href='/film'>
            Filmmaking
          </Link>
          <Link active={page === 'web'} href='/web'>
            Web Development
          </Link>
          <Link active={page === 'research'} href='/research'>
            Research
          </Link>
          <Link href='/resume.pdf'>Resume</Link>
          <Link href='mailto:hi@nicholaschiang.com'>Contact</Link>
        </ul>
      </nav>
      <style jsx>{`
        header {
          width: 100%;
          max-width: var(--geist-page-width-with-margin);
          margin: 0 auto;
        }

        h1 {
          font-size: 36px;
          text-align: center;
          padding: var(--geist-gap-double) var(--geist-page-margin);
          margin: 0;
        }

        nav {
          display: flex;
          align-items: center;
          padding: 0 var(--geist-page-margin);
          justify-content: center;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (max-width: 800px) {
          nav {
            max-width: 100%;
            margin: auto;
            align-items: flex-end;
            overflow: auto;
            scrollbar-width: none;
            justify-content: flex-start;
          }

          ul {
            display: flex;
            flex-grow: 1;
            transform: translateZ(0);
            margin-right: 0;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
