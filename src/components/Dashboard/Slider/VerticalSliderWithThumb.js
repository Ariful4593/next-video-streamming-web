import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import { useState } from "react";
import "swiper/css";
import styles from "./VerticalSliderWithThumb.module.css";
import { MovieThumbnailSm } from "@/ui/MovieThumbnailSm/MovieThumbnailSm";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const slides = [
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1081",
    "https://picsum.photos/1920/1082",
    "https://picsum.photos/1920/1083",
    "https://picsum.photos/1920/1084",
];

export default function VerticalSliderWithThumb() {
    const [imagesNavSlider, setImagesNavSlider] = useState(null);
    const preview = useWindowWidth();

    return (
        <div className={styles.styles}>
            <section className={styles.slider}>
                <div className={styles.slider__flex}>
                    <div className={styles.slider__col}>
                        <div className={styles.slider__prev} id="imagesNavPrev">
                            Prev
                        </div>

                        <div className={styles.slider__thumbs}>
                            <Swiper
                                onSwiper={setImagesNavSlider}
                                direction="vertical"
                                spaceBetween={
                                    preview < 620 ? 0 : preview < 768 ? 32 : preview < 992 ? 1 : 90
                                }
                                slidesPerView={
                                    preview < 620 ? 1 : preview < 768 ? 2 : preview < 992 ? 3 : 4   
                                }
                                navigation={{
                                    nextEl: "#imagesNavNext",
                                    prevEl: "#imagesNavPrev",
                                }}
                                className={styles.swiper_container1}
                                breakpoints={{
                                    0: {
                                        direction: "horizontal",
                                    },
                                    768: {
                                        direction: "vertical",
                                    },
                                }}
                                modules={[Navigation, Thumbs]}
                            >
                                {slides.map((slide, index) => {
                                    return (
                                        <SwiperSlide key={index} className={styles.swiper_slide_prev}>
                                            <MovieThumbnailSm url={slide} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>

                        <div className={styles.slider__next} id="imagesNavNext">
                            Next
                        </div>
                    </div>

                    <div className={styles.slider__images}>
                        <Swiper
                            thumbs={{
                                swiper:
                                    imagesNavSlider && !imagesNavSlider.destroyed
                                        ? imagesNavSlider
                                        : null,
                            }}
                            direction="horizontal"
                            spaceBetween={
                                preview < 620 ? 0 : preview < 768 ? 32 : preview < 992 ? 1 : 90
                            }
                            mousewheel={true}
                            navigation={{
                                nextEl: "#sliderNext",
                                prevEl: "#sliderPrev",
                            }}
                            breakpoints={{
                                0: {
                                    direction: "horizontal",
                                },
                                768: {
                                    direction: "horizontal",
                                },
                            }}
                            className={styles.swiper_container2}
                            modules={[Navigation, Thumbs, Mousewheel]}
                        >
                            {slides.map((slide, index) => {
                                return (
                                    <SwiperSlide key={index} className={styles.swiper_slide_active}>
                                        <div className={styles.slider__image}>
                                            <img src={slide} alt="" />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}