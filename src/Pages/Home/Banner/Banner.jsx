import HeroSlider, { MenuNav, Overlay, Slide } from "hero-slider";
// import HeroSlider from "hero-slider/dist/HeroSlider";
import { Fade } from "react-awesome-reveal";
import './Banner.css'

const piano = "https://i.ibb.co/gPP2YWf/jordan-whitfield-Bhf-E1-Igcs-A8-unsplash.jpg";
const drums = "https://i.ibb.co/8XTD1RJ/john-matychuk-g-UK3l-A3-K7-Yo-unsplash.jpg";
const guitars = "https://i.ibb.co/djb2Mx7/wes-hicks-MEL-j-Jnm7-RQ-unsplash-1.jpg";
const music = "https://i.ibb.co/0mYBXGY/marius-masalar-r-POm-LGwai2w-unsplash.jpg";
const vocals = "https://i.ibb.co/s6rRjNg/melanie-van-leeuwen-QA-q-Qf-WJM0-E-unsplash.jpg";
const bass = "https://i.ibb.co/DKKh8D0/derek-truninger-u-Lit-Vttk-C7o-unsplash.jpg"

const Banner = () => {
    return (
        <div className="mb-4">
            <HeroSlider
                height={"70vh"}
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) =>
                        console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) =>
                        console.debug(
                            "onBeforeSliding(previousSlide, nextSlide): ",
                            previousSlide,
                            nextSlide
                        ),
                    onAfterSliding: (nextSlide) =>
                        console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
            >
                <Overlay>
                    <div className="Container">
                        <Fade delay={1e3} cascade damping={1e-1} className='title'>
                            Cascade
                        </Fade>
                        <Fade delay={1e3} cascade damping={1e-1} className='subtitle'>
                            School of Music
                        </Fade>
                    </div>
                </Overlay>

                <Slide
                    shouldRenderMask
                    label="Piano"
                    background={{
                        backgroundImageSrc: piano
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Drums"
                    background={{
                        backgroundImageSrc: drums
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Guitars"
                    background={{
                        backgroundImageSrc: guitars
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Lyrics"
                    background={{
                        backgroundImageSrc: music
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Vocals"
                    background={{
                        backgroundImageSrc: vocals
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Bass"
                    background={{
                        backgroundImageSrc: bass
                    }}
                />
                <MenuNav />
            </HeroSlider>
        </div>
    );
};

export default Banner;