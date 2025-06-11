import AIChatOverview from "@/components/home/ai-chat-overview";
import CTA from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Process from "@/components/home/process";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
	return (
		<>
			<Hero />
			<AIChatOverview />
			<Features />
			<Process />
			<Faq />
			<Pricing />
			<Testimonial />
			<CTA />
		</>
	);
}
