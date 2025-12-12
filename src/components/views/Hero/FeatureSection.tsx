import { WobbleCard } from "@/components/ui/wobble-card"
import greenHeadphones from "@/app/assets/0000_1.webp"
import grayHeadphones from "@/app/assets/phones_1.webp"
import coralHeadphones from "@/app/assets/rozovye_1.webp"

const FeatureSection = () => {
    return (
        <section className="px-4 py-12 md:py-16 rounded-3xl">
            <div className="bg-[#F5F5F7] px-6 sm:px-10 py-10 md:py-14 rounded-3xl shadow-sm max-w-7xl mx-auto space-y-12 md:space-y-14">

                <div className="space-y-4 md:space-y-6">
                    <span className="text-[22px] font-normal text-(--med-gray) opacity-[.9] md:text-[24px]">How we’re redefining premium audio
                    </span>
                    <h2 className="text-[40px] font-light leading-[1.05] md:text-[66px]">
                        Your sound.
                        <br />
                        Your style. Your rules.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[480px] lg:min-h-[340px] overflow-hidden p-6 md:p-8"
                        className=""
                    >
                        <div className="max-w-xs space-y-4">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Spatial audio tuned for every playlist
                            </h2>
                            <p className="text-left text-base/6 text-neutral-200">
                                Adaptive EQ, studio-grade drivers, and ANC built to keep you in
                                the zone—whether you’re gaming, coding, or commuting.
                            </p>
                        </div>
                        <img
                            src={coralHeadphones.src}
                            width={500}
                            height={500}
                            alt="green over-ear headphones"
                            className="absolute -right-6 lg:-right-[30%] -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[320px] p-6 md:p-8 flex flex-col gap-6">
                        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            All-day comfort, zero pressure points
                        </h2>
                        <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                            Breathable memory foam, featherweight frames, and a 45-hour battery
                            keep the music going long after the workday ends.
                        </p>
                        <img
                            src={greenHeadphones.src}
                            width={320}
                            height={320}
                            alt="gray over-ear headphones"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[520px] lg:min-h-[620px] xl:min-h-[360px] p-6 md:p-10 overflow-hidden">
                        <div className="max-w-sm">
                            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Build your personal sound lab
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                Swap ear cushions, dial in your profile, and sync seamlessly
                                across every device—without sacrificing fidelity.
                            </p>
                        </div>
                        <img
                            src={grayHeadphones.src}
                            width={500}
                            height={500}
                            alt="coral over-ear headphones"
                            className="absolute right-0 top-0 w-52 rounded-2xl"
                        />
                    </WobbleCard>
                </div>

            </div>
        </section>
    )
}

export default FeatureSection