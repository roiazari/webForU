import { useEffect, useRef } from "react";
// ייבוא ספריות חיצוניות (GSAP, Button, ArrowRight) הוסר לצורך קומפילציה תקינה בסביבה זו.

const clientProjects = [
  {
    url: "https://roiazari.github.io/lawyer/",
    title: "אתר תדמית לעורכת דין",
  },
  {
    url: "https://roiazari.github.io/rahamim_pest_control/",
    title: "אתר תדמית למדביר",
  },
  {
    url: "https://lawerdaniel.vercel.app/",
    title: "אתר תדמית לעורך דין",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  // useEffect נשאר ריק
  useEffect(() => {
    // לוגיקת ה-GSAP הוסרה זמנית.
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* כותרת */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow-violet">
        אתרים לדוגמה
        </h2>


        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clientProjects.map((project, index) => (

            //...
            // השינוי: עטיפת כל הכרטיס ברכיב <a>
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"

              // ClassNames מעודכנים
              // המאפיין block מבטיח שהקישור תופס את כל שטח ה-Grid Cell
              className="block w-full rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 bg-transparent shadow-xl cursor-pointer"
            >

              <h3 className="text-xl font-bold text-center text-glow-blue p-6 pb-0">
                {project.title}
              </h3>


              {/* === תצוגת סמארטפון (iFrame) === */}
              <div
                // גובה תצוגה
                className="relative h-[400px] p-4 flex justify-center items-center"
              >

                {/* המסגרת החיצונית של הטלפון - ה-DIV העוטף שמחקה את המכשיר */}
                <div className="relative w-full max-w-[240px] h-[360px] border-[6px] border-gray-800 rounded-[2.5rem] shadow-xl bg-black overflow-hidden overflow-x-hidden pointer-events-none"> {/* הוספתי pointer-events-none */}

                  {/* אלמנט 'חריץ' עליון (Notch) */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-3 bg-black rounded-b-lg z-20"></div>

                  {/* ה-iFrame - מציג את הפרויקט בתוך המסגרת */}
                  <iframe
                    src={project.url}
                    title={project.title}
                    // מכבה גלילה אנכית ואופקית פנימית
                    scrolling="no"

                    className="w-full h-full border-0 absolute top-0 left-0 z-10 scale-[0.99]"
                  />
                </div>
              </div>

              {/* === פרטי הכרטיס === */}
              <div className="p-6 text-center pt-0">
                {/* ניתן להוסיף כאן תוכן נוסף אם רוצים */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;