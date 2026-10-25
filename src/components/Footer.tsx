import { ArrowUpRight } from "lucide-react";

const quickLinks = ["Home", "Destinations", "My Bookings", "My Profile"];
const supportLinks = ["Help Center", "Terms of Service", "Privacy Policy"];

function XIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125M7.119 20.452H3.554V9h3.565zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
		</svg>
	);
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

export function Footer() {
	return (
		<footer className="bg-[#181818] text-white">
			<div className="mx-auto w-full max-w-7xl px-6 py-16">
				{/* Brand */}
				<div>
					<p className="text-5xl font-bold tracking-tight sm:text-6xl">
						Destivo
					</p>
					<p className="mt-4 text-sm text-white/60">
						Your gateway to extraordinary travel experiences around the world.
					</p>
				</div>

				{/* Columns */}
				<div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{/* Newsletter */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Newsletter
						</h3>
						<p className="mt-3 text-xs text-white/60">
							Subscribe for exclusive travel deals and inspiration.
						</p>
						<form action="#" className="relative mt-4 max-w-xs">
							<input
								type="email"
								placeholder="Enter email"
								aria-label="Enter email"
								className="h-11 w-full rounded-sm border border-white/15 bg-[#242424] pr-12 pl-4 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
							/>
							<button
								type="submit"
								aria-label="Subscribe"
								className="absolute inset-y-0 right-0 flex w-12 cursor-pointer items-center justify-center text-white/80 transition-colors hover:text-white"
							>
								<ArrowUpRight className="size-4" />
							</button>
						</form>
					</div>

					{/* Quick links */}
					<div>
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Quick Links
						</h3>
						<ul className="mt-4 space-y-3 text-sm text-white/70">
							{quickLinks.map((link) => (
								<li key={link}>
									<a href="#" className="transition-colors hover:text-white">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Support
						</h3>
						<ul className="mt-4 space-y-3 text-sm text-white/70">
							{supportLinks.map((link) => (
								<li key={link}>
									<a href="#" className="transition-colors hover:text-white">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Contact Us
						</h3>
						<ul className="mt-4 space-y-3 text-sm text-white/70">
							<li>
								<a
									href="tel:+1786901622"
									className="transition-colors hover:text-white"
								>
									786 901 622
								</a>
							</li>
							<li>
								<a
									href="mailto:info@destivo.com"
									className="transition-colors hover:text-white"
								>
									info@destivo.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
					<p className="text-xs text-white/50">
						© 2026 Destivo. All rights reserved.
					</p>
					<div className="flex items-center gap-4 text-white/80">
						<a
							href="#"
							aria-label="X (Twitter)"
							className="transition-colors hover:text-white"
						>
							<XIcon className="size-4" />
						</a>
						<a
							href="#"
							aria-label="LinkedIn"
							className="transition-colors hover:text-white"
						>
							<LinkedinIcon className="size-4" />
						</a>
						<a
							href="#"
							aria-label="Instagram"
							className="transition-colors hover:text-white"
						>
							<InstagramIcon className="size-4" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
