



const HeroSection = () => {

    return <>
        <section className="hero relative w-full min-h-[50vh] lg:h-[822px] text-white Right">
            {/* bg image */}
            <div className="absolute left-0 top-0 z-[-1] h-full w-full">
                <img
                    alt="Let patients shop between pharmacies."
                    width={2880}
                    height={1600}
                    decoding="async"
                    data-nimg={1}
                    className="h-full w-full object-cover object-bottom"
                    sizes="100vw"
                    srcSet="https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=640&q=75&fm=webp 640w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=750&q=75&fm=webp 750w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=828&q=75&fm=webp 828w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=1080&q=75&fm=webp 1080w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=1200&q=75&fm=webp 1200w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=1920&q=75&fm=webp 1920w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=2048&q=75&fm=webp 2048w, https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=3840&q=75&fm=webp 3840w"
                    src="https://images.ctfassets.net/k0ydwkm1u654/7b0rSIr9KTk032gwAcoOuz/6e80dd73c587951f8907857e257bb4b8/hero_image.png?w=3840&q=75&fm=webp"
                    style={{ color: "transparent" }}
                />
            </div>
            <div className="l-container l-container--hero__content relative z-0 flex flex-col-reverse pb-[40px] lg:flex-row lg:items-end min-h-[50vh] lg:h-[822px] justify-center lg:justify-start">
                {/* main headphoone image */}
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <span className="text-6xl lg:text-7xl font-black uppercase tracking-tight opacity-90 leading-none">
                        Immersive studio sound
                    </span>
                </div>
                <div className="hero-center-image pointer-events-none absolute inset-0 z-[10] hidden h-full w-full items-center justify-center lg:flex">
                    <img
                        alt="Let patients shop between pharmacies."
                        width={2000}
                        height={2000}
                        decoding="async"
                        data-nimg={1}
                        className="mx-auto h-auto w-[48vw]  min-w-[1200px]"
                        sizes="(max-width: 800px) 100vw, 500px"
                        srcSet='/heroimage.jpg'
                        src='/heroimage.jpg'
                        style={{ color: "transparent" }}
                    />
                </div>

            </div>
        </section>

    </>
}

export default HeroSection