import AIChatOverview from "@/components/home/ai-chat-overview";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Process from "@/components/home/process";

export default function Home() {
	return (
		<>
			<Hero />
			<AIChatOverview />
			<Features />
			<Process />
		</>
	);
}
