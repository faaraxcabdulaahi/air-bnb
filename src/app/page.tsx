import ListingCard from "@/components/listing/listingCard";
import Container from "@/container/Container";
import React from "react";

const listings = [
  {
    id: 1,
    title: "Modern City Apartment",
    location: "Dubai, UAE",
    image: "/image1.jpeg",
    price: 220,
  },
  {
    id: 2,
    title: "Luxury Ocean View Apartment",
    location: "Cape Town, South Africa",
    image: "/image2.jpeg",
    price: 180,
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, USA",
    image: "/image3.jpeg",
    price: 250,
  },
  {
    id: 4,
    title: "Beachfront Villa",
    location: "Bali, Indonesia",
    image: "/image4.jpeg",
    price: 300,
  },
  {
    id: 5,
    title: "Traditional Ryokan Stay",
    location: "Kyoto, Japan",
    image: "/image5.jpeg",
    price: 200,
  },
  {
    id: 6,
    title: "Charming Countryside House",
    location: "Tuscany, Italy",
    image: "/image6.jpeg",
    price: 170,
  },
];

const Home = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {listings.map((listing) => {
        return <ListingCard key={listing.id} listing={listing}/>
      })}
    </Container>
  );
};

export default Home;
