import NextLink from 'next/link';
import cn from 'classnames';

import PageId from 'lib/page';

interface LinkProps {
  href: string;
  children: string;
  active: boolean;
}

function Link({ href, children, active }: LinkProps): JSX.Element {
  return (
    <li>
      <NextLink href={href}>
        <a className={cn({ active })}>{children}</a>
      </NextLink>
      <style jsx>{`
        li {
          display: inline;
          float: none;
          margin: 0 var(--geist-gap);
        }

        a {
          cursor: pointer;
          font-size: 14px;
          text-decoration: none;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a:hover {
          color: var(--geist-foreground);
        }

        a.active {
          color: var(--geist-foreground);
        }

        @media (max-width: 800px) {
          li {
            white-space: nowrap;
            margin: 0 var(--geist-gap-half);
          }

          li:first-of-type {
            margin-left: 0;
          }

          li:last-of-type {
            margin-right: var(--geist-page-margin);
          }
        }
      `}</style>
    </li>
  );
}

export interface HeaderProps {
  page: PageId;
}

export default function Header({ page }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>Nicholas Chiang</h1>
      <nav>
        <ul>
          <Link active={page === 'photo'} href='/'>
            Photography
          </Link>
          <Link active={page === 'film'} href='/film'>
            Filmmaking
          </Link>
          <Link active={page === 'code'} href='/code'>
            Web Development
          </Link>
          <Link active={page === 'research'} href='/research'>
            Research
          </Link>
          <Link active={page === 'about'} href='/about'>
            About
          </Link>
          <Link active={page === 'contact'} href='/contact'>
            Contact
          </Link>
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
