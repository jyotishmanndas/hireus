export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-14 py-8">
            <a href="/" className="flex items-center gap-4">
                <div className="w-11 h-11">
                    <img src="/dark-logo.webp" alt="logo" />
                </div>
                <div className=" flex flex-col" style={{ fontFamily: "poppins" }}>
                    <h1 className="text-2xl">Sheryians</h1>
                    <h2 className="text-2xl leading-5">Coding School</h2>
                </div>
            </a>
            <div>
               <span className="text-3xl font-semibold">2025</span>
            </div>
        </nav>
    )
}