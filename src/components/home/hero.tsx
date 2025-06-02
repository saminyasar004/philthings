import { Button } from "@/components/ui/button";
import HeroBanner from "@/assets/hero-banner.svg";
import HeroEllipse from "@/assets/hero-bottom-sparkle-ellipse.svg";

export default function Hero() {
	return (
		<section className="py-24">
			<div className="container relative">
				<div className="grid grid-cols-2 gap-2">
					<div className="flex flex-col gap-5 pt-12">
						<h1 className="text-6xl font-bold text-primary leading-[84px]">
							Your Personal{" "}
							<span className="relative inline-flex border-2 border-secondary rounded-full w-24 h-24 items-center justify-center">
								AI
								<span className="absolute w-4 h-4 bg-secondary rounded-full animate-circle"></span>
							</span>
							<br /> Shopping Assistant
						</h1>

						<p className="text-lg font-montserrat text-[#373737] py-3">
							Get personalized product recommendations, shopping
							advice, and <br /> more with our intelligent AI
							chatbot.
						</p>

						<Button>Get Started</Button>
					</div>

					<div className="z-10">
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
