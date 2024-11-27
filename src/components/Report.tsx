import { Button, Card, Tags } from "@componlyco/berkoukes";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import React from "react";

const Report = ({ data }) => {
	return (
		<Card>
			<div className='flex gap-2'>
				<div className='text-sm text-[#616161] flex items-center gap-1'>
					<CalendarMonth fontSize='small' /> {data.date}
				</div>
				<div className='text-sm text-[#616161] flex items-center gap-1'>
					<AccessTime fontSize='small' /> {data.time}
				</div>
			</div>
			<div className='flex flex-col gap-2 w-full '>
				<div>
					<div className='flex gap-2 items-center'>
						<Button
							sx={{ maxWidth: "fit-content" }}
							type='borders'
							icon={<img src={data.source === "code" ? "/icons/github.svg" : "/icons/figma.svg"} alt='github' />}
						/>
						<h4 className='text-2xl font-bold leading-6'>{data.name}</h4>
						<Tags
							style={{
								background: "#F1F1F1",
								border: "none",
							}}
							label={data.type}
							variant='neutral'
							showClose={false}
						/>
						{data.ds && <Tags label={data.ds} variant='accent' showClose={false} />}
					</div>
				</div>
				<div className='flex justify-between w-full'>
					<div className='flex gap-1 items-center'>
						<div className='flex gap-1 items-center'>
							<img src='/icons/javascript.svg' alt='javascript' />
							{data.framework}
						</div>
						<div className='flex gap-1 items-center'>
							<img src='/icons/search.svg' alt='javascript' />
							{data.lib}
						</div>
						<div className='flex gap-1 items-center'>
							<img src='/icons/avatar.svg' alt='javascript' />
							{data.email}
						</div>
					</div>
					<Tags label={data.format} variant='neutral' showClose={false} />
				</div>
				<div className='flex items-center gap-3'>
					{data.data.map((d, _i) => (
						<p key={_i} className='flex gap-2 font-bold'>
							<span>{d.name}</span> <span className='text-[#475467]'>{d.value}</span>
						</p>
					))}
				</div>
			</div>
		</Card>
	);
};

export default Report;
