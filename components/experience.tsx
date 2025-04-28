"use client"

import { BriefcaseIcon } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Market Research Analyst",
    company: "Kelly School of Business",
    location: "Bloomington, IN",
    period: "May 2024 – Present",
    description: [
      "Scraped and processed text and images from research papers using Python, BeautifulSoup, LLAMA3, and OpenAI API to speed up extraction and document cleaning.",
      "Created Qualtrics surveys and worked with teams to develop sentiment analysis and multi-modal research workflows for studying human emotions and behaviors.",
    ],
    skills: ["Python", "BeautifulSoup", "Selenium", "Qualtrics", "LLAMA3", "OpenAI API", "Tokenization", "Sentiment Analysis"],
    logo: "Kelley-logo.jpeg"
  },
  {
    title: "HR Data Analyst Intern",
    company: "Perma-Pipe",
    location: "Houston, TX, USA",
    period: "June 2024 – December 2024",
    description: [
      "Developed scalable ETL pipelines using Python to streamline data processing and optimize efficiency.",
      "Automated reporting systems using SSRS, improving accuracy and enhancing workforce analytics and compliance tracking.",
      "Designed interactive Power BI dashboards using DAX to deliver real-time insights across global locations.",
      "Optimized SQL queries and automated stored procedures in SSMS to improve data accessibility and reduce manual efforts."
    ],
    skills: ["Python", "SSRS", "Power BI", "DAX", "SQL", "SSMS"],
    logo: "PermaPipe_logo.jpeg"
  },
  {
    title: "Marketing Research Analyst",
    company: "Indiana University Bloomington",
    location: "Bloomington, IN, USA",
    period: "May 2024 – August 2024",
    description: [
      "Implemented statistical assessments and data modeling techniques to analyze data from over 1,000 universities across two decades.",
      "Developed predictive insights to refine academic marketing strategies and provide actionable data to key stakeholders.",
      "Designed and distributed surveys in Qualtrics to improve data collection efficiency and support data-driven decision-making."
    ],
    skills: ["Python", "Qualtrics", "Data Modeling", "Statistical Analysis"],
    logo: "iulogo2.jpg"
  },
  {
    title: "AI Engineer",
    company: "Kelley School of Business",
    location: "Bloomington, IN",
    period: "May 2024 – August 2024",
    description: [
      "Developed intelligent conversational interfaces and chatbot systems using LangChain, Ollama, OpenAI’s GPT-4o-mini, and Streamlit.",
      "Enhanced instructional delivery across multiple educational modules through AI-driven automation.",
      "Applied NLP algorithms to improve chatbot comprehension, optimizing user engagement and learning outcomes."
    ],
    skills: ["LangChain", "Ollama", "OpenAI GPT-4o-mini", "Streamlit", "NLP"],
    logo: "Kelley-logo.jpeg"
  },
  {
    title: "Research Analyst",
    company: "Kelley School of Business",
    location: "Bloomington, IN, USA",
    period: "March 2024 – May 2024",
    description: [
      "Cleaned and transformed raw data using Python, implementing robust data validation techniques to ensure accuracy.",
      "Developed interactive Tableau visualizations to highlight critical business trends and support strategic planning.",
      "Executed statistical analysis, including T-tests, to assess intervention impact and optimize academic strategies."
    ],
    skills: ["Python", "Tableau", "Data Validation", "Statistical Analysis"],
    logo: "Kelley-logo.jpeg"
  },
  {
    title: "Data Analyst",
    company: "Tata Consultancy Services",
    location: "India",
    period: "July 2021 – August 2023",
    description: [
      "Enhanced C++ code quality for insurance systems, improving stability.",
      "Integrated APIs and migrated databases to DynamoDB for faster data access.",
      "Designed and implemented A/B testing frameworks, generating insights that enhanced user engagement across digital platforms.",
      "Performed data quality assessments using Python, improving dataset accuracy and refining business intelligence reports."
    ],
    skills: ["C++", "Python", "AWS Lambda", "RESTful APIs", "Amazon DynamoDB", "A/B Testing"],
    logo: "TCS_Logo.jpeg"
  }


]

export default function Experience() {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-[27px] top-[60px] bottom-8 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent"></div>

      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}
    </div>
  )
}

function ExperienceCard({ experience, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-6">
        <div className="relative z-10">
          <div className="mt-1.5 rounded-full bg-primary p-3 shadow-lg shadow-primary/20">
            <BriefcaseIcon className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        <Card className="flex-1 group hover:shadow-lg transition-all duration-300 hover:shadow-primary/5 border-muted-foreground/20">
          <CardHeader className="pb-2">
          <div className="flex w-full items-start gap-4">
  {experience.logo && (
    <img
      src={experience.logo}
      alt={`${experience.company} Logo`}
      className="h-12 w-12 rounded-full object-cover mt-1"
    />
  )}

  <div className="flex-1 flex flex-col gap-1">
    {/* Top Row: Title and Period aligned */}
    <div className="flex justify-between items-start w-full">
      <CardTitle className="text-xl group-hover:text-primary transition-colors">
        {experience.title}
      </CardTitle>
      <Badge
        variant="outline"
        className="font-normal px-3 py-1 text-sm whitespace-nowrap"
      >
        {experience.period}
      </Badge>
    </div>

    {/* Bottom Row: Company and Location */}
    <CardDescription className="text-base text-muted-foreground">
      {experience.company} | {experience.location}
    </CardDescription>
  </div>

              
            </div>
            {/* <CardDescription className="text-base">
              {experience.company} | {experience.location}
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              {experience.description.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

