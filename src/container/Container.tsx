import { IContainerProps } from "@/types/types";

const Container = ({ children, className="" }: IContainerProps) => {
  return <div className={`mt-18 lg:mt-24 px-4 md:px-20 py-2 ${className}`}>
    {children}
  </div>;
};

export default Container;
