"use client"
const HeaderBanner = () => {
    return (
        <div className="relative h-screen">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 top-0 left-0 w-full h-full object-cover"
            >
                <source src="/header_video.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 flex h-full items-center justify-center">
                <h1 className="text-primary-foreground text-9xl font-bold">
                    Diversal
                </h1>
            </div>
        </div>
    );
}

export default HeaderBanner;