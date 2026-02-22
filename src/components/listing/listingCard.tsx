import { IListingCardProps } from "@/types/types";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";

const ListingCard = ({ listing }: IListingCardProps) => {
  return <div className="group cursor-pointer">{/* Image */}
  <div className="relative aspect-square rounded-xl overflow-hidden">
    <Image src={listing.image} alt={listing.title} fill className="object-cover transition group-hover:scale-105"/>
    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow cursor-pointer">
    <LuHeart size={18} className="text-gray-700"/>
    </button>
  </div>
  <div className="space-y-1 mt-3 text-sm">
    <p className="text-gray-500 ">{listing.location}</p>
    <p className="text-gray-900 truncate">{listing.title}</p>
    <p className="text-gray-900 font-semibold"><span>${listing.price}</span>/ <span className="text-gray-500">night</span></p>
  </div>
  </div>;
};

export default ListingCard;
