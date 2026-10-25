import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ReviewSection } from "@/components/ReviewSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex-1">
				<HeroSection />
				<FeaturedSection />
				<WhyChooseUs />
				<ReviewSection />
			</main>
		</>
	);
}
