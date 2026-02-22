export interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface IListingProps {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
}

export interface IListingCardProps {
  listing: IListingProps;
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

export interface IModalProps {
  isOpen:boolean;
  onClose:()=>void;
  title:string;
  children:React.ReactNode;
}