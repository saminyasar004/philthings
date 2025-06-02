import Logo from "@/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
	const location = useLocation();

	const navMenus = [
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
	];

	return (
		<header className="bg-[#FCFCFF] py-3 border border-b border-[#E9E9E9]">
			<div className="container grid grid-cols-3 gap-2">
				<div className="logo w-full flex items-center justify-start">
					<Link to="/">
						<img className="w-14 h-14" src={Logo} alt="Logo" />
					</Link>
				</div>
				<div className="nav-menu w-full flex items-center justify-center">
					<ul className="w-full flex items-center justify-center gap-12 text-lg font-semibold">
						{navMenus.map((navMenu, index) => (
							<Link
								to={navMenu.path}
								key={index}
								className={cn(
									location.pathname === navMenu.path &&
										"text-primary",
									"hover:text-primary transition-all duration-300"
								)}
							>
								<li>{navMenu.name}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="auth-menu flex items-center justify-end gap-4">
					<Button variant="transparent">Sign UP</Button>
					<Button>Login</Button>
				</div>
			</div>
		</header>
	);
}
