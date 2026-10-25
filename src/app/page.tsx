import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex-1">
				<HeroSection />
				<FeaturedSection />
			</main>
		</>
	);
}
