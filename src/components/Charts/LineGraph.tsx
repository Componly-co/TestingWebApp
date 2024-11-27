import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent, TitleComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { graphic } from "echarts";

echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

const getOption = () => {
	return {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
			},
		},

		grid: {
			top: "3%",
			right: 0,
			left: "7%",
			bottom: "8%",
			containLabel: true,
		},
		xAxis: [
			{
				name: "Months",
				nameLocation: "center",
				nameGap: 40,
				type: "category",
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},

				data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
			},
		],
		yAxis: {
			name: "Usage",
			nameLocation: "center",
			nameGap: 50,
			splitLine: {
				lineStyle: {
					type: "solid",
					color: "rgba(242, 244, 247, 1)",
				},
			},
		},
		series: [
			{
				name: "Design System Usage",
				type: "line",
				stack: "Total",
				areaStyle: {
					color: new graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: " #007BFF",
						},
						{
							offset: 0.9555,
							color: "rgba(127, 86, 217, 0)",
						},
					]),
				},
				smooth: true,
				itemStyle: {
					color: "#007BFF",
				},
				symbolSize: 0.1,
				symbol: "circle",
				data: [42, 50, 46, 43, 51, 62, 68, 63, 75, 70, 80, 85],
			},
		],
	};
};

// Register the required components
const LineGraph = () => {
	return (
		<ReactEChartsCore
			echarts={echarts}
			option={getOption()}
			notMerge={true}
			lazyUpdate={true}
			style={{ height: "500px" }}
			opts={{
				renderer: "canvas",
				width: "auto",
				height: "auto",
				devicePixelRatio: window.devicePixelRatio,
			}}
		/>
	);
};

export default LineGraph;
