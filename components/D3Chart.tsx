"use client";

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface D3ChartProps {
  data: number[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  lineColor?: string;
  axisColor?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

const D3Chart: React.FC<D3ChartProps> = ({
  data,
  height = 300,
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  lineColor = "steelblue",
  axisColor = "black",
  xAxisLabel = "Time",
  yAxisLabel = "Value",
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineData: [number, number][] = React.useMemo(() => data.map((d, i) => [i, d]), [data]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);

    const previousData = svg.selectAll("path").data();
    if (JSON.stringify(previousData) !== JSON.stringify(data)) {
      svg.selectAll("*").remove(); // Clear previous chart
    }

    const chartWidth =
      containerRef.current.offsetWidth - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    svg
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, chartWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data)])
      .range([chartHeight, 0]);

    const xAxis = d3.axisBottom(xScale).tickSize(-5);
    const yAxis = d3.axisLeft(yScale).tickSize(-5);

    svg
      .append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis)
      .selectAll("line")
      .attr("stroke", axisColor)
      .attr("stroke-opacity", 0.5);

    svg.append("g").call(yAxis).selectAll("line").attr("stroke", axisColor).attr("stroke-opacity", 0.5);

    const line = d3
      .line<[number, number]>()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));

    const path = svg.append("path")
      .attr("fill", "none")
      .attr("stroke", lineColor)
      .attr("stroke-width", 1.5)
      .attr("d", line(lineData));

    svg
      .append("text")
      .attr("x", chartWidth / 2)
      .attr("y", chartHeight + margin.bottom - 5)
      .style("text-anchor", "middle")
      .text(xAxisLabel);

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -chartHeight / 2)
      .attr("y", -margin.left + 10)
      .style("text-anchor", "middle")
      .text(yAxisLabel);
  }, [data, height, margin, lineColor, axisColor, xAxisLabel, yAxisLabel]);

  return (
    <div className="rounded-lg bg-white p-4 md:p-6 shadow-md dark:bg-gray-800">
      <div ref={containerRef}>
        <svg ref={svgRef} height={height} />
      </div>
    </div>
  );
};

export default D3Chart;
