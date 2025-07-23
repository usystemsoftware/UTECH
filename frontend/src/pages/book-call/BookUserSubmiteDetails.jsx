import {
    TypographyH5,
    TypographySmall,
} from "@/custom/Typography";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function BookUserSubmitDetails({ customer, date, slot, bookingData, setBookingData }) {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        const stored = Cookies.get("bookingData");
        if (stored) {
            const parsed = JSON.parse(stored);
            setBookingData(parsed);
            setSubmitted(true);
        }
    }, []);

    const onSubmit = (data) => {
        const fullData = {
            ...data,
            customer,
            date,
            slot,
        };
        Cookies.set("bookingData", JSON.stringify(fullData), { expires: 1 });
        setBookingData(fullData);
        setSubmitted(true);
    };

    const handleCancel = () => {
        Cookies.remove("bookingData");
        setSubmitted(false);
        setBookingData(null);
    };

    if (submitted && bookingData) {
        return (
            <div className="mt-12 max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-md p-6 space-y-4">
                <div className="flex items-center space-x-4">
                    <img
                        loading="lazy"
                        src={bookingData.customer?.image || "/assets/book-call/images.png"}
                        alt={bookingData.customer?.name || "Customer"}
                        className="w-20 h-20 rounded-full border-4 border-primary"
                    />
                    <div>
                        <TypographyH5>{bookingData.customer?.name}</TypographyH5>
                        <TypographySmall>{bookingData.customer?.email}</TypographySmall>
                        <p className="text-sm mt-1">{bookingData.customer?.designation}</p>
                    </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Date:</strong> {bookingData.date}</p>
                    <p><strong>Time:</strong> {bookingData.slot}</p>
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                    <Button>Attend Meeting</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-12 flex flex-col md:flex-row max-w-6xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-muted p-6 md:p-8 md:w-1/2 flex flex-col items-center text-center md:text-left">
                <img
                    src={customer?.image || "/assets/book-call/images.png"}
                    alt={customer?.name || "Customer"}
                    className="w-32 h-32 rounded-full mb-4 border-4 border-primary"
                />
                <TypographyH5 className="mb-1">
                    {customer?.name || "Your Name"}
                </TypographyH5>
                <TypographySmall className="text-muted-foreground mb-2">
                    {customer?.email || "your@email.com"}
                </TypographySmall>
                <div className="bg-background text-foreground p-4 rounded-lg w-full mt-4 text-sm shadow-sm">
                    <p className="mb-1">
                        <strong>Appointment Date:</strong> {date || "2025-07-22"}
                    </p>
                    <p>
                        <strong>Appointment Time:</strong> {slot || "10:00 AM"}
                    </p>
                </div>
            </div>

            <div className="p-6 md:p-8 md:w-1/2">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <TypographyH5 className="text-center mb-4">
                        Complete Your Booking
                    </TypographyH5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Input {...register("name", { required: "Name is required" })} placeholder="Full name" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <Input {...register("email", { required: "Email is required" })} placeholder="Email" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input {...register("phone", { required: "Phone is required" })} placeholder="Phone" />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>
                        <Input {...register("website")} placeholder="Company Website" />
                    </div>

                    <Textarea {...register("description")} placeholder="Describe your requirements" />

                    <div>
                        <Select onValueChange={(value) => setValue("budget", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="-- Select Budget --" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="<1000">Less than $1,000</SelectItem>
                                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10000+">$10,000+</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                    </div>

                    <Input {...register("reference")} placeholder="Reference URL (if any)" />

                    <Select onValueChange={(value) => setValue("source", value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="-- How did you hear about us? --" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Google">Google</SelectItem>
                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            <SelectItem value="Referral">Referral</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button type="submit" className="w-full">
                        Submit Booking
                    </Button>
                </form>
            </div>
        </div>
    );
}