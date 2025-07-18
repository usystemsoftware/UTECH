import { cn } from "@/lib/utils";

export default function PageLayout({ children, className, ...rest }) {
  return (
    <div
      className={cn("md:max-w-7xl w-full px-4 mx-auto sm:px-6 md:px-8", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
