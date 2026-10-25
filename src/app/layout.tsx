import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const josefinSans = Josefin_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Wanderlast | the travel company",
	description:
		"Wanderlast is a travel company that provides personalized travel experiences to its customers. Find the perfect destination, plan your trip, and book your dream vacation with ease.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${josefinSans.className} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
