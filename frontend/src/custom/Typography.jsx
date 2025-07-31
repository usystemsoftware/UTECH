import { cn } from "@/lib/utils";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

// Headings
export const TypographyH1 = ({ children, className }) => (
  <h1
    className={cn(
      "text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-balance",
      className
    )}
  >
    {children}
  </h1>
);

export const TypographyH2 = ({ children, className }) => (
  <h2
    className={cn(
      "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug",
      className
    )}
  >
    {children}
  </h2>
);

export const TypographyH3 = ({ children, className }) => (
  <h3
    className={cn(
      "text-lg sm:text-xl md:text-2xl font-semibold tracking-tight",
      className
    )}
  >
    {children}
  </h3>
);

export const TypographyH4 = ({ children, className }) => (
  <h4 className={cn("text-md sm:text-lg md:text-xl font-semibold", className)}>
    {children}
  </h4>
);

export const TypographyH5 = ({ children, className }) => (
  <h5
    className={cn("text-sm sm:text-base md:text-lg font-semibold", className)}
  >
    {children}
  </h5>
);

export const TypographyH6 = ({ children, className }) => (
  <h6
    className={cn("text-xs sm:text-sm md:text-base font-semibold", className)}
  >
    {children}
  </h6>
);

// Paragraphs and text
export const TypographyP = ({ children, className }) => (
  <p className={cn("leading-7 text-sm sm:text-base md:text-lg", className)}>
    {children}
  </p>
);

export const TypographyMuted = ({ children, className }) => (
  <p
    className={cn(
      "text-muted-foreground text-xs sm:text-sm md:text-base",
      className
    )}
  >
    {children}
  </p>
);

export const TypographyLead = ({ children, className }) => (
  <p
    className={cn(
      "text-muted-foreground text-sm sm:text-base md:text-lg",
      className
    )}
  >
    {children}
  </p>
);

export const TypographyLarge = ({ children, className }) => (
  <div
    className={cn("text-base sm:text-lg md:text-xl font-semibold", className)}
  >
    {children}
  </div>
);

export const TypographySmall = ({ children, className }) => (
  <small className={cn("text-xs sm:text-sm font-medium", className)}>
    {children}
  </small>
);

// Lists & Quotes
export const TypographyList = ({ items, className }) => (
  <ul className={cn("list-none grid gap-2 text-xs sm:text-sm", className)}>
    {items?.map((item, groupIndex) =>
      item?.features?.map((feature, featureIndex) => (
        <li
          key={`${groupIndex}-${featureIndex}`}
          className="flex items-start gap-2"
        >
          {item?.icon}
          <span>{feature}</span>
        </li>
      ))
    )}
  </ul>
);

export const TypographyList2 = ({ items, className }) => (
  <ul
    className={cn(
      "my-6 ml-6 sm:ml-8 list-disc text-xs sm:text-sm text-gray-800 [&>li]:mt-2",
      className
    )}
  >
    {items?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const BoldList = ({ items, className }) => (
  <ul
    className={cn(
      "my-6 ml-6 list-disc text-xs sm:text-sm [&>li]:mt-3",
      className
    )}
  >
    {items?.map((item, index) => (
      <li key={index}>
        <span className="font-semibold">
          {item?.title ? `${item.title} : ` : ""}
        </span>
        <span className="text-gray-800">{item?.value}</span>
      </li>
    ))}
  </ul>
);

// Block Quote
export const TypographyBlockquote = ({ children, className }) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic text-sm", className)}>
    {children}
  </blockquote>
);

// Inline Code
export const TypographyInlineCode = ({ children, className }) => (
  <code
    className={cn(
      "bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm font-semibold",
      className
    )}
  >
    {children}
  </code>
);

// Headline Section Block
export const Headline = ({ title, description, className }) => (
  <FadeInWhenVisible>
    <div
      className={cn(
        "space-y-4 w-full text-center sm:max-w-2xl md:max-w-4xl lg:max-w-[80%] mx-auto",
        className
      )}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground">
        {description}
      </p>
    </div>
  </FadeInWhenVisible>
);

// Custom Label/Heading Decorators
export const HeadSkipper = ({ children, className }) => (
  <div className="flex items-center gap-2 sm:gap-4 mb-6">
    <h2
      className={cn(
        "text-primary text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-tight",
        className
      )}
    >
      {children}
    </h2>
    <div className="w-10 sm:w-20 h-px bg-blue-700"></div>
  </div>
);

export const HighLighter = ({
  rightText,
  leftText,
  highLighter,
  className,
}) => (
  <div className="flex flex-col gap-2 mb-3">
    <h3 className={cn("text-lg sm:text-xl text-blue-900 font-bold", className)}>
      {rightText} <span className="text-accent">{highLighter}</span> {leftText}
    </h3>
    <div className="w-14 h-0.5 bg-accent"></div>
  </div>
);

// Table Renderer
export const TypographyTable = ({ headers = [], rows = [], className }) => (
  <div
    className={cn(
      "w-full rounded-md border shadow-sm overflow-hidden text-xs sm:text-sm",
      className
    )}
  >
    <div className="grid grid-cols-2 bg-muted px-4 py-2 font-semibold border-b">
      {headers.map((header, i) => (
        <div key={i}>{header}</div>
      ))}
    </div>
    {rows.map((row, index) => (
      <div
        key={index}
        className={`grid grid-cols-2 px-4 py-3 border-b ${
          index % 2 === 0 ? "bg-muted/20" : "bg-background"
        }`}
      >
        <div className="font-medium text-muted-foreground">{row.module}</div>
        <div className="grid gap-2">{row.content}</div>
      </div>
    ))}
  </div>
);
