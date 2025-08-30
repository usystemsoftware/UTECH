import { Link } from 'react-router-dom'

export default function BannerBottomLinks({ bottomLinks, bottombgcolor }) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-5 ${bottombgcolor}`}>
            {bottomLinks?.map((option, index) => (
                <Link
                    key={index}
                    to={option.link}
                    className={`text-center border border-white px-4 py-3 text-white text-sm transition hover:bg-[${bottombgcolor}]/30`}
                >
                    {option.label}
                </Link>
            ))}
        </div>
    )
}
