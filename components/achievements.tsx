"use client"

import { GraduationCap } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    title: "Indiana University Bloomington",
    location: "Bloomington, IN, USA",
    degree: "Master of Science in Data Science",
    cgpa: "3.7/4.0",
    link: "https://bloomington.iu.edu/",
    courseworks: [
      "Advanced Database Concepts",
      "Management Access and Use of Big Data",
      "Applied Machine Learning",
      "Statistics",
      "Computer Vision",
    ],
  },
  {
    title: "University of Mumbai",
    location: "Mumbai, Maharashtra, India",
    degree: "Bachelor of Computer Engineering",
    cgpa: "3.8/4.0",
    link: "https://mu.ac.in/",
    courseworks: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Data Mining",
      "Computer Network",
    ],
  },
]

export default function Education() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {education.map((edu, index) => (
        <EducationCard key={index} education={edu} index={index} />
      ))}
    </div>
  )
}

function EducationCard({ education, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:shadow-primary/5 border-muted-foreground/20">
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <div className="mt-1 rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              <a href={education.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {education.title}
              </a>
            </CardTitle>
            <p className="text-muted-foreground text-sm">{education.location}</p>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-muted-foreground mb-2">
            <b>Degree:</b> {education.degree}
            <br />
            <b>CGPA:</b> {education.cgpa}
          </p>
          <p className="text-muted-foreground mb-1 font-semibold">Relevant Courseworks:</p>
          <ul className="list-disc list-inside text-muted-foreground text-sm">
            {education.courseworks.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
