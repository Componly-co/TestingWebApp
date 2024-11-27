import { Button, ChartCard, CustomModal, DatePicker, FilterModal, Header, MenuList } from "@componlyco/berkoukes";
import { CalendarMonth, FilterList } from "@mui/icons-material";
import Footer from "../components/common/Footer";
import { useState } from "react";
import LineGraph from "../components/Charts/LineGraph";
import PieGraph from "../components/Charts/PieGraph";
import BarGraph from "../components/Charts/BarGraph";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
	const router = useNavigate();

	return (
		<div className='bg-[#F5F6F8]'>
			<Header
				sx={style}
				tabs={[
					{
						type: "primary",
						label: "Analytics",
						onClick: () => {},
						// active: true,
					},
					{
						type: "no-borders",
						label: "Reports",
						onClick: () => {
							router("/reports");
						},
					},
				]}
				endButtons={[
					{
						label: "Logout",
						type: "primary",
						onClick: () => {
							router("/");
						},
					},
				]}
				type='app'
				withDivider={false}
			/>
			<div className='px-20 pt-6 pb-12 flex flex-col gap-6'>
				<div className='flex justify-between'>
					<div className='flex gap-4'>
						<MenuList
							label='All Sources'
							items={[
								{
									label: "All",
									onClick: () => {},
								},
								{
									label: "Components",
									onClick: () => {},
								},
								{
									label: "Tokens",
									onClick: () => {},
								},
								{
									label: "Colors",
									onClick: () => {},
								},
							]}
						/>
						<MenuList
							label='All Applications'
							items={[
								{
									label: "All",
									onClick: () => {},
								},
								{
									label: "Components",
									onClick: () => {},
								},
								{
									label: "Tokens",
									onClick: () => {},
								},
								{
									label: "Colors",
									onClick: () => {},
								},
							]}
						/>
						<MenuList
							label='All DS'
							items={[
								{
									label: "All",
									onClick: () => {},
								},
								{
									label: "Components",
									onClick: () => {},
								},
								{
									label: "Tokens",
									onClick: () => {},
								},
								{
									label: "Colors",
									onClick: () => {},
								},
							]}
						/>
					</div>
					<div className='flex gap-4'>
						<Button label='Filters' type='borders' icon={<FilterList />} onClick={() => setIsFilterModalOpen(true)} />
						<Button
							label='Jan 6, 2022 – Nov 18, 2024'
							type='borders'
							icon={<CalendarMonth />}
							onClick={() => setIsDatePickerOpen(true)}
						/>
					</div>
				</div>
				<div className='flex flex-wrap gap-4 justify-stretch items-stretch'>
					<ChartCard
						sx={{ width: "calc(50% - 12px)", height: "auto" }}
						primaryText='Design System usage over the time'
						secondaryText='Track how your rating compares to your industry average.'
						withFooter={false}
						children={<LineGraph />}
					/>
					<ChartCard
						sx={{ width: "calc(50% - 12px)", height: "auto" }}
						primaryText='DS Adoption'
						withFooter={false}
						children={<PieGraph data={DSPieData} />}
					/>
					<ChartCard
						sx={{ width: "calc(50% - 12px)", height: "auto" }}
						primaryText='DS Version consumed'
						withFooter={false}
						children={<PieGraph data={MUIPieData} />}
					/>
					<ChartCard
						sx={{ width: "calc(50% - 12px)", height: "auto" }}
						primaryText='Components numbers over the time'
						withFooter={false}
						children={<BarGraph />}
					/>
				</div>
			</div>
			<FilterModal
				isOpened={isFilterModalOpen}
				onValidate={() => {}}
				onClose={() => {
					setIsFilterModalOpen(false);
				}}
				sections={[
					{
						title: "Sources",
						type: "checkbox",
						data: [
							{
								label: "All",
								value: "all",
							},
							{
								label: "Components",
								value: "components",
							},
							{
								label: "Tokens",
								value: "tokens",
							},
							{
								label: "Colors",
								value: "colors",
							},
						],
					},
				]}
			/>
			<CustomModal
				sxBody={{
					maxWidth: "auto",
					padding: "0px",
					gap: "0px",
				}}
				sxCard={{
					// background: "transparent",
					// border: "none",
					// outline: "none",
					maxWidth: "auto",
					padding: "0px",
					gap: "0px",
				}}
				sxFooter={{
					display: "none",
				}}
				isOpened={isDatePickerOpen}
				onClose={() => setIsDatePickerOpen(false)}
				title=''
				footerButtons={null}
				withClose={false}
			>
				<DatePicker />
			</CustomModal>
			<Footer />
		</div>
	);
};

export default Analytics;

const style = {
	padding: "12px 24px",

	"& div": {
		width: "100%",
		"& .tabs-button": {
			display: "flex",
			justifyContent: "flex-end",
		},

		"& .endButtons": {
			justifyContent: "flex-end",
		},
	},
};

const DSPieData = [
	{
		value: 48,
		name: "DS Components",
		itemStyle: {
			color: "#007BFF",
		},
	},
	{
		value: 52,
		name: "Non-DS Components",
		itemStyle: {
			color: "#96C9FF",
		},
	},
];

const MUIPieData = [
	{
		value: 48,
		name: "@mui/material^5.11: 48%",
		itemStyle: {
			color: "#007BFF",
		},
	},
	{
		value: 52,
		name: "@mui/material^5.12: 52%",
		itemStyle: {
			color: "#96C9FF",
		},
	},
];
