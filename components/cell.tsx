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
        img {
          width: 100%;
          cursor: pointer;
          margin-bottom: -4px;
        }
      `}</style>
    </div>
  );
}
