import { useEffect, useRef } from "react"
import { GraduationCap } from "lucide-react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    title: "B.Tech in Electronics & Communication",
    school: "Sharnbasva University, Kalaburagi",
    year: "2020 - 2024",
    score: "CGPA: 8.5/10",
  },
  {
    title: "PUC (12th Standard)",
    school: "Doddappa Appa PU College, Kalaburagi",
    year: "2018 - 2020",
    score: "80%",
  },
  {
    title: "SSLC (10th Standard)",
    school: "Maharishi Vidya Mandir School",
    year: "2017 - 2018",
    score: "71%",
  },
]

export default function Education() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      )
    })
  }, [])

  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-4xl font-bold mb-17">
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
            Education
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 mb-9"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el!)}
              className="
                group 
                rounded-xl 
                bg-[#0f0f17] 
                hover:bg-[#151520] 
                border border-gray-800 
                p-8 
                shadow-lg 
                transition-all 
                duration-300 
                hover:shadow-purple-500/30 
                hover:-translate-y-2 
                hover:scale-[1.03]
                cursor-pointer
              "
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Icon Box */}
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg shadow-purple-500/30 mb-5 group-hover:scale-110 transition-all duration-300">
                  <GraduationCap size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.title}
                </h3>

                <p className="text-gray-300 text-sm mb-1">{edu.school}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>

                <p className="text-purple-400 font-semibold mt-3">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
