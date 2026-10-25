import Image from "next/image";
import {
	Pencil,
	MapPin,
	Mail,
	Plane,
	Globe,
	TrendingUp,
	CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
	{
		label: "Total Bookings",
		value: "12",
		icon: Plane,
		iconColor: "bg-cyan-100 text-[#0891b2]",
	},
	{
		label: "Countries Visited",
		value: "18",
		icon: Globe,
		iconColor: "bg-emerald-100 text-emerald-600",
	},
	{
		label: "Upcoming Trips",
		value: "2",
		icon: TrendingUp,
		iconColor: "bg-orange-100 text-orange-500",
	},
	{
		label: "Total Spent",
		value: "$15,750",
		icon: CircleDollarSign,
		iconColor: "bg-fuchsia-100 text-fuchsia-500",
	},
];

export default function MyProfilePage() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto w-full max-w-5xl px-6">
				<h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
					My Profile
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					Manage your account settings and travel preferences
				</p>

				<div className="mt-8 grid gap-6 lg:grid-cols-[300px_1fr]">
					{/* Profile card */}
					<article className="flex flex-col items-center rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
						<div className="relative size-24 overflow-hidden rounded-full">
							<Image
								src="/assets/person2.png"
								alt="Sarah Mitchell"
								fill
								sizes="96px"
								className="object-cover"
							/>
						</div>
						<h2 className="mt-4 text-xl font-medium tracking-tight text-foreground">
							Sarah Mitchell
						</h2>
						<p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
							<MapPin className="size-4" />
							San Francisco, CA
						</p>

						<dl className="mt-6 w-full space-y-3 border-t border-border pt-5 text-sm">
							<div className="flex items-center justify-between">
								<dt className="text-muted-foreground">Member since</dt>
								<dd className="font-semibold text-foreground">Mar 2024</dd>
							</div>
							<div className="flex items-center justify-between">
								<dt className="text-muted-foreground">Nationality</dt>
								<dd className="font-semibold text-foreground">United States</dd>
							</div>
						</dl>

						<Button className="mt-6 w-full cursor-pointer gap-1.5 rounded-md bg-[#0891b2] text-sm font-semibold text-white hover:bg-[#077d99]">
							<Pencil className="size-4" />
							Edit Profile
						</Button>

						<button
							type="button"
							aria-label="Email Sarah Mitchell"
							className="mt-5 flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#0891b2] text-white transition-colors hover:bg-[#077d99]"
						>
							<Mail className="size-4" />
						</button>
					</article>

					{/* Travel statistics */}
					<div>
						<h2 className="text-xl font-medium tracking-tight text-foreground">
							Travel Statistics
						</h2>
						<div className="mt-4 grid gap-4 sm:grid-cols-2">
							{stats.map((stat) => (
								<article
									key={stat.label}
									className="flex items-start justify-between gap-4 rounded-lg border border-border bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
								>
									<div>
										<p className="text-sm text-muted-foreground">
											{stat.label}
										</p>
										<p className="mt-1.5 text-2xl font-medium tracking-tight text-foreground">
											{stat.value}
										</p>
									</div>
									<div
										className={`flex size-9 shrink-0 items-center justify-center rounded-full ${stat.iconColor}`}
									>
										<stat.icon className="size-4.5" />
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
