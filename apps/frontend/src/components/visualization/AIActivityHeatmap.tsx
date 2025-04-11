import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

interface HeatmapVisualizationProps {
  data: Array<{
    timestamp: string;
    value: number;
    category: string;
  }>;
  width?: number;
  height?: number;
}

/**
 * Advanced AI Activity Heatmap using D3.js
 * Visualizes AI agent activity patterns over time with adaptive color scaling
 * and smooth transitions for real-time updates
 */
export function AIActivityHeatmap({
  data,
  width = 800,
  height = 400,
}: HeatmapVisualizationProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Process data for heatmap
    const categories = Array.from(new Set(data.map(d => d.category)));
    const timeStamps = Array.from(new Set(data.map(d => d.timestamp)));

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(timeStamps)
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleBand()
      .domain(categories)
      .range([innerHeight, 0])
      .padding(0.1);

    const colorScale = d3
      .scaleSequential(d3.interpolateInferno)
      .domain([0, d3.max(data, d => d.value) || 0]);

    // Create cells with transitions
    const cells = g
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", d => xScale(d.timestamp) || 0)
      .attr("y", d => yScale(d.category) || 0)
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .attr("rx", 4) // Rounded corners
      .attr("fill", d => colorScale(d.value))
      .style("opacity", 0)
      .transition()
      .duration(750)
      .style("opacity", 1);

    // Add tooltips
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.8)")
      .style("color", "white")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("opacity", 0);

    g.selectAll("rect")
      .on("mouseover", (event, d: any) => {
        tooltip
          .style("opacity", 1)
          .html(
            `Category: ${d.category}<br/>Time: ${d.timestamp}<br/>Value: ${d.value}`
          )
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 10 + "px");
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      });

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    g.append("g").call(yAxis);

  }, [data, width, height]);

  return (
    <div className="relative">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
}
