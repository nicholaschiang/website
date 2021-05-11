import { useEffect, useRef } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import Page from 'components/page';

async function initTilt(elem: HTMLAnchorElement): Promise<void> {
  const { default: VanillaTilt } = await import('vanilla-tilt');
  VanillaTilt.init(elem, {
    'full-page-listening': true,
    'max-glare': 0.1,
    glare: true,
    max: 4,
  });
}

interface LinkProps {
  href: string;
  children: string;
}

function Link({ href, children }: LinkProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a
        target={!href.startsWith('/') ? '_blank' : undefined}
        rel={!href.startsWith('/') ? 'noopener noreferrer' : undefined}
      >
        {children}
        <style jsx>{`
          a {
            cursor: pointer;
            font-size: 16px;
            text-decoration: none;
            color: var(--accents-5);
            transition: color 0.2s ease 0s;
          }

          a:hover {
            color: var(--geist-foreground);
          }
        `}</style>
      </a>
    </NextLink>
  );
}

export default function AboutPage(): JSX.Element {
  const portraitRef = useRef<HTMLAnchorElement>(null);
  const landscapeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!portraitRef.current) return;
    void initTilt(portraitRef.current);
  }, [portraitRef]);
  useEffect(() => {
    if (!landscapeRef.current) return;
    void initTilt(landscapeRef.current);
  }, [landscapeRef]);

  return (
    <Page title='About - Nicholas Chiang' id='about'>
      <div className='flex'>
        <a ref={portraitRef} href='/me-cropped.png' className='img portrait'>
          <Image
            src='/me-cropped.png'
            height={365}
            width={300}
            alt='Me'
            priority
          />
        </a>
        <a ref={landscapeRef} href='/me-original.jpg' className='img landscape'>
          <Image
            src='/me-original.jpg'
            objectPosition='center'
            objectFit='cover'
            layout='fill'
            alt='Me'
            priority
          />
        </a>
        <article>
          <p>
            Hi! I’m Nicholas, a junior at{' '}
            <Link href='https://gunn.pausd.org'>Gunn High School</Link>.
          </p>
          <p>
            As a freshman, I helped{' '}
            <Link href='https://luke.hsiao.dev'>Luke Hsiao</Link> with{' '}
            <Link href='/research'>machine learning research</Link> at{' '}
            <Link href='https://sing.stanford.edu'>Stanford University</Link>.
          </p>
          <p>
            During my sophomore year, I created{' '}
            <Link href='https://tutorbook.org'>Tutorbook</Link> to make peer
            tutoring easier.
          </p>
          <p>
            Now, I’m mostly a <Link href='/web'>web developer</Link>, sometimes
            a <Link href='/photo'>photographer</Link>, and occasionally I’ll
            film <Link href='/film'>fun videos</Link> to my favorite hip-hop
            music.
          </p>
          <p>
            I’m currently looking for a summer internship doing web development
            at an established company.
          </p>
          <p>
            Feel free to skim <Link href='/resume.pdf'>my resume</Link> and{' '}
            <Link href='mailto:nicholas@tutorbook.org'>shoot me an email</Link>.
          </p>
        </article>
        <style jsx>{`
          .flex {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .img {
            flex: none;
            font-size: 14px;
            text-decoration: none;
            color: var(--accents-5);
            background-color: var(--accents-2);
            transition: color 0.2s ease 0s;
          }

          .img:hover {
            color: var(--geist-foreground);
          }

          .img :global(img) {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .img.portrait {
            width: 300px;
            height: 365px;
          }

          .img.landscape {
            width: 100%;
            height: 365px;
            display: none;
          }

          article {
            flex: 1 1 0;
            max-width: 400px;
            margin-left: 32px;
          }

          p {
            font-size: 16px;
            line-height: 24px;
            margin: var(--geist-gap-half) 0;
          }

          p:first-child {
            margin-top: 0;
          }

          p:last-child {
            margin-bottom: 0;
          }

          @media (max-width: 800px) {
            .flex {
              flex-direction: column;
            }

            .img.landscape {
              display: unset;
            }

            .img.portrait {
              display: none;
            }

            article {
              max-width: unset;
              margin-left: 0;
              margin-top: 24px;
            }
          }

          @media (max-width: 600px) {
            .img.landscape {
              display: none;
            }

            article {
              margin: 0;
            }
          }
        `}</style>
      </div>
    </Page>
  );
}
