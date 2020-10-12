import NextLink from 'next/link';

function Link({
  href,
  children,
}: {
  href: string;
  children: string;
}): JSX.Element {
  return (
    <>
      <li>
        <NextLink href={href}>
          <a>{children}</a>
        </NextLink>
      </li>
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
      `}</style>
    </>
  );
}

export default function Header(): JSX.Element {
  return (
    <div>
      <header>
        <h1>Nicholas Chiang</h1>
        <nav>
          <ul>
            <Link href='/photo'>Photography</Link>
            <Link href='/video'>Filmmaking</Link>
            <Link href='/code'>Web Development</Link>
            <Link href='/research'>Research</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          width: var(--geist-page-width-with-margin);
          margin: auto;
          padding-left: var(--geist-page-margin);
          padding-right: var(--geist-page-margin);
        }

        h1 {
          font-size: 36px;
          text-align: center;
          margin: var(--geist-gap-double) 0;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
