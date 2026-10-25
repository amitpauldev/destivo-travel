import Image from "next/image";
import { MapPin, MoveUpRight, Building2, Star } from "lucide-react";

export type Destination = {
	image: string;
	country: string;
	title: string;
	rating: string;
	price: string;
	duration: string;
};

export function DestinationCard({
	destination: { image, country, title, rating, price, duration },
	sizes = "(min-width: 1280px) 45vw, (min-width: 640px) 50vw, 100vw",
}: {
	destination: Destination;
	sizes?: string;
}) {
	return (
		<article className="group">
			<div className="relative aspect-[3/2] overflow-hidden rounded-lg">
				<Image
					src={image}
					alt={title}
					fill
					sizes={sizes}
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-md bg-foreground/70 px-2.5 py-1 text-sm font-semibold text-white backdrop-blur-xs">
					{rating}
					<Star className="size-3.5 fill-current" />
				</div>
			</div>

			<div className="pt-5">
				<div className="flex items-center gap-1.5 text-sm text-foreground">
					<MapPin className="size-4 text-muted-foreground" />
					{country}
				</div>
				<div className="mt-1.5 flex items-baseline justify-between gap-4">
					<h3 className="text-2xl font-medium tracking-tight text-foreground">
						{title}
					</h3>
					<p className="text-2xl font-medium tracking-tight text-foreground">
						{price}
						<span className="text-sm font-normal text-muted-foreground">
							/Person
						</span>
					</p>
				</div>
				<div className="mt-1.5 flex items-center gap-1.5 text-sm text-foreground">
					<Building2 className="size-4 text-muted-foreground" />
					{duration}
				</div>
				<a
					href="#"
					className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[#0891b2] uppercase transition-colors hover:text-[#077d99]"
				>
					Book now
					<MoveUpRight className="size-4" />
				</a>
			</div>
		</article>
	);
}
