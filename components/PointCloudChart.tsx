"use client";

/// <reference types="three" />
"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Slider } from "@nextui-org/react";

const PointCloudChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointSize, setPointSize] = useState<number>(1);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / 400,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(containerRef.current.offsetWidth, 400);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const points = [];
    const colors = [];

    for (let i = 0; i < 50000; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;

      points.push(x, y, z);

      const color = new THREE.Color();

      color.setHSL((z + 100) / 200, 1, 0.5);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3),
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: pointSize,
      vertexColors: true,
    });
    const pointCloud = new THREE.Points(geometry, material);

    scene.add(pointCloud);

    camera.position.z = 300;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      pointCloud.rotation.y += deltaX * 0.002;
      pointCloud.rotation.x += deltaY * 0.002;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    containerRef.current.addEventListener("mousedown", handleMouseDown);
    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseup", handleMouseUp);
    containerRef.current.addEventListener("mouseleave", handleMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        containerRef.current.removeEventListener("mousedown", handleMouseDown);
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
        containerRef.current.removeEventListener("mouseup", handleMouseUp);
        containerRef.current.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [pointSize]);

  return (
    <div className="flex flex-col rounded-lg bg-white p-4 md:p-6 shadow-md dark:bg-gray-800">
      <div ref={containerRef} />
      <div className="mt-4">
        <Slider
          classNames={{
            thumb: "bg-blue-500",
            track: "bg-gray-200 dark:bg-gray-700",
            filler: "bg-blue-500",
          }}
          label="Point Size"
          maxValue={3}
          minValue={0.1}
          step={0.1}
          value={pointSize}
          onChange={(value) => setPointSize(Number(value))}
        />
      </div>
    </div>
  );
};

export default PointCloudChart;
