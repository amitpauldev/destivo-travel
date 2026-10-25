"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const reviews = [
	{
		quote:
			'"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
		name: "Michael Chen",
		location: "Singapore",
		image: "/assets/person1.png",
	},
	{
		quote:
			'"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
		name: "Sarah Johnson",
		location: "New York, USA",
		image: "/assets/person2.png",
	},
	{
		quote:
			'"Our Patagonia Trek Was Flawless From Start To Finish. The Itineraries Were Thoughtful And Every Trail Was Simply Stunning. Best Trip Ever!"',
		name: "David Okafor",
		location: "London, UK",
		image: "/assets/person1.png",
	},
	{
		quote:
			'"Kyoto In Cherry Blossom Season Was A Dream Come True. Excellent Planning, Amazing Local Food Tours, And Unforgettable Temples. Wonderfully Done!"',
		name: "Emily Davis",
		location: "Toronto, Canada",
		image: "/assets/person2.png",
	},
];

export function ReviewSection() {
	const [api, setApi] = useState<CarouselApi | null>(null);
	const [current, setCurrent] = useState(0);
	const count = reviews.length;

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
				<div className="flex items-end justify-between gap-6">
					<div>
						<h2 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
							What Travelers Say
						</h2>
						<p className="mt-3 text-sm text-muted-foreground">
							Real experiences from our happy travelers
						</p>
					</div>
					<div className="hidden items-center gap-3 sm:flex">
						<Button
							variant="outline"
							size="icon-lg"
							aria-label="Previous review"
							disabled={current === 0}
							onClick={() => api?.scrollPrev()}
							className="cursor-pointer rounded-full text-[#0891b2] hover:text-[#0891b2]"
						>
							<ArrowLeft className="size-4" />
							<span className="sr-only">Previous review</span>
						</Button>
						<Button
							variant="outline"
							size="icon-lg"
							aria-label="Next review"
							disabled={current === count - 1}
							onClick={() => api?.scrollNext()}
							className="cursor-pointer rounded-full text-[#0891b2] hover:text-[#0891b2]"
						>
							<ArrowRight className="size-4" />
							<span className="sr-only">Next review</span>
						</Button>
					</div>
				</div>

				<Carousel
					setApi={handleSetApi}
					opts={{ align: "start" }}
					className="mt-10"
				>
					<CarouselContent>
						{reviews.map((review) => (
							<CarouselItem
								key={review.name}
								className="basis-full sm:basis-1/2"
							>
								<article className="flex h-full gap-5 rounded-lg border border-border bg-white p-6">
									<div className="flex min-w-0 flex-1 flex-col">
										<blockquote className="text-[15px] leading-relaxed text-foreground">
											{review.quote}
										</blockquote>
										<footer className="mt-auto pt-6">
											<p className="text-[15px] font-semibold text-[#0891b2]">
												&mdash; {review.name}
											</p>
											<p className="mt-0.5 text-sm text-muted-foreground">
												{review.location}
											</p>
										</footer>
									</div>
									<div className="relative w-32 shrink-0 overflow-hidden rounded-md sm:w-36">
										<Image
											src={review.image}
											alt={review.name}
											fill
											sizes="144px"
											className="object-cover"
										/>
									</div>
								</article>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				{/* Mobile arrows */}
				<div className="mt-8 flex items-center justify-center gap-3 sm:hidden">
					<Button
						variant="outline"
						size="icon-lg"
						aria-label="Previous review"
						disabled={current === 0}
						onClick={() => api?.scrollPrev()}
						className="cursor-pointer rounded-full text-[#0891b2] hover:text-[#0891b2]"
					>
						<ArrowLeft className="size-4" />
						<span className="sr-only">Previous review</span>
					</Button>
					<Button
						variant="outline"
						size="icon-lg"
						aria-label="Next review"
						disabled={current === count - 1}
						onClick={() => api?.scrollNext()}
						className="cursor-pointer rounded-full text-[#0891b2] hover:text-[#0891b2]"
					>
						<ArrowRight className="size-4" />
						<span className="sr-only">Next review</span>
					</Button>
				</div>
			</div>
		</section>
	);
}
