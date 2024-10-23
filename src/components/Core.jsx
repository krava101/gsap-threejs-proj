import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const Core = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20" id="chip">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="core-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>
          <p className="core-subtitle">
            It&apos;s here. The bigest redesign in the history of Apple GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="core-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <ul className="core-text-container">
          <li className="flex flex-1 justify-center flex-col">
            <p className="core-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>
            <p className="core-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly details environments and characters.
            </p>
          </li>

          <li className="flex flex-1 justify-center flex-col g_fadeIn">
            <p className="core-text">New</p>
            <p className="core-bigtext">Pro-class GPU</p>
            <p className="core-text">with 6 cores</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Core;
