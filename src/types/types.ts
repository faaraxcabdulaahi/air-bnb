export interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface Listing {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
}

export interface IListingCardProps {
    listing:Listing;
    
}

