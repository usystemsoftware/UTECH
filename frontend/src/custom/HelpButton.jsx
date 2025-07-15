import { HelpCircle } from "lucide-react";

export function HelpButton({ onClick }) {
    return (
        <div className="top-4 right-4 z-50">
            <button
                onClick={onClick}
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm md:text-base font-medium text-white shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <span className="">Help</span>
                <HelpCircle className="h-5 w-5 sm:h-5 sm:w-5" />
            </button>
        </div>
    );
}
