import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const searchFields = [
	{ name: "location", label: "Location", value: "Address, City Or Zip" },
	{ name: "date", label: "Date/Duration", value: "Anytime/ 3 Days" },
	{ name: "budget", label: "Budget", value: "$0-$3000" },
	{ name: "people", label: "People", value: "5-10" },
];

export function HeroSection() {
	return (
		<section className="relative flex min-h-200 md:min-h-150 flex-col overflow-hidden">
			{/* Banner image + overlay */}
			<Image
				src="/assets/Banner.png"
				alt="Aerial view of a tropical cove wrapped by forested cliffs"
				fill
				priority
				sizes="100vw"
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-black/30" />
			{/* Centered headline */}

			<div className="relative flex flex-1 flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-6 sm:py-20">
				<h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
					Discover Your Next Adventure
				</h1>

				<p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:mt-8 sm:text-lg">
					Explore breathtaking destinations and create unforgettable memories
					with our curated travel experiences.
				</p>

				<div className="z-10 mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
					<Link href="/destinations">
						<span className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0891b2] px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-[#077d99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
							Explore now
							<ArrowRight className="size-4" />
						</span>
					</Link>

					<Link href="/destinations">
						<span className="inline-flex h-12 items-center justify-center rounded-md border border-white/40 bg-white/10 px-7 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition-colors duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
							View destinations
						</span>
					</Link>
				</div>
			</div>

			{/* Bottom search strip */}
			<form
				action="#"
				className="relative w-full max-w-7xl mx-auto grid grid-cols-2 gap-x-6 gap-y-4 bg-white/30 px-6 py-5 text-white lg:grid-cols-[1fr_1fr_1fr_0.7fr_auto] lg:items-stretch lg:gap-x-12 lg:px-0 lg:py-0"
			>
				{searchFields.map((field) => (
					<div
						key={field.name}
						className="flex flex-col gap-1 lg:py-4 lg:pl-10"
					>
						<label
							htmlFor={field.name}
							className="text-lg font-bold leading-tight"
						>
							{field.label}
						</label>
						<input
							id={field.name}
							name={field.name}
							defaultValue={field.value}
							className="w-full bg-transparent text-[15px] text-white/85 outline-none"
						/>
					</div>
				))}
				<Button
					type="submit"
					className="cursor-pointer col-span-full lg:col-auto mt-2 h-12 w-full rounded-none bg-[#0891b2] px-12 text-lg font-bold text-white hover:bg-[#077d99] lg:mt-0 lg:h-auto lg:w-[220px]"
				>
					Search
				</Button>
			</form>
		</section>
	);
}
