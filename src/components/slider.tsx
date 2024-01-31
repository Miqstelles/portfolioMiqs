import "../style/slider.css";

import React, { useState, ReactNode, CSSProperties } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface CardProps {
  title: string;
  content: string;
}

interface CarouselProps {
  children: ReactNode;
}

interface CarouselStyle extends CSSProperties {
  "--active"?: number;
  "--offset"?: number;
  "--direction"?: number;
  "--abs-offset"?: number;
}

const MAX_VISIBILITY = 3;

export function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export function Carousel({ children }: CarouselProps) {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <FaChevronLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className="card-container"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i) as number,
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as CarouselStyle
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
