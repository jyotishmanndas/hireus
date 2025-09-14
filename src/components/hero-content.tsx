export default function HeroContent() {
    return (
        <section className="flex flex-col px-14 py-8 h-full w-full">
            <div className="w-40 border border-black rounded-full text-center px-6 py-2 bg-[#EEEFEE]">
                Join our Team
            </div>
            <div className="mt-4" style={{ fontFamily: "poppins" }}>
                <h1 className="text-9xl font-medium">
                    Hire From <br />
                    <span className="text-[11rem] font-bold">Sheryians!</span>
                </h1>
            </div>
            <div className="mt-8 w-[60%]">
                <p className="text-[1.5rem] capitalize text-[#545555] leading-8" style={{ fontFamily: "poppins" }}>Looking to hire skilled developers, designers, and tech professionals who are ready to contribute from day one?</p>
            </div>

            <div className="flex items-center gap-6 mt-8">
                <button className="bg-black text-white px-20 py-3 rounded-full ">Developers</button>
                <button className="bg-black text-white px-20 py-3 rounded-full">Designers</button>
            </div>
        </section>
    )
}