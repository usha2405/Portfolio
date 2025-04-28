"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Programming Language",
    icon: "💻",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL", "R", "Flask"]
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Snowflake", "SSMS", "SAP", "SAS", "SSRS", "Cassandra"]
  },
  {
    category: "Data Visualization",
    icon: "📊",
    skills: ["Power BI", "Tableau", "Looker Studio", "Microsoft Excel", "Matplotlib", "ggplot2", "Plotly", "GeoPandas"]
  },
  
  {
    category: "Cloud Technologies",
    icon: "☁️",
    skills: [
      "AWS (S3, Lambda, DynamoDB, Redshift, Glue, Athena)", "Google Cloud Platform", "Azure", "Docker", "dbt", "Apache Spark", "Apache Kafka", "Hadoop", "ELT Pipelines"
    ]
  },
  {
    category: "Statistical Analysis & Tools",
    icon: "📈",
    skills: ["Hypothesis Testing", "Regression", "A/B Testing", "LLM", "NLP", "ARIMA", "Jupyter", "Postman", "Git", "Selenium"]
  },
]

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, index) => (
        <SkillCard key={index} category={category} index={index} />
      ))}
    </div>
  )
}

function SkillCard({ category, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full border-muted-foreground/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2 group-hover:text-primary transition-colors">
            <span className="text-2xl">{category.icon}</span> {category.category}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-background hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

