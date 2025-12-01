import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      headlineRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      )
      .fromTo(
        splineRef.current,
        {
          opacity: 0,
          x: 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        },
        "-=1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div
        ref={splineRef}
        className="absolute inset-0 z-0 opacity-60"
      >
        <iframe
          src="https://my.spline.design/orb-Q3aQ76At0TqxlltabcY9IBzl/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Orb Background"
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <div className="flex items-center justify-center gap-4 text-glow-blue">
            {/* <img src="/logo2.png" alt="WebForU Logo" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" /> */}
            <span>WebForU</span>
          </div>
          <span className="text-secondary text-glow-violet">בניית אתרים לעצמאים ועסקים קטנים</span>
        </h1>



        <div ref={ctaRef}>
          <a href="#about">
            <Button
              size="lg"
              className="text-lg px-8 py-6 transition-all duration-300 glow-blue hover:scale-105"
            >
            פרטים נוספים
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;