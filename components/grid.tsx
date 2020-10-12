export interface GridProps {
  children: JSX.Element[];
}

export default function Grid({ children }: GridProps): JSX.Element {
  return (
    <div className='wrapper'>
      <div className='grid'>{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: var(--geist-page-width-with-margin);
          margin: auto;
          padding: var(--geist-gap-double) var(--geist-page-margin);
        }

        .grid {
          --cell: min(400px, 100%);
          display: grid;
          margin: 0;
          grid-gap: var(--geist-gap);
          grid-template-columns: repeat(auto-fill, minmax(var(--cell), 1fr));
        }
      `}</style>
    </div>
  );
}
