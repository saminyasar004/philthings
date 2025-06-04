import SectionBGVector from "@/assets/faq-section-robot.svg";

export default function faq() {
	return (
		<section className="py-24">
			<div className="container relative overflow-hidden py-14">
				<img
					src={SectionBGVector}
					alt="feature-section-bg-vector"
					className="absolute top-5 -right-[40rem] w-full h-full -z-10"
				/>
			</div>
		</section>
	);
}
