import SectionHeader from "@/components/common/section-header";
import AIChatBotOverviewBanner from "@/assets/ai-chatbot-overview-banner.svg";

export default function AIChatOverview() {
	return (
		<section className="py-24">
			<div className="container">
				<SectionHeader className="mb-7" title="AI Chat Overview" />

				<div className="w-full flex flex-col items-center justify-center gap-6">
					<h2 className="font-semibold text-5xl text-primary">
						Experience Our AI Chatbot
					</h2>

					<p className="w-1/3 text-center font-montserrat text-xl text-[#373737] leading-relaxed">
						Intelligent conversations with context awareness and
						personalized recommendations
					</p>
				</div>

				<div className="flex items-center justify-center py-16">
					<img
						src={AIChatBotOverviewBanner}
						alt="ai-chatbot-overview-banner"
						className="max-w-full"
					/>
				</div>
			</div>
		</section>
	);
}
