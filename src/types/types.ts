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
  listing: Listing;
}

export interface IAuthModalStoreProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;

  openLogin: () => void;
  openRegister: () => void;

  closeLogin: () => void;
  closeRegister: () => void;

  closeAll: () => void;
}