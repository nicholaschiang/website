import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export interface CellProps {
  img: string;
  alt: string;
}

export default function Cell({ img, alt }: CellProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) VanillaTilt.init(ref.current, { max: 4 });
  }, [ref]);

  return (
    <div ref={ref}>
      <img src={img} alt={alt} />
      <style jsx>{`
        div {
          width: auto;
          grid-column-end: span 4;
          margin: 0;
        }

        img {
          width: 100%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
