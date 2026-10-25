import { type Destination } from "@/components/DestinationCard";

type DestinationWithCategory = Destination & {
	category: string;
	priceValue: number;
};

export const allDestinations: DestinationWithCategory[] = [
	{
		image: "/assets/destinations/image1.png",
		country: "Maldives",
		title: "Maldives Aerial Escape",
		rating: "4.5",
		price: "$2700",
		priceValue: 2700,
		duration: "7 Days/6 Nights",
		category: "Beach",
	},
	{
		image: "/assets/destinations/image2.png",
		country: "French Polynesia",
		title: "Bora Bora Overwater",
		rating: "4.8",
		price: "$2950",
		priceValue: 2950,
		duration: "6 Days/5 Nights",
		category: "Beach",
	},
	{
		image: "/assets/destinations/image3.png",
		country: "Vietnam",
		title: "Sapa Valley Trails",
		rating: "4.6",
		price: "$1850",
		priceValue: 1850,
		duration: "5 Days/4 Nights",
		category: "Mountain",
	},
	{
		image: "/assets/destinations/image4.png",
		country: "Peru",
		title: "Machu Picchu Trek",
		rating: "4.7",
		price: "$2400",
		priceValue: 2400,
		duration: "8 Days/7 Nights",
		category: "Adventure",
	},
	{
		image: "/assets/destinations/image5.png",
		country: "Indonesia",
		title: "Ubud Bali Retreat",
		rating: "4.4",
		price: "$2100",
		priceValue: 2100,
		duration: "7 Days/6 Nights",
		category: "Culture",
	},
	{
		image: "/assets/destinations/image6.png",
		country: "Mexico",
		title: "Oaxaca Desert Sunset",
		rating: "4.5",
		price: "$1600",
		priceValue: 1600,
		duration: "4 Days/3 Nights",
		category: "Culture",
	},
];
