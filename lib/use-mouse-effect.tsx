import { useState, useRef, useEffect } from 'react';

export function useMouseEffect(color = 'rgba(219, 219, 219, 0.1)') {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      const isNear =
        x >= -50 && x <= rect.width + 100 && y >= -50 && y <= rect.height + 100;
      setIsHovered(isNear);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return {
    isHovered,
    cardRef,
    mousePosition,
    Render: () => (
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, ${color}, transparent 100%)`,
        }}
      />
    ),
  };
}
