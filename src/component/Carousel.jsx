import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Wrench,
  Car,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ButtonWarningBookService from "../shared/ButtonWarningBookService";
import ButtonOutlineLightCallNow from "../shared/ButtonOutlineLightCallNow";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "The one number you need after an accident",
      description:
        "From recovery to repairs, we handle it all so you can get back on the road stress-free.",
      gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      icon: Car,
    },
    // {
    //   title: "24/7 Emergency Breakdown",
    //   description:
    //     "Stranded? Our mobile mechanics provide roadside assistance and emergency repairs across the UK, day or night.",
    //   gradient: "linear-gradient(135deg, #c31432 0%, #240b36 100%)",
    //   icon: Wrench,
    // },
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    // const testimonialInterval = setInterval(() => {
    //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    // }, 4000);

    return () => {
      clearInterval(heroInterval);
      // clearInterval(testimonialInterval);
    };
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  // const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* === indicators === */}
      <div className="carousel-indicators">
        {heroSlides.map((_, index) => {
          return (
            <button
              key={index}
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={index}
              className={index === currentSlide ? "active" : ""}
              aria-current={index === currentSlide ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* === inner === */}
      <div className="carousel-inner">
        {heroSlides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                background: slide.gradient,
                minHeight: "400px",
                color: "#fff",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <div className="container h-100 d-flex align-items-center">
                <div className="row w-100">
                  <div className="col-lg-6">
                    <h1 className="display-4 fw-bold mb-4">{slide.title}</h1>
                    <p className="lead mb-4">{slide.description}</p>
                    <div className="d-flex gap-3">
                      {/* <ButtonWarningBookService /> */}
                      <ButtonOutlineLightCallNow />
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <IconComponent
                      size={200}
                      className="text-warning opacity-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* === buttons === */}
      {heroSlides.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
            onClick={prevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
            onClick={nextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
