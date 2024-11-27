import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TitleComponent, TooltipComponent, GridComponent, PieChart, CanvasRenderer, LegendComponent]);

const getOption = (data) => {
	return {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
			},
		},

		grid: {
			top: "10%",
			right: 0,
			left: "7%",
			bottom: "8%",
		},
		legend: {
			orient: "vertical",
			top: "top",
			left: "left",
			itemWidth: 10,
			itemHeight: 10,
			itemGap: 10,
			icon: "circle",
		},
		series: [
			{
				name: "DS Adoption",
				type: "pie",
				stack: "Total",
				label: {
					show: false,
				},
				smooth: true,
				radius: ["30%", "60%"],
				startAngle: 0,
				tooltip: {
					trigger: "item",
					formatter: "{b}: {d}%",
				},
				data,
			},
		],
	};
};

// Register the required components
const PieGraph = ({ data }) => {
	return (
		<ReactEChartsCore
			echarts={echarts}
			option={getOption(data)}
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

export default PieGraph;
