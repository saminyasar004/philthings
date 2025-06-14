import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
	BadgeDollarSign,
	Bell,
	CircleGauge,
	HandCoins,
	Settings,
	UsersRound,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AdminDashboardSidebar } from "../admin-dashboard-sidebar";
import { useEffect, useState } from "react";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const location = useLocation();
	// Menu items.
	const sidebarMenuItems = [
		{
			title: "Dashboard",
			header: "Good morning, pappu",
			description: "Here's your dashboard overview.",
			url: "/dashboard",
			icon: CircleGauge,
			isSidebar: true,
		},
		{
			title: "Users",
			header: "Users",
			description: "Here's your dashboard overview.",
			url: "/users",
			icon: UsersRound,
			isSidebar: true,
		},
		{
			title: "Affiliate Links",
			header: "Affiliate Links",
			description:
				"Manage and track your affiliate marketing partnerships.",
			url: "/affiliate-links",
			icon: HandCoins,
			isSidebar: true,
		},
		{
			title: "Subscriptions",
			header: "Subscriptions",
			description: "",
			url: "/subscriptions",
			icon: BadgeDollarSign,
			isSidebar: true,
		},
		{
			title: "Settings",
			header: "",
			description: "",
			url: "/settings",
			icon: Settings,
			isSidebar: true,
			children: [
				{
					title: "Privacy Policy",
					header: "Privacy Policy",
					description: "",
					url: "/settings/privacy-policy",
				},
				{
					title: "Terms and Condition",
					header: "Terms & Condition",
					description: "",
					url: "/settings/terms-and-condition",
				},
			],
		},
		{
			title: "Notification",
			header: "Notification",
			description: "",
			url: "/notification",
			icon: Bell,
			isSidebar: false,
		},
	];

	const [currentItem, setCurrentItem] = useState(sidebarMenuItems[0]);

	console.log(location.pathname);

	useEffect(() => {
		setCurrentItem(
			sidebarMenuItems.find((item) => item.url === location.pathname)
		);
		console.log(currentItem);
	}, [location.pathname]);

	return (
		<SidebarProvider className="h-screen relative">
			<AdminDashboardSidebar
				items={sidebarMenuItems.filter((item) => item.isSidebar)}
			/>
			<main className="p-4 w-full bg-[#fefefe]">
				<SidebarTrigger />
				<div className="container">
					<div className="header w-full flex items-center justify-between pb-6">
						<div className="header space-y-2">
							<h1 className="font-semibold text-3xl text-primary">
								{currentItem?.header}
							</h1>

							{currentItem?.description.length > 0 && (
								<p className="text-[#2A2A2A] font-montserrat text-sm">
									{currentItem?.description}
								</p>
							)}
						</div>

						<Link to="/notification">
							<div className="w-full flex items-center justify-center gap-1">
								<Bell className="text-primary" />
								<span className="p-2 px-3 text-black font-lora font-medium rounded-lg bg-[#F9F9F9]">
									12
								</span>
							</div>
						</Link>
					</div>

					{children}
				</div>
			</main>
		</SidebarProvider>
	);
}
