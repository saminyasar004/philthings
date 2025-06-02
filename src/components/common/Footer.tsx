import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";

export default function Footer() {
	const footerNavMenus = [
		{
			title: "Legal Information",
			links: [
				{
					name: "Privacy / Policy",
					path: "/privacy-policy",
				},
				{
					name: "Terms & Condition",
					path: "/terms-and-conditions",
				},
			],
		},
		{
			title: "Navigation Links",
			links: [
				{
					name: "Home",
					path: "/",
				},
				{
					name: "Features",
					path: "/features",
				},
				{
					name: "FAQ",
					path: "/faq",
				},
				{
					name: "Pricing",
					path: "/pricing",
				},
			],
		},
	];

	return (
		<footer className="bg-dark-blue text-white py-20">
			<div className="container grid grid-cols-5">
				<div className="logo col-span-2 flex flex-col gap-4">
					<Link to="/">
						<img className="w-28 h-28" src={Logo} alt="Logo" />
					</Link>

					<p className="text-lg font-normal">
						Your personal AI shopping assistant that helps <br />{" "}
						you find the perfect products.
					</p>
				</div>

				{footerNavMenus.map((navSection, index) => (
					<div
						className="menu w-full flex flex-col gap-3"
						key={index}
					>
						<h5 className="font-medium text-2xl">
							{navSection.title}
						</h5>

						<ul className="w-full flex flex-col gap-2 pt-2 text-base text-[#A2ADBB]">
							{navSection.links.map((navLink, index) => (
								<li>
									<Link to={navLink.path} key={index}>
										{navLink.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}

				<div className="flex flex-col gap-4">
					<h5 className="font-medium text-2xl">Subscribe</h5>

					<div className="flex gap-0 items-center justify-start">
						<Input
							type="email"
							name="email"
							className="h-14 pl-6 w-3/4 rounded-r-none outline-none border-none right-0 text-primary focus:ring-0 focus:border-0 focus:outline-none font-montserrat font-medium"
							placeholder="Email address"
						/>
						<button className="bg-primary flex items-center justify-center px-4 h-14 rounded-r-md">
							<MoveRight size={30} />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
