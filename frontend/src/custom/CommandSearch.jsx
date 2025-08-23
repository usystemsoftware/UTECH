import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { SolutionRoutes } from "@/routes/SolutionRoutes";
import { IndustryRoutes } from "@/routes/IndustryRoutes";
import { ServiceRoutes } from "@/routes/ServiceRoutes";
import ContactUs from "@/pages/contact-us/ContactUs";
import Customers from "@/pages/book-call/Customers";
import Services from "@/pages/services/customservices/Services";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const DefaultRoutes = [
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/book-call", element: <Customers /> },
  { path: "/services", element: <Services /> },
];

function mapRoutes(routes, section) {
  return routes.map((r) => ({
    title: r.path.split("/").pop().replace(/-/g, " "),
    url: r.path,
    section,
  }));
}

const searchIndex = [
  ...mapRoutes(SolutionRoutes, "Solutions"),
  ...mapRoutes(ServiceRoutes, "Services"),
  ...mapRoutes(IndustryRoutes, "Industries"),
  ...mapRoutes(DefaultRoutes, "Default"),
];

const fuse = new Fuse(searchIndex, {
  keys: ["title", "section"],
  threshold: 0.3,
});

export function CommandSearch({ setIsCommandOpen }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchIndex);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim()) {
      setResults(fuse.search(value).map((res) => res.item));
    } else {
      setResults(searchIndex);
    }
  };

  const handleSelect = (url) => {
    setIsCommandOpen(false); //  close panel
    navigate(url); // navigate to page
    setQuery("");
  };

  // Group results by section
  const grouped = results.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});

  return (
    <Command className="rounded-lg border shadow-md w-full md:min-w-xl p-4">
      <CommandInput
        placeholder="Search Solutions, Services, Industries..."
        value={query}
        onValueChange={handleSearch}
      />
      <CommandList className="scrollbar-custom">
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(grouped).map(([section, items]) => (
          <CommandGroup key={section} heading={section}>
            {items.map((item, i) => (
              <CommandItem
                key={i}
                onSelect={() => handleSelect(item.url)}
                className="cursor-pointer"
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
