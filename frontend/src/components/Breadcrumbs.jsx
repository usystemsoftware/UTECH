import { Link, useLocation } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { House } from 'lucide-react';

export default function Breadcrumbs() {
    const location = useLocation();
    const segments = location.pathname.split("/").filter(Boolean);

    const routes = segments.map((segment, index) => ({
        name: segment.replace(/-/g, " "),
        href: "/" + segments.slice(0, index + 1).join("/"),
    }));

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Home link */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/" className="flex items-center gap-2">
                            <House size={16} />
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {routes.map((route, index) => (
                    <div key={route.href} className="flex items-center">
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {index === routes.length - 1 ? (
                                <BreadcrumbPage className="capitalize text-primary">
                                    {decodeURIComponent(route.name)}
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link to={route.href} className="capitalize">
                                        {decodeURIComponent(route.name)}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
