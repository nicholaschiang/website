import Image from 'next/image';
import { useMemo } from 'react';

export interface Link {
  href: string;
  label: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  links: Link[];
}

export default function Project({
  id,
  title,
  authors,
  abstract,
  links,
}: ProjectProps): JSX.Element {
  const authorIdx = useMemo(() => authors.indexOf('Nicholas Chiang'), [
    authors,
  ]);

  return (
    <div className='project'>
      <div className='preview'>
        <a className='display' href={links[0]?.href}>
          <Image
            src={`/imgs/${id}.jpg`}
            alt={`Preview of ${title}`}
            layout='fill'
            sizes='300px'
          />
        </a>
        <ul>
          {links.map(({ href, label }) => (
            <li key={label.toLowerCase().split(' ').join('-')}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='summary'>
        <h3>{title}</h3>
        <h6>
          {authorIdx !== 0 && `${authors.slice(0, authorIdx).join(', ')}, `}
          <b>Nicholas Chiang</b>
          {`, ${authors.slice(authorIdx + 1).join(', ')}`}
        </h6>
        <p>
          {abstract.split(' \n ').map((paragraph, idx) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <p key={`${id}-paragraph-${idx}`}>{paragraph}</p>
          ))}
        </p>
      </div>
      <style jsx>{`
        .project {
          max-width: var(--geist-page-width-with-margin);
          margin: auto;
          padding: var(--geist-gap-double) var(--geist-page-margin) 0;
          display: flex;
        }

        .project:last-of-type {
          padding-bottom: var(--geist-gap-double);
        }

        .preview {
          flex: none;
          width: 300px;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-right: var(--geist-gap);
        }

        .preview a.display {
          width: 100%;
          min-height: 90%;
          background-color: var(--accents-2);
          box-shadow: var(--shadow-large);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        h3 {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 14px;
        }

        h6 {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        p {
          font-size: 14px;
          margin: 14px 0;
        }

        b {
          font-weight: 800;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
        }

        li {
          display: inline;
          float: none;
          margin: 0;
        }

        li:not(:last-of-type) {
          margin-right: var(--geist-gap);
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

        @media (max-width: 800px) {
          .project {
            flex-direction: column-reverse;
          }

          .preview {
            display: block;
            width: unset;
            margin: 0;
          }

          .preview a.display {
            display: none;
          }

          ul {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
