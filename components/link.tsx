import NextLink from 'next/link';
import cn from 'classnames';

export interface LinkProps {
  href: string;
  children: string;
  active?: boolean;
}

export default function Link({
  href,
  children,
  active,
}: LinkProps): JSX.Element {
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
