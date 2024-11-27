import { Button, CustomModal, DatePicker, FilterModal, Header, MenuList, Pagination } from "@componlyco/berkoukes";
import { CalendarMonth, FilterList } from "@mui/icons-material";
import Footer from "../components/common/Footer";
import Report from "../components/Report";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/reports.json";

const Reports = () => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
	const router = useNavigate();

	return (
		<div className='bg-[#F5F6F8]'>
			<Header
				sx={style}
				tabs={[
					{
						type: "no-borders",
						label: "Analytics",
						onClick: () => {
							router("/analytics");
						},
						// active: true,
					},
					{
						type: "primary",
						label: "Reports",
						onClick: () => {},
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
				<div>
					<p className='text-lg leading-6 font-bold'>Nov 18,2024</p>
					<div className='my-2 flex flex-col gap-2'>
						{data.map((report, _i) => (
							<Report key={_i} data={report} />
						))}
					</div>
					<p className='text-lg leading-6 font-bold'>Nov 11,2024</p>
				</div>
				<div className='flex justify-center items-center'>
					<Pagination total={10} />
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

export default Reports;

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
