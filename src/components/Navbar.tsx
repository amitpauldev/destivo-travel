"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, UserRound, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
	{ label: "Home", href: "/", active: true },
	{ label: "Destinations", href: "destinations", active: false },
	{ label: "My Bookings", href: "my-bookings", active: false },
	{ label: "Admin", href: "admin", active: false },
];

const accountLinks = [
	{ label: "Profile", href: "profile", icon: UserRound },
	{ label: "Login", href: "login", icon: undefined },
	{ label: "Sign Up", href: "sign-up", icon: undefined },
];

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b bg-white">
			<nav className="relative flex h-16 items-center justify-between px-6 lg:px-10">
				{/* Desktop: primary navigation */}
				<ul className="hidden items-center gap-4 lg:gap-8 text-[15px] font-medium md:flex ">
					{navLinks.map((link) => (
						<li key={link.label}>
							<Link
								href={link.href}
								className={
									link.active
										? "text-[#0891b2] underline underline-offset-4"
										: "text-foreground transition-colors hover:text-[#0891b2]"
								}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Center logo on desktop, left-aligned on mobile */}
				<Link
					href="/"
					className="absolute left-1/2 hidden -translate-x-1/2 md:block"
					aria-label="Wanderlast home"
				>
					<Image
						src="/assets/Wanderlast.png"
						alt="Wanderlast"
						width={110}
						height={30}
						priority
					/>
				</Link>
				<Link href="/" className="-ml-2 md:hidden" aria-label="Wanderlast home">
					<Image
						src="/assets/Wanderlast.png"
						alt="Wanderlast"
						width={110}
						height={30}
						priority
					/>
				</Link>

				{/* Desktop: account links */}
				<ul className="ml-auto hidden items-center gap-6 text-[15px] font-medium md:flex">
					{accountLinks.map((link) => (
						<li key={link.label}>
							<Link
								href={link.href}
								className="flex items-center gap-1.5 text-foreground transition-colors hover:text-[#0891b2]"
							>
								{link.icon ? <link.icon className="size-4" /> : null}
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile: hamburger toggle */}
				<button
					type="button"
					onClick={() => setMenuOpen((open) => !open)}
					className="text-foreground transition-colors hover:text-[#0891b2] md:hidden"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
				>
					{menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</nav>

			{/* Mobile: dropdown menu */}
			{menuOpen && (
				<div id="mobile-menu" className="border-t bg-white px-6 py-4 md:hidden">
					<ul className="flex flex-col gap-4 text-[15px] font-medium">
						{navLinks.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									onClick={() => setMenuOpen(false)}
									className={
										link.active
											? "text-[#0891b2] underline underline-offset-4"
											: "text-foreground"
									}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<ul className="mt-4 flex flex-col gap-4 border-t pt-4 text-[15px] font-medium">
						{accountLinks.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									onClick={() => setMenuOpen(false)}
									className="flex items-center gap-1.5 text-foreground"
								>
									{link.icon ? <link.icon className="size-4" /> : null}
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}
