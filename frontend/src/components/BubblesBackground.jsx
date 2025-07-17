
export default function BubblesBackground() {
    return (
        <div className="absolute inset-0">
            <div className="floating-bubble absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
            <div className="floating-bubble absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="floating-bubble absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
        </div>
    )
}
