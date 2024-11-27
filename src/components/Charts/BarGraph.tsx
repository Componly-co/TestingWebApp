import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer, LegendComponent]);

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
			left: "10%",
			bottom: "8%",
			containLabel: true,
		},

		legend: {
			data: ["Core", "Custom"],
			orient: "vertical",
			top: "top",
			left: "left",
			itemWidth: 10,
			itemHeight: 10,
			itemGap: 10,
			icon: "circle",
		},

		xAxis: [
			{
				name: "Mois",
				nameLocation: "center",
				nameGap: 50,
				type: "category",
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				data: ["Jan", "Feb", "Mar", "Apr", "May"],
			},
		],
		yAxis: {
			name: "Number of PR",
			nameLocation: "center",
			nameGap: 50,
			splitLine: {
				lineStyle: {
					type: "solid",
					color: "white",
				},
			},
		},
		series: [
			{
				name: "Custom",
				type: "bar",
				stack: "total",
				data: [40, 50, 60, 30, 70],
				smooth: true,
				itemStyle: {
					color: "#ECEFF3",
				},
				barWidth: 32,
				symbolSize: 0.1,
				symbol: "circle",
			},
			{
				name: "Core",
				type: "bar",
				stack: "total",
				smooth: true,
				itemStyle: {
					color: "#6CE9A6",
				},
				barWidth: 32,
				symbolSize: 0.1,
				symbol: "circle",
				data: [60, 50, 40, 70, 30],
			},
		],
	};
};

// Register the required components
const BarGraph = () => {
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

export default BarGraph;
