import { ChatSidebar } from "@/components/chat-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveUp } from "lucide-react";

export default function ChatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [inputMessage, setInputMessage] = useState("");

	return (
		<SidebarProvider className="h-screen relative">
			<ChatSidebar />
			<main className="p-4 w-full">
				<SidebarTrigger />
				<div className="w-full">
					<div className="header sticky min-h-max h-[10vh] py-4">
						<h1 className="font-montserrat font-semibold text-3xl text-primary">
							Chat AI Assistant
						</h1>
					</div>

					<div className="container">
						{children}

						<div className="controllbar w-full relative pl-24 mt-10">
							<Input
								type="text"
								placeholder="Ask your question..."
								className="bg-transparent w-full h-14 font-montserrat text-lg"
							/>

							<Button
								size="icon"
								className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
							>
								<MoveUp />
							</Button>
						</div>
					</div>
				</div>
			</main>
		</SidebarProvider>
	);
}
