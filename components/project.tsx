import { useMemo, useRef } from 'react';
import Img from 'react-optimized-image';

export interface ProjectProps {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  paper: string;
  code?: string;
  data?: string;
  slides?: string;
}

// TODO: Remove the `require()` statement and instead import these images using
// ES6 syntax. Blocker: the way that `react-optimized-image/plugin` is setup.
// @see {@link https://github.com/cyrilwanner/react-optimized-image/issues/6}
// @see {@link https://github.com/cyrilwanner/next-optimized-images/issues/186}
export default function Project({
  id,
  title,
  authors,
  abstract,
  paper,
  code,
  data,
  slides,
}: ProjectProps): JSX.Element {
  const authorIdx = useMemo(() => {
    return authors.indexOf('Nicholas Chiang');
  }, [authors]);

  return (
    <div className='project'>
      <div className='preview'>
        <a href={paper}>
          <Img
            src={require(`assets/${id}.jpg`)}
            alt={`Preview of ${title}`}
            sizes={[300]}
          />
        </a>
        <ul>
          <li>
            <a href={paper}>Paper</a>
          </li>
          {!!slides && (
            <li>
              <a href={slides}>Slides</a>
            </li>
          )}
          {!!code && (
            <li>
              <a href={code}>Code</a>
            </li>
          )}
          {!!data && (
            <li>
              <a href={data}>Data</a>
            </li>
          )}
        </ul>
      </div>
      <div className='summary'>
        <h3>{title}</h3>
        <h6>
          {`${authors.slice(0, authorIdx).join(', ')}, `}
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

        @media (max-width: 800px) {
          .project {
            flex-direction: column-reverse;
          }

          .preview {
            display: block;
          }

          .preview :global(img) {
            display: none;
          }
        }

        .preview :global(img) {
          width: 100%;
          min-height: 85%;
          box-shadow: var(--shadow-large);
          background: white;
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
      `}</style>
    </div>
  );
}
