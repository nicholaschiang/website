import NextLink from 'next/link';

import Select from 'components/select';

import DarkIcon from 'components/icons/dark';
import LightIcon from 'components/icons/light';
import SystemIcon from 'components/icons/system';

import { useTheme } from 'lib/theme';

interface LinkProps {
  href: string;
  children: string;
}

function Link({ href, children }: LinkProps): JSX.Element {
  return (
    <li>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
      <style jsx>{`
        li {
          padding: var(--geist-gap-quarter) 0;
        }

        a {
          cursor: pointer;
          font-size: 0.875rem;
          text-decoration: none;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a:hover {
          color: var(--geist-foreground);
        }
      `}</style>
    </li>
  );
}

interface GroupProps {
  label: string;
  children: JSX.Element[];
}

function Group({ label, children }: GroupProps): JSX.Element {
  return (
    <div>
      <h3>{label}</h3>
      <ul>{children}</ul>
      <style jsx>{`
        div:not(:last-of-type) {
          margin-right: var(--geist-gap);
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        h3 {
          font-weight: 400;
          font-size: 0.875rem;
          margin: var(--geist-gap-half) 0;
        }
      `}</style>
    </div>
  );
}

export default function Footer(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <footer>
      <nav role='navigation'>
        <Group label='Photography'>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
        </Group>
        <Group label='Photography'>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
        </Group>
        <Group label='Photography'>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
        </Group>
        <Group label='Photography'>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
          <Link href='/photo'>Photography</Link>
        </Group>
      </nav>
      <section>
        <span>Copyright &copy; 2020 Nicholas Chiang. All rights reserved.</span>
        <Select
          small
          value={theme}
          onChange={setTheme}
          label='Change color theme'
          options={[
            {
              value: 'system',
              label: 'System',
              icon: <SystemIcon />,
            },
            {
              value: 'dark',
              label: 'Dark',
              icon: <DarkIcon />,
            },
            {
              value: 'light',
              label: 'Light',
              icon: <LightIcon />,
            },
          ]}
        />
      </section>
      <style jsx>{`
        footer {
          margin-top: calc(1.5 * var(--geist-gap-double));
          background: var(--accents-1);
          border-top: 1px solid var(--accents-2);
          padding: calc(1.5 * var(--geist-gap)) var(--geist-gap)
            var(--geist-gap);
        }

        nav {
          max-width: var(--geist-page-width);
          margin: 0 auto;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
        }

        section {
          max-width: var(--geist-page-width);
          margin: var(--geist-gap) auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--geist-gap) 0;
        }

        span {
          color: var(--accents-5);
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
}
