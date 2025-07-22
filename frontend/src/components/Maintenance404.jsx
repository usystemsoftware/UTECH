import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";

export default function Maintenance404() {
    return (
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center text-center py-10">
            <PageLayout className="md:max-w-3xl flex justify-center items-center flex-col text-center space-y-6 md:space-y-10">
                <Settings size={80} className="text-primary" />
                <TypographyH1>Website Under Maintenance</TypographyH1>
                <TypographyP>
                    We’re currently making improvements to give you a better experience.
                    Please check back soon. Thank you for your patience!
                </TypographyP>
                <Link to="/">
                    <Button>
                        Go Back Home
                    </Button>
                </Link>
            </PageLayout>
        </div>
    );
}
