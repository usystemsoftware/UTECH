import HeroSection from "@/components/HeroSection";
import {
    Headline,
    TypographyH5
} from "@/custom/Typography";
import { Button } from '@/components/ui/button'
import PageLayout from "@/custom/PageLayout";
import { IndianRupee, MessageCircleMore, Phone } from "lucide-react";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function Refferal() {
    return (
        <>
        <SeoHead
        title="U Tech | Company Blog - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
            <HeroSection
                backgroundImage="/banner/referral-banner.jpeg"
                title=" REFER A FRIEND AND GET 50+ "
            />


            <PageLayout className="py-16 space-y-16">
                <div className="max-w-2xl mx-auto">
                    <Headline
                        title="Refer Our Software Services To Your Friends And We’ll Reward You For The Introduction."
                        description="Our referral program is as simple as it sounds. When we sign on a new client that you referred to us, we’ll send you a 50+ reward to show our gratitude and appreciation."
                    />
                </div>
                {/* Main Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Info */}
                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex items-start space-x-4">
                            <MessageCircleMore size={24} />
                            <div>
                                <TypographyH5 className="capatalize">SEND US A REFERRAL</TypographyH5>
                                <p className="text-gray-600 text-sm">Fill out the form on the right to send a referral to our team.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start space-x-4">
                            <Phone size={22} />
                            <div>
                                <TypographyH5 className="capitalize">WE’LL CONTACT YOUR REFERRAL</TypographyH5>
                                <p className="text-gray-600 text-sm">We will communicate with the referred party and pitch our services.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start space-x-4">
                            <IndianRupee size={38} />
                            <div>
                                <TypographyH5 className="capitalize">IF THEY SIGN UP, YOU GET PAID</TypographyH5>
                                <p className="text-gray-600 text-sm">
                                    50+ reward valid only if referred party is not an old or active customer. The reward is issued
                                    upon completion of referred party’s 3rd month’s billing cycle.
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    50+ referral reward valid for new customers only, and awarded on third month of referral’s project development.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <form className="space-y-6">
                        <h3 className="font-bold text-xl mb-4">Who Would You Like to Refer?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded w-full" />
                            <input type="text" placeholder="Phone" className="border border-gray-300 p-2 rounded w-full" />
                            <input type="email" placeholder="E-mail" className="border border-gray-300 p-2 rounded w-full" />
                            <input type="text" placeholder="Company (Optional)" className="border border-gray-300 p-2 rounded w-full" />
                        </div>

                        <h3 className="font-bold text-xl">Now Tell Us About You</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded w-full" />
                            <input type="text" placeholder="Phone" className="border border-gray-300 p-2 rounded w-full" />
                            <input type="email" placeholder="E-mail" className="border border-gray-300 p-2 rounded w-full" />
                            <input type="text" placeholder="Refer to a specific Sales Person (Optional)" className="border border-gray-300 p-2 rounded w-full" />
                        </div>

                        <textarea
                            placeholder="Additional Information About Your Referral (Optional)"
                            className="border border-gray-300 p-2 rounded w-full"
                            rows="3"
                        ></textarea>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <label className="text-gray-600 text-sm">Wish to remain Anonymous? Check this box and we won’t mention your name</label>
                        </div>

                        <Button
                            type="submit"
                            className="font-semibold rounded px-6 py-4"
                        >
                            SEND REFERRAL
                        </Button>
                    </form>
                </div>
            </PageLayout>
        </>
    )
}
