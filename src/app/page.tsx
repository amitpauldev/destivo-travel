import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ReviewSection } from "@/components/ReviewSection";
import { BookYourTrip } from "@/components/BookYourTrip";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<main className="flex-1">
			<HeroSection />
			<FeaturedSection />
			<WhyChooseUs />
			<ReviewSection />
			<BookYourTrip />
		</main>
	);
}
