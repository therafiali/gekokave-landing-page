import { WobbleCard } from "@/components/ui/wobble-card"
import greenHeadphones from "@/app/assets/0000_1.webp"
import grayHeadphones from "@/app/assets/phones_1.webp"
import coralHeadphones from "@/app/assets/rozovye_1.webp"

const FeatureSection = () => {
    return (
        <section className="px-4 py-8    rounded-3xl " >
            <div className="bg-[#F5F5F7] px-8 py-8 rounded-3xl shadow-sm">

                <div>
                    <span className="text-[22px] font-normal text-(--med-gray) opacity-[.9] md:text-[24px]">How we’re rebuilding the prescription experience
                    </span>
                    <h2 className="mb-[40px] mt-[40px] text-[40px] font-light md:text-[66px]">
                        Your prescription.
                        <br />
                        Your choice. Your terms.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                        className=""
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Gippity AI powers the entire universe
                            </h2>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                With over 100,000 mothly active bot users, Gippity AI is the most
                                popular AI platform for developers.
                            </p>
                        </div>
                        <img
                            src={coralHeadphones.src}
                            width={500}
                            height={500}
                            alt="green over-ear headphones"
                            className="absolute -right-4 lg:-right-[40%]   -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            No shirt, no shoes, no weapons.
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            If someone yells “stop!”, goes limp, or taps out, the fight is over.
                        </p>
                        <img
                            src={greenHeadphones.src}
                            width={320}
                            height={320}
                            alt="gray over-ear headphones"
                            
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                        <div className="max-w-sm">
                            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Signup for blazing-fast cutting-edge state of the art Gippity AI
                                wrapper today!
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                With over 100,000 mothly active bot users, Gippity AI is the most
                                popular AI platform for developers.
                            </p>
                        </div>
                        <img
                            src={grayHeadphones.src}
                            width={500}
                            height={500}
                            alt="coral over-ear headphones"
                            className="absolute right-0 top-0 w-52  rounded-2xl"
                        />
                    </WobbleCard>
                </div>

            </div>
        </section>
    )
}

export default FeatureSection