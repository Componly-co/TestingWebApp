import { Button, Tags } from "@componlyco/berkoukes";
import { Link, Stack } from "@mui/material";
import s from "../..//styles/common.module.css";

const Footer = () => {
	const sx = { padding: 2 };

	return (
		<footer className={s.footer}>
			<Stack className={s.info}>
				<img src='images/logo.svg' alt='' />
				<p className={s.description}>
					Measure component usage and your design <br /> system adoption. For Free. Built for developers <br /> &
					designers.
				</p>
				<Stack gap='16px' flexDirection='row'>
					<a href='https://twitter.com/componlyapp' target='_blank' rel='noreferrer'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='Content'>
								<g id='layer1'>
									<path
										id='path1009'
										d='M2.04795 3L9.64166 13.1535L2 21.4087H3.71983L10.4101 14.1812L15.8156 21.4087H21.6683L13.6473 10.6841L20.7601 3H19.0403L12.8789 9.65646L7.90061 3H2.04795ZM4.57709 4.26683H7.26581L19.1388 20.1417H16.45L4.57709 4.26683Z'
										fill='black'
									/>
								</g>
							</g>
						</svg>
					</a>
					<a href='https://www.linkedin.com/company/componly/' target='_blank' rel='noreferrer'>
						<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip0_197_1110)'>
								<path
									d='M22.2283 0.019043H1.77167C1.30179 0.019043 0.851161 0.2057 0.518909 0.537952C0.186657 0.870204 0 1.32083 0 1.79071V22.2474C0 22.7173 0.186657 23.1679 0.518909 23.5001C0.851161 23.8324 1.30179 24.019 1.77167 24.019H22.2283C22.6982 24.019 23.1488 23.8324 23.4811 23.5001C23.8133 23.1679 24 22.7173 24 22.2474V1.79071C24 1.32083 23.8133 0.870204 23.4811 0.537952C23.1488 0.2057 22.6982 0.019043 22.2283 0.019043ZM7.15333 20.464H3.545V9.00238H7.15333V20.464ZM5.34667 7.41404C4.93736 7.41174 4.53792 7.28824 4.19873 7.05913C3.85955 6.83002 3.59584 6.50557 3.44088 6.12673C3.28591 5.74789 3.24665 5.33163 3.32803 4.9305C3.40941 4.52936 3.6078 4.16132 3.89816 3.87282C4.18851 3.58433 4.55782 3.38831 4.95947 3.3095C5.36112 3.2307 5.77711 3.27264 6.15495 3.43003C6.53279 3.58742 6.85554 3.85321 7.08247 4.19386C7.30939 4.5345 7.43032 4.93473 7.43 5.34404C7.43386 5.61808 7.38251 5.89008 7.27901 6.14385C7.17551 6.39761 7.02198 6.62794 6.82757 6.82111C6.63316 7.01428 6.40185 7.16633 6.14742 7.26819C5.893 7.37006 5.62067 7.41966 5.34667 7.41404ZM20.4533 20.474H16.8467V14.2124C16.8467 12.3657 16.0617 11.7957 15.0483 11.7957C13.9783 11.7957 12.9283 12.6024 12.9283 14.259V20.474H9.32V9.01071H12.79V10.599H12.8367C13.185 9.89404 14.405 8.68904 16.2667 8.68904C18.28 8.68904 20.455 9.88404 20.455 13.384L20.4533 20.474Z'
									fill='#0A66C2'
								/>
							</g>
							<defs>
								<clipPath id='clip0_197_1110'>
									<rect width='24' height='24' fill='white' transform='translate(0 0.019043)' />
								</clipPath>
							</defs>
						</svg>
					</a>
				</Stack>
				<Stack flexDirection='row' alignItems='center' gap={1}>
					Built in{" "}
					<Link href='https://tally.so/r/mV919a' target='_blank'>
						<Button label='💂‍♀ London' type='borders' />{" "}
					</Link>{" "}
					and
					<Link href='https://tally.so/r/mBLb87' target='_blank'>
						<Button label='🥐 Paris' type='borders' />
					</Link>
				</Stack>
			</Stack>

			<Stack className={s.footerNavigation}>
				<ul className={s.list}>
					<li className={s.title}>Resources</li>
					<li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<Button disabled type='text-secondary' label='Component Type Checker' sx={sx} />
						<Tags label='Coming Soon' variant='neutral' showClose={false} />
					</li>
					<li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<a href='https://collection.componly.co' target='_blank'>
							<Button type='text-secondary' label='Component Collection' sx={sx} />
						</a>
						<Tags label='New' variant='accent' showClose={false} />
					</li>
				</ul>

				<ul className={s.list}>
					<li className={s.title}>Help</li>
					<li>
						<a href='mailto:eric@componly.co'>
							<Button type='text-secondary' label='Contact Us' sx={sx} />
						</a>
					</li>
				</ul>

				<ul className={s.list}>
					<li className={s.title}>Legal</li>
					<li>
						<Link href='/privacy'>
							<Button type='text-secondary' label='Privacy' sx={sx} />
						</Link>
					</li>
					<li>
						<Link href='/terms'>
							<Button type='text-secondary' label='Terms' sx={sx} />
						</Link>
					</li>
				</ul>
			</Stack>
		</footer>
	);
};

export default Footer;
