"use client";

import { useState } from "react";
import Image from "next/image";
import {
	Calendar,
	MapPin,
	Trash2,
	Eye,
	CircleCheck,
	Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookings, type Booking } from "@/data/destinations";

function formatPrice(price: number) {
	return `$${price.toLocaleString("en-US")}`;
}

function BookingCard({
	booking,
	onCancel,
}: {
	booking: Booking;
	onCancel: (id: string) => void;
}) {
	return (
		<article className="flex flex-col gap-4 rounded-lg border border-border bg-white p-4 sm:flex-row sm:items-stretch sm:gap-6">
			{/* Thumbnail */}
			<div className="relative h-44 w-full shrink-0 overflow-hidden rounded-md sm:h-auto sm:w-52 self-stretch">
				<Image
					src={booking.image}
					alt={booking.title}
					fill
					sizes="208px"
					className="object-cover"
				/>
			</div>

			{/* Info */}
			<div className="flex min-w-0 flex-1 flex-col">
				<span
					className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
					style={
						booking.status === "Confirmed"
							? { color: "#16a34a", background: "#e7f7ec" }
							: { color: "#d97706", background: "#fdf3e3" }
					}
				>
					{booking.status === "Confirmed" ? (
						<CircleCheck className="size-3.5" />
					) : (
						<Clock className="size-3.5" />
					)}
					{booking.status}
				</span>
				<h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground">
					{booking.title}
				</h2>
				<p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
					<Calendar className="size-4" />
					Departure: {booking.departure}
				</p>
				<p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
					<MapPin className="size-4" />
					Booking ID: {booking.id}
				</p>
				<p className="mt-3 text-2xl font-medium text-[#0891b2]">
					{formatPrice(booking.price)}
				</p>
			</div>

			{/* Actions */}
			<div className="flex items-end gap-3 sm:flex-col sm:justify-center">
				<Button
					variant="outline"
					size="sm"
					onClick={() => onCancel(booking.id)}
					className="h-9 border-red-200 px-4 text-xs font-semibold tracking-wide text-red-500 uppercase hover:bg-red-50 hover:text-red-600"
				>
					<Trash2 className="size-3.5" />
					Cancel
				</Button>
				<Button
					size="sm"
					className="h-9 bg-[#0891b2] px-4 text-xs font-semibold tracking-wide text-white uppercase hover:bg-[#077d99]"
				>
					<Eye className="size-3.5" />
					View
				</Button>
			</div>
		</article>
	);
}

export default function MyBookingsPage() {
	const [activeBookings, setActiveBookings] = useState(bookings);

	const handleCancel = (id: string) => {
		setActiveBookings((current) =>
			current.filter((booking) => booking.id !== id),
		);
	};

	return (
		<section className="bg-white py-16">
			<div className="mx-auto w-full max-w-5xl px-6">
				<h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
					My Bookings
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					Manage and view your upcoming travel plans
				</p>

				<div className="mt-8 space-y-6">
					{activeBookings.map((booking) => (
						<BookingCard
							key={booking.id}
							booking={booking}
							onCancel={handleCancel}
						/>
					))}
				</div>

				{activeBookings.length === 0 && (
					<p className="mt-10 text-center text-muted-foreground">
						No upcoming bookings. Explore our destinations to plan your next
						trip.
					</p>
				)}
			</div>
		</section>
	);
}
