"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { DestinationCard } from "@/components/DestinationCard";
import { allDestinations } from "@/data/destinations";

const categories = [
	"All Categories",
	"Beach",
	"Mountain",
	"Adventure",
	"Culture",
];
const priceRanges = [
	{ label: "Any Price", min: 0, max: Infinity },
	{ label: "Under $2000", min: 0, max: 2000 },
	{ label: "$2000 - $2500", min: 2000, max: 2500 },
	{ label: "Over $2500", min: 2500, max: Infinity },
];
const sortOptions = [
	"Featured",
	"Price: Low to High",
	"Price: High to Low",
	"Name: A to Z",
];

function FilterSelect({
	label,
	value,
	options,
	onChange,
}: {
	label: string;
	value: string;
	options: string[];
	onChange: (value: string) => void;
}) {
	return (
		<div className="relative">
			<label className="sr-only" htmlFor={label}>
				{label}
			</label>
			<select
				id={label}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className="h-11 w-full cursor-pointer appearance-none rounded-md border border-border bg-white pr-10 pl-4 text-sm font-medium tracking-wide text-foreground uppercase focus:ring-2 focus:ring-[#0891b2]/40 focus:outline-none"
			>
				{options.map((option) => (
					<option key={option} value={option} className="capitalize">
						{option}
					</option>
				))}
			</select>
			<ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
		</div>
	);
}

export default function DestinationsPage() {
	const [category, setCategory] = useState(categories[0]);
	const [priceRange, setPriceRange] = useState(priceRanges[0].label);
	const [sortBy, setSortBy] = useState(sortOptions[0]);

	const activePriceRange =
		priceRanges.find((range) => range.label === priceRange) ?? priceRanges[0];

	const filteredDestinations = allDestinations
		.filter(
			(destination) =>
				(category === categories[0] || destination.category === category) &&
				destination.priceValue >= activePriceRange.min &&
				destination.priceValue < activePriceRange.max,
		)
		.toSorted((a, b) => {
			if (sortBy === sortOptions[1]) return a.priceValue - b.priceValue;
			if (sortBy === sortOptions[2]) return b.priceValue - a.priceValue;
			if (sortBy === sortOptions[3]) return a.title.localeCompare(b.title);
			return 0;
		});

	return (
		<section className="bg-white py-16">
			<div className="mx-auto w-full max-w-7xl px-6">
				<h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
					Explore All Destinations
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					Find your perfect travel experience from our curated collection
				</p>

				<div className="mt-8 grid gap-3 sm:grid-cols-3">
					<FilterSelect
						label="Category"
						value={category}
						options={categories}
						onChange={setCategory}
					/>
					<FilterSelect
						label="Price Range"
						value={priceRange}
						options={priceRanges.map((range) => range.label)}
						onChange={setPriceRange}
					/>
					<FilterSelect
						label="Sort By"
						value={sortBy}
						options={sortOptions}
						onChange={setSortBy}
					/>
				</div>

				<p className="mt-6 text-sm text-muted-foreground">
					Showing {filteredDestinations.length} destinations
				</p>

				<div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
					{filteredDestinations.map((destination) => (
						<DestinationCard
							key={destination.title}
							destination={destination}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
						/>
					))}
				</div>

				{filteredDestinations.length === 0 && (
					<div className="flex flex-col items-center justify-center gap-6 min-h-400">
						<p className="mt-10 text-center text-muted-foreground">
							No destinations match your filters. Try a different combination.
						</p>
					</div>
				)}

				<Link
					href="/"
					className="mt-12 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[#0891b2] uppercase hover:text-[#077d99]"
				>
					<ArrowLeft className="size-4" />
					Back to home
				</Link>
			</div>
		</section>
	);
}
