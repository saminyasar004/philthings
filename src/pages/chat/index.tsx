import Logo from "@/assets/logo.svg";
import UserPlaceholder from "@/assets/user-placeholder.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Chat() {
	const { id } = useParams();

	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "I'm looking for a new smartphone.",
			sender: "user",
			time: "06:50 PM",
		},
		{
			id: 2,
			text: "Based on the user's query, the following products are the best match:",
			sender: "agent",
			time: "06:51 PM",
		},
		{
			id: 3,
			text: "* Alienware m15 R6 [https://affiliate-link.com/product123](https://affiliate-link.com/product123)",
			sender: "agent",
			time: "06:51 PM",
		},
		{
			id: 4,
			text: "* Gaming Laptop XYZ [https://affiliate-link.com/product456](https://affiliate-link.com/product456)",
			sender: "agent",
			time: "06:51 PM",
		},
		{
			id: 5,
			text: "* Laptop ABC [https://affiliate-link.com/product789](https://affiliate-link.com/product789)",
			sender: "agent",
			time: "06:51 PM",
		},
		{
			id: 6,
			text: "Can you recommend a budget option?",
			sender: "user",
			time: "06:52 PM",
		},
		{
			id: 7,
			text: "Sure, consider the BudgetPhone X [https://affiliate-link.com/product101](https://affiliate-link.com/product101).",
			sender: "agent",
			time: "06:53 PM",
		},
		{
			id: 8,
			text: "What about camera quality?",
			sender: "user",
			time: "06:54 PM",
		},
		{
			id: 9,
			text: "The BudgetPhone X has a 48MP camera, great for your needs.",
			sender: "agent",
			time: "06:55 PM",
		},
		{
			id: 10,
			text: "Is it available in black?",
			sender: "user",
			time: "06:56 PM",
		},
		{
			id: 11,
			text: "Yes, it's available in black and silver.",
			sender: "agent",
			time: "06:57 PM",
		},
		{
			id: 12,
			text: "How much does it cost?",
			sender: "user",
			time: "06:58 PM",
		},
		{
			id: 13,
			text: "It's priced at $299. Check the link for details.",
			sender: "agent",
			time: "06:59 PM",
		},
		{
			id: 14,
			text: "Can you suggest a premium option too?",
			sender: "user",
			time: "07:00 PM",
		},
		{
			id: 15,
			text: "For a premium option, try the Flagship Z [https://affiliate-link.com/product202](https://affiliate-link.com/product202).",
			sender: "agent",
			time: "07:01 PM",
		},
	]);

	return (
		<ScrollArea className="h-[70vh] w-full pl-24 pr-8 hide-scrollbar">
			<div className="space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
						className={`flex ${
							message.sender === "agent"
								? "justify-start"
								: "justify-end"
						}`}
					>
						{message.sender === "agent" && (
							<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
								<img src={Logo} alt="Logo" />
							</div>
						)}
						<div
							className={`max-w-[70%] p-3 rounded-lg space-y-2 ${
								message.sender === "agent"
									? "bg-primary text-white"
									: "bg-white text-black"
							} shadow`}
						>
							<p className="text-sm font-medium break-words">
								{message.text}
							</p>
							<p
								className={cn(
									"text-xs mt-1",
									message.sender === "agent"
										? "text-white/80"
										: "text-gray-500"
								)}
							>
								{message.time}
							</p>
						</div>
						{message.sender === "user" && (
							<div className="w-8 h-8 bg-[#FDF9F9] rounded-full flex items-center justify-center ml-2">
								<img src={UserPlaceholder} alt="User Avatar" />
							</div>
						)}
					</div>
				))}
			</div>
		</ScrollArea>
	);
}
