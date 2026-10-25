import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BookYourTrip() {
	return (
		<section className="w-full relative mx-auto flex items-center">
			{/* Banner image on top edge */}

			<div className="absolute w-full bg-black/70 h-100"></div>
			<Image
				src="/assets/CTA.png"
				alt="Aerial view of an airplane flying over a tropical island"
				width={1440}
				height={440}
				priority
				sizes="100vw"
				className="w-full h-100"
			/>

			{/* Centered call-to-action */}
			<div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full max-w-lg px-6 text-center sm:px-10 sm:text-left">
				<div className="text-center text-white">
					<h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
						Ready To Start Your Journey?
					</h2>
					<p className="mt-4 text-sm text-white/80">
						Join thousands of travelers who have discovered the world with us
					</p>
					<Link
						href="/destinations"
						className="mt-8 inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-white px-7 text-sm font-semibold tracking-wide text-neutral-900 uppercase transition-all duration-200 hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
					>
						Book your trip today
						<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}
