export interface GridProps {
  children: JSX.Element[];
  cell: string;
}

export default function Grid({ children, cell }: GridProps): JSX.Element {
  return (
    <div className='grid'>
      {children}
      <style jsx>{`
        .grid {
          --cell: min(${cell}, 100%);
          display: grid;
          margin: 0;
          grid-gap: var(--geist-gap);
          grid-template-columns: repeat(auto-fill, minmax(var(--cell), 1fr));
        }
      `}</style>
    </div>
  );
}
