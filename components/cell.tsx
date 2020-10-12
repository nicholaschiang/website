export interface CellProps {
  img: string;
  alt: string;
}

export default function Cell({ img, alt }: CellProps): JSX.Element {
  return (
    <div>
      <img src={img} alt={alt} />
      <style jsx>{`
        div {
          width: auto;
          grid-column-end: span 4;
          margin: 0;
          overflow: hidden;
        }

        img {
          width: 100%;
          cursor: pointer;
          transition: transform 0.5s ease;
        }

        img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
