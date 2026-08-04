"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number; r: number; phase: number };

export function DataFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.5, y: 0.45 };
    let tick = 0;
    let rafId = 0;
    let width = 0;
    let height = 0;
    let points: Point[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 640 ? 18 : 32;
      points = Array.from({ length: count }, (_, index) => ({
        x: ((index * 47) % 101) / 101 * width,
        y: ((index * 71) % 97) / 97 * height,
        vx: ((index % 5) - 2) * 0.035,
        vy: (((index * 3) % 5) - 2) * 0.025,
        r: 1.1 + (index % 3) * 0.55,
        phase: index * 0.7,
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX / Math.max(window.innerWidth, 1);
      pointer.y = event.clientY / Math.max(window.innerHeight, 1);
    };

    const drawRibbon = (offset: number, alpha: number, color: string) => {
      const parallaxX = (pointer.x - 0.5) * 28;
      const parallaxY = (pointer.y - 0.5) * 16;
      context.beginPath();
      for (let x = -80; x <= width + 80; x += 24) {
        const progress = x / Math.max(width, 1);
        const y = height * (0.25 + offset) + Math.sin(progress * Math.PI * 2.2 + tick * 0.003 + offset * 8) * 54;
        const px = x + parallaxX * (0.25 + offset);
        const py = y + parallaxY * (0.25 + offset);
        if (x === -80) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.strokeStyle = color;
      context.globalAlpha = alpha;
      context.lineWidth = 1.1;
      context.stroke();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const dark = document.documentElement.dataset.theme === "dark" ||
        (!document.documentElement.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
      const cyan = dark ? "112, 229, 255" : "0, 118, 164";
      const violet = dark ? "155, 135, 255" : "103, 78, 199";

      drawRibbon(0.06, 0.22, `rgb(${cyan})`);
      drawRibbon(0.23, 0.14, `rgb(${violet})`);
      drawRibbon(0.43, 0.1, `rgb(${cyan})`);

      context.globalAlpha = 1;
      for (const point of points) {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < -20) point.x = width + 20;
          if (point.x > width + 20) point.x = -20;
          if (point.y < -20) point.y = height + 20;
          if (point.y > height + 20) point.y = -20;
        }

        for (const other of points) {
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < 145) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(${cyan}, ${0.055 * (1 - distance / 145)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        const pulse = reduceMotion ? 1 : 0.78 + Math.sin(tick * 0.018 + point.phase) * 0.22;
        context.beginPath();
        context.arc(point.x, point.y, point.r * pulse, 0, Math.PI * 2);
        context.fillStyle = `rgba(${point.phase % 2 > 1 ? violet : cyan}, 0.52)`;
        context.fill();
      }

      context.globalAlpha = 1;
      if (!reduceMotion) {
        tick += 1;
        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="data-flow" aria-hidden="true" />;
}
