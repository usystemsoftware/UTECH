import { cn } from "@/lib/utils";

export default function PageLayout({ children, className, ...rest }) {
  return (
    <div
      className={cn(
        "md:max-w-7xl lg:max-w-[90%] w-full px-4 mx-auto md:px-8",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
