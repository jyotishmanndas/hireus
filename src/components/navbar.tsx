export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-14 py-8">
            <div className="flex items-center gap-4">
                <div className="w-11 h-11">
                    <img src="/dark-logo.webp" alt="logo" />
                </div>
                <div className=" flex flex-col" style={{fontFamily: "poppins"}}>
                    <div className="text-2xl font-medium">
                        Sheryians
                    </div>
                    <div className="text-2xl font-medium leading-5">
                        Coding School
                    </div>
                </div>
            </div>
            <div className="text-3xl font-semibold">
                2025
            </div>
        </nav>
    )
}