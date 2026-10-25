"use client";

import { useState } from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Beach", "Mountain", "Adventure", "Culture"];

const inputClasses =
	"h-11 w-full rounded-md border border-border bg-muted/50 px-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[#0891b2]/60 focus:bg-white focus:ring-2 focus:ring-[#0891b2]/25";

function Field({
	label,
	id,
	children,
}: {
	label: string;
	id: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={id} className="text-sm font-medium text-foreground">
				{label}
			</label>
			{children}
		</div>
	);
}

export default function AdminPage() {
	const [added, setAdded] = useState(false);

	return (
		<section className="bg-white py-16">
			{/* Add Travel Package */}
			<div className="mx-auto w-full max-w-5xl px-6">
				<h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
					Add New Travel Package
				</h1>

				<form
					onSubmit={(event) => {
						event.preventDefault();
						event.currentTarget.reset();
						setAdded(true);
					}}
					className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:p-10"
				>
					<div className="grid gap-5 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<Field label="Destination Name" id="destination-name">
								<input
									id="destination-name"
									name="destinationName"
									required
									placeholder="Bali Paradise"
									className={inputClasses}
								/>
							</Field>
						</div>

						<Field label="Country" id="destination-country">
							<input
								id="destination-country"
								name="country"
								required
								placeholder="Indonesia"
								className={inputClasses}
							/>
						</Field>

						<Field label="Category" id="destination-category">
							<div className="relative">
								<select
									id="destination-category"
									name="category"
									defaultValue={categories[0]}
									className={`${inputClasses} cursor-pointer appearance-none pr-10`}
								>
									{categories.map((category) => (
										<option key={category} value={category}>
											{category}
										</option>
									))}
								</select>
								<ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
							</div>
						</Field>

						<Field label="Price (USD)" id="destination-price">
							<input
								id="destination-price"
								name="price"
								type="number"
								min={0}
								required
								placeholder="e.g. 1299"
								className={inputClasses}
							/>
						</Field>

						<Field label="Duration" id="destination-duration">
							<input
								id="destination-duration"
								name="duration"
								required
								placeholder="e.g. 7 Days/6 Nights"
								className={inputClasses}
							/>
						</Field>

						<div className="sm:col-span-2">
							<Field label="Departure Date" id="destination-date">
								<input
									id="destination-date"
									name="departureDate"
									type="date"
									required
									placeholder="mm/dd/yyyy"
									className={inputClasses}
								/>
							</Field>
						</div>

						<div className="sm:col-span-2">
							<Field label="Image URL" id="destination-image">
								<input
									id="destination-image"
									name="imageUrl"
									type="url"
									required
									placeholder="https://example.com/image.jpg"
									className={inputClasses}
								/>
							</Field>
						</div>

						<div className="sm:col-span-2">
							<Field label="Description" id="destination-description">
								<textarea
									id="destination-description"
									name="description"
									rows={5}
									placeholder="Describe the travel experience..."
									className="w-full rounded-md border border-border bg-muted/50 px-3.5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[#0891b2]/60 focus:bg-white focus:ring-2 focus:ring-[#0891b2]/25"
								/>
							</Field>
						</div>
					</div>

					{added && (
						<p className="mt-6 text-sm font-medium text-emerald-600">
							Travel package added successfully.
						</p>
					)}

					<div className="mt-8 flex items-center justify-end gap-3">
						<Button
							type="reset"
							variant="outline"
							onClick={() => setAdded(false)}
							className="h-9 cursor-pointer gap-1.5 rounded-md border-red-200 px-4 text-xs font-semibold tracking-wide text-red-500 uppercase hover:bg-red-50 hover:text-red-600"
						>
							<Trash2 className="size-3.5" />
							Cancel
						</Button>
						<Button
							type="submit"
							className="h-9 cursor-pointer gap-1.5 rounded-md bg-[#0891b2] px-5 text-xs font-semibold tracking-wide text-white uppercase hover:bg-[#077d99]"
						>
							<Plus className="size-3.5" />
							Add Travel Package
						</Button>
					</div>
				</form>
			</div>

			{/* All travel packages. */}
			<div></div>
		</section>
	);
}
