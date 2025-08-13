import { cn } from "@/lib/utils";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { useAccessibility } from "@/context/AccessibilityContext";

const AccessibleText = ({ children, className, as: Component = 'div', ...props }) => {
  const { settings } = useAccessibility();

  return (
    <Component
      className={cn(
        className,
        settings.bigText && 'big-text',
        settings.textSpacing && 'text-spacing',
        settings.dyslexiaFont && 'dyslexia-font',
        settings.lineHeight && 'line-height',
        settings.textAlign && `text-align-${settings.textAlign}`
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const TypographyH1 = ({ children, className }) => (
  <AccessibleText
    as="h1"
    className={cn("text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-balance", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyH2 = ({ children, className }) => (
  <AccessibleText
    as="h2"
    className={cn("text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyH3 = ({ children, className }) => (
  <AccessibleText
    as="h3"
    className={cn("text-lg sm:text-xl md:text-2xl font-semibold tracking-tight", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyH4 = ({ children, className }) => (
  <AccessibleText
    as="h4"
    className={cn("text-md sm:text-lg md:text-xl font-semibold", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyH5 = ({ children, className }) => (
  <AccessibleText
    as="h5"
    className={cn("text-sm sm:text-base md:text-lg font-semibold", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyH6 = ({ children, className }) => (
  <AccessibleText
    as="h6"
    className={cn("text-xs sm:text-sm md:text-base font-semibold", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyP = ({ children, className }) => (
  <AccessibleText
    as="p"
    className={cn("leading-7 text-sm sm:text-base md:text-lg", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyMuted = ({ children, className }) => (
  <AccessibleText
    as="p"
    className={cn("text-sm md:text-base", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyLead = ({ children, className }) => (
  <AccessibleText
    as="p"
    className={cn("text-muted-foreground text-sm sm:text-base md:text-lg", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyLarge = ({ children, className }) => (
  <AccessibleText
    className={cn("text-base sm:text-lg md:text-xl font-semibold", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographySmall = ({ children, className }) => (
  <AccessibleText
    as="small"
    className={cn("text-xs sm:text-sm font-medium", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyList = ({ items, className }) => {
  const { settings } = useAccessibility();

  return (
    <ul className={cn(
      "list-none grid gap-2 text-xs sm:text-sm",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`,
      className
    )}>
      {items?.map((item, groupIndex) =>
        item?.features?.map((feature, featureIndex) => (
          <li key={`${groupIndex}-${featureIndex}`} className="flex items-start gap-2">
            {item?.icon}
            <span>{feature}</span>
          </li>
        ))
      )}
    </ul>
  );
};

export const TypographyList2 = ({ items, className }) => {
  const { settings } = useAccessibility();

  return (
    <ul className={cn(
      "my-8 list-disc text-xs sm:text-sm text-gray-300 [&>li]:mt-2",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`,
      className
    )}>
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const BoldList = ({ items, className }) => {
  const { settings } = useAccessibility();

  return (
    <ul className={cn(
      "my-6 ml-6 list-disc text-xs sm:text-sm [&>li]:mt-3",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`,
      className
    )}>
      {items?.map((item, index) => (
        <li key={index}>
          <span className="font-semibold">{item?.title ? `${item.title} : ` : ""}</span>
          <span className="text-gray-800">{item?.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const TypographyBlockquote = ({ children, className }) => (
  <AccessibleText
    as="blockquote"
    className={cn("mt-6 border-l-2 pl-6 italic text-sm", className)}
  >
    {children}
  </AccessibleText>
);

export const TypographyInlineCode = ({ children, className }) => (
  <code className={cn("bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm font-semibold", className)}>
    {children}
  </code>
);

export const Headline = ({ title, description, className }) => {
  const { settings } = useAccessibility();

  return (
    // <FadeInWhenVisible>
    <div className={cn(
      "space-y-4 w-full text-center sm:max-w-2xl md:max-w-4xl lg:max-w-[80%] mx-auto",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`,
      className
    )}>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tighter">{title}</h1>
      <p className="text-sm sm:text-base">{description}</p>
    </div>
    // </FadeInWhenVisible>
  );
};

export const HeadSkipper = ({ children, className }) => {
  const { settings } = useAccessibility();

  return (
    <div className={cn(
      "flex items-center gap-2 sm:gap-4 mb-6",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`
    )}>
      <h2 className={cn("text-primary text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-tight", className)}>
        {children}
      </h2>
      <div className="w-10 sm:w-20 h-px bg-blue-700"></div>
    </div>
  );
};

export const HighLighter = ({ rightText, leftText, highLighter, className }) => {
  const { settings } = useAccessibility();

  return (
    <div className={cn(
      "flex flex-col gap-2 mb-3",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`
    )}>
      <h3 className={cn("text-lg sm:text-xl text-blue-900 font-bold", className)}>
        {rightText} <span className="text-accent">{highLighter}</span> {leftText}
      </h3>
      <div className="w-14 h-0.5 bg-accent"></div>
    </div>
  );
};

export const TypographyTable = ({ headers = [], rows = [], className }) => {
  const { settings } = useAccessibility();

  return (
    <div className={cn(
      "w-full rounded-md border shadow-sm overflow-hidden text-xs sm:text-sm",
      settings.bigText && 'big-text',
      settings.textSpacing && 'text-spacing',
      settings.dyslexiaFont && 'dyslexia-font',
      settings.lineHeight && 'line-height',
      settings.textAlign && `text-align-${settings.textAlign}`,
      className
    )}>
      <div className="grid grid-cols-2 bg-muted px-4 py-2 font-semibold border-b">
        {headers.map((header, i) => (
          <div key={i}>{header}</div>
        ))}
      </div>
      {rows.map((row, index) => (
        <div key={index} className={`grid grid-cols-2 px-4 py-3 border-b ${index % 2 === 0 ? "bg-muted/20" : "bg-background"}`}>
          <div className="font-medium text-muted-foreground">{row.module}</div>
          <div className="grid gap-2">{row.content}</div>
        </div>
      ))}
    </div>
  );
};
