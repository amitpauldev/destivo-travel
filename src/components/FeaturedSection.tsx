"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/DestinationCard";
import Link from "next/link";

const destinations = [
	{
		image: "/assets/destinations/image1.png",
		country: "Nepal",
		title: "Bali Paradise",
		rating: "4.5",
		price: "$2700",
		duration: "7 Days/6 Nights",
	},
	{
		image: "/assets/destinations/image2.png",
		country: "Indonesia",
		title: "Santorini Dream",
		rating: "4.8",
		price: "$2100",
		duration: "6 Days/5 Nights",
	},
	{
		image: "/assets/destinations/image3.png",
		country: "Malaysia",
		title: "Island Escape",
		rating: "4.6",
		price: "$2950",
		duration: "5 Days/4 Nights",
	},
	{
		image: "/assets/destinations/image4.png",
		country: "Indonesia",
		title: "Mountain Retreat",
		rating: "4.7",
		price: "$1850",
		duration: "8 Days/7 Nights",
	},
	{
		image: "/assets/destinations/image5.png",
		country: "Pakistan",
		title: "Green Valley",
		rating: "4.4",
		price: "$2600",
		duration: "7 Days/6 Nights",
	},
	{
		image: "/assets/destinations/image5.png",
		country: "Pakistan",
		title: "Green Valley2",
		rating: "4.4",
		price: "$2600",
		duration: "7 Days/6 Nights",
	},
];

export function FeaturedSection() {
	const [api, setApi] = useState<CarouselApi | null>(null);
	const [current, setCurrent] = useState(0);
	const count = destinations.length;

	const handleSetApi = (carouselApi: CarouselApi) => {
		if (!carouselApi) return;
		setApi(carouselApi);
		setCurrent(carouselApi.selectedScrollSnap());
		carouselApi.on("select", () =>
			setCurrent(carouselApi.selectedScrollSnap()),
		);
	};

	return (
		<section className="bg-white py-20">
			<div className="mx-auto w-full max-w-7xl px-6">
				{/* Header */}
				<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h2 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
							Featured Destinations
						</h2>
						<p className="mt-3 text-sm text-muted-foreground">
							Handpicked travel experiences for the adventure seekers
						</p>
					</div>
					<Button
						variant="outline"
						className="cursor-pointer gap-2 self-start border-[#0891b2] px-6 text-sm font-semibold tracking-wide text-[#0891b2] uppercase hover:bg-[#0891b2]/5 hover:text-[#0891b2] sm:self-auto"
						render={<Link href="/destinations" />}
					>
						All destinations
						<ArrowRight className="size-4" />
					</Button>
				</div>

				{/* Cards carousel */}
				<Carousel
					setApi={handleSetApi}
					opts={{ align: "start" }}
					className="mt-10"
				>
					<CarouselContent>
						{destinations.map((destination) => (
							<CarouselItem
								key={destination.title}
								className="basis-full sm:basis-1/2 xl:basis-[45%]"
							>
								<DestinationCard destination={destination} />
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Footer: counter, progress line, arrows */}
					<div className="mt-8 flex items-center gap-6">
						<span className="text-lg text-foreground">
							<span className="hidden sm:inline-block">
								{current + 2}/{count}
							</span>
							<span className="sm:hidden">
								{current + 1}/{count}
							</span>
						</span>
						<div className="relative h-px flex-1 bg-border">
							<div
								className="hidden sm:inline-block absolute inset-y-0 left-0 bg-foreground transition-all duration-300"
								style={{ width: `${((current + 2) / count) * 100}%` }}
							/>
							<div
								className="sm:hidden absolute inset-y-0 left-0 bg-foreground transition-all duration-300"
								style={{ width: `${((current + 1) / count) * 100}%` }}
							/>
						</div>
						<div className="flex items-center gap-3">
							<Button
								variant="outline"
								size="icon-lg"
								aria-label="Previous slide"
								disabled={current === 0}
								onClick={() => api?.scrollPrev()}
								className="cursor-pointer rounded-full text-[#0891b2] hover:text-[#0891b2]"
							>
								<ArrowLeft className="size-4" />
								<span className="sr-only">Previous slide</span>
							</Button>
							<Button
								variant="outline"
								size="icon-lg"
								aria-label="Next slide"
								disabled={current === count - 1}
								onClick={() => api?.scrollNext()}
								className="cursor-pointer rounded-full text-[#0891b2] hover:text-[#0891b2]"
							>
								<ArrowRight className="size-4" />
								<span className="sr-only">Next slide</span>
							</Button>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
