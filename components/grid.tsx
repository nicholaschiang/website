export interface GridProps {
  children: JSX.Element[];
}

export default function Grid({ children }: GridProps): JSX.Element {
  return (
    <div className='wrapper'>
      <div className='grid'>{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: var(--geist-page-width);
          margin: auto;
          padding-left: var(--geist-page-margin);
          padding-right: var(--geist-page-margin);
        }

        .grid {
          display: grid;
          margin: 0;
          grid-gap: var(--geist-gap);
          grid-template-columns: repeat(8, minmax(0, 1fr));
        }
      `}</style>
    </div>
  );
}
