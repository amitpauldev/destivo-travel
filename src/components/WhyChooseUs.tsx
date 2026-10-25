import Image from "next/image";

const features = [
	{
		icon: "/assets/ShieldCheck.png",
		title: "Safe & Secure",
		description:
			"Your safety is our priority with comprehensive travel insurance and 24/7 support.",
	},
	{
		icon: "/assets/MapTrifold.png",
		title: "Expert Guides",
		description:
			"Local experts who bring destinations to life with authentic cultural insights.",
	},
	{
		icon: "/assets/Headset.png",
		title: "24/7 Support",
		description:
			"Round-the-clock customer service to assist you wherever your journey takes you.",
	},
];

export function WhyChooseUs() {
	return (
		<section className="bg-[#e8f7fd] py-20">
			<div className="mx-auto w-full max-w-7xl px-6">
				<h2 className="text-center text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
					Why Choose Destivo
				</h2>
				<p className="mt-3 text-center text-sm text-muted-foreground">
					Your trusted partner for exceptional travel experiences
				</p>

				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{features.map((feature) => (
						<article
							key={feature.title}
							className="bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
						>
							<Image
								src={feature.icon}
								alt=""
								width={48}
								height={48}
								className="size-9"
							/>
							<h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
								{feature.title}
							</h3>
							<p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
								{feature.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
