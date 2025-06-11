import { Button } from "@/components/ui/button";
import HeroBanner from "@/assets/hero-banner.svg";
import HeroEllipse from "@/assets/hero-bottom-sparkle-ellipse.svg";

export default function Hero() {
	return (
		<section className="py-12 md:py-24">
			<div className="container relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
					<div className="flex flex-col gap-5 items-center text-center lg:text-left lg:items-start md:pt-6 mb-12">
						<h1 className="text-3xl md:text-6xl font-bold text-primary leading-[48px] md:leading-[84px]">
							Your Personal{" "}
							<span className="relative inline-flex border-2 border-secondary rounded-full w-12 h-12 md:w-24 md:h-24 items-center justify-center">
								AI
								<span className="absolute w-2 h-2 md:w-4 md:h-4 bg-secondary rounded-full animate-circle"></span>
							</span>
							<br /> Shopping Assistant
						</h1>

						<p className="w-[94%] text-base md:text-lg font-montserrat text-[#373737] py-2 md:py-3">
							Get personalized product recommendations, shopping
							advice, and more with our intelligent AI chatbot.
						</p>

						<Button>Get Started</Button>
					</div>

					<div className="mt-0 md:mt-0 z-10">
						<img src={HeroBanner} alt="hero-bg" className="" />
						<img
							src={HeroEllipse}
							alt=""
							className="w-full -z-10 absolute left-0 bottom-0"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
