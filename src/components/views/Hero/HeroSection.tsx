import { GradualSpacing } from "@/components/ui/gradual-spacing";

const HeroSection = () => {
  return (
    <>
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
            src="/bg.webp"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="l-container l-container--hero__content relative z-0 flex flex-col-reverse pb-[40px] lg:flex-row lg:items-end min-h-[50vh] lg:h-[822px] justify-center lg:justify-start">
          {/* main headphoone image */}
          <div className="absolute inset-0 z-[20] flex items-center justify-center text-center max-w-xs lg:max-w-none">
            {/* <span className="text-6xl lg:text-7xl text-black font-black uppercase tracking-tight opacity-90 leading-none">
              Immersive studio sound
            </span> */}
            <GradualSpacing
              text="Immersive studio sound"
              className="max-w-xs lg:max-w-none text-6xl lg:text-7xl text-black font-black uppercase tracking-tight opacity-90 leading-none"
            />
          </div>
          <div className="hero-center-image pointer-events-none absolute inset-0 z-[10] hidden h-full w-full items-center justify-center lg:flex">
            <img
              alt="Let patients shop between pharmacies."
              width={2000}
              height={2000}
              decoding="async"
              data-nimg={1}
              className="mx-auto h-auto w-[48vw]  min-w-[1000px] xl:min-w-[1200px]"
              sizes="(max-width: 800px) 100vw, 500px"
              srcSet="/heroimage.jpg"
              src="/heroimage.jpg"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="overflow-hidden lg:hidden">
            <img
              alt="Let patients shop between pharmacies."
              decoding="async"
              data-nimg={1}
              className="mx-auto max-w-[100vw] bg-amber-900/5 bg-blend-overlay shadow-amber-200  transform scaleX(-1)"
              sizes="(max-width: 800px) 100vw, 500px"
              src="/phones_2.webp"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
