import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  DeviceMobile,
  Database,
  Lightning,
  BracketsCurly,
  Palette
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: Code },

  { name: "TypeScript", icon: BracketsCurly },
  { name: "React", icon: Lightning },
  { name: "CSS3", icon: Palette },

  { name: "Tailwind CSS", icon: DeviceMobile },
  { name: "Spline", icon: Database },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const skillItems = skillsRef.current?.children;

    if (!section || !image || !content || !skillItems) return;

    gsap.fromTo(
      section,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      image,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 40%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      content,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 40%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      Array.from(skillItems),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src="./logo2.png"
                alt="WebForU placeholder"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
              />
            </div>
          </div>

          {/* Bio & Skills */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-blue">
              אודות
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              אנחנו מתמחים בפיתוח אתרי תדמית מותאמים אישית עבור מגוון רחב של עצמאים ובעלי מקצוע. בין לקוחותינו נמנים עורכי דין, רואי חשבון, חשמלאים, אינסטלטורים ועוד. הפרויקטים שאנחנו בונים מתמקדים ביצירת נכס דיגיטלי ברור, אמין ופונקציונלי, אשר מציג את השירותים ואת המומחיות שלכם בצורה מקצועית.
            </p>
            <p className="mt-3 mb-3 font-bold">
              אנחנו משתמשים בטכנולוגיות הפיתוח המתקדמות והמובילות ביותר בשוק:
            </p>


            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:glow-blue hover:scale-105 transition-all duration-300 "
                  >
                    <Icon
                      size={32}
                      weight="light"
                      className="text-primary group-hover:text-secondary transition-colors duration-300"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;