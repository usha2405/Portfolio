"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Your projects array
const projectSections = [
  {
    section: "📊 Exploratory Data Analysis & Visualization",
    projects: [
      {
        title: "Credit Card Analytics Dashboard",
        description: "Designed an interactive Power BI dashboard to analyze customer credit card spending behaviors, segment customers, and identify risk patterns.",
        details: [],
        skills: ["Power BI", "DAX", "SQL", "Excel"],
        github: "https://github.com/usha2405/Power-BI-Credit-Card-Analytics-Dashboard",
        demo: null,
        image: "/creditcard.jpg?height=200&width=400"
      }, 
      {
        title: "Smart Data Processing with Spark and MongoDB",
        description: "Built an ETL pipeline using PySpark for large-scale data ingestion, transformation, and loading into MongoDB, focusing on data quality, performance, and scalability.",
        details: [],
        skills: ["PySpark", "MongoDB", "Python", "Jupyter Notebook"],
        github: "https://github.com/usha2405/Smart-Data-Processing-with-Spark-and-MongoDB",
        demo: null,
        image: "/Electric-Vechicle.jpg?height=200&width=400"
      }
    ]
  },
  {
    section: "🛠️ Data Engineering & ETL Pipelines",
    projects: [
      
      {
        title: "StreamStonks Real-Time Data Pipeline",
        description: "Developed a streaming pipeline using Kafka, Spark Streaming, and MongoDB to process stock market data in real-time for financial analytics.",
        details: [],
        skills: ["Apache Kafka", "Spark Streaming", "MongoDB", "Python"],
        github: "https://github.com/usha2405/StreamStonks-Data-Pipeline",
        demo: null,
        image: "/stock-market.jpg?height=200&width=400"
      }
    ]
  },
  {
    section: "🤖 Machine Learning & Predictive Modeling",
    projects: [
      {
        title: "PredYield: Crop Yield Prediction",
        description: "Built machine learning models to predict crop yield based on environmental and agricultural data, optimizing resource planning for farmers.",
        details: [],
        skills: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter Notebook"],
        github: "https://github.com/usha2405/PredYield",
        demo: null,
        image: "/crop.jpeg?height=200&width=400"
      },
      {
        title: "Violation Anticipation for Urban Traffic Enforcement",
        description: "Developed machine learning models to predict traffic violations using urban mobility data, improving city traffic enforcement strategies.",
        details: [],
        skills: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "Matplotlib"],
        github: "https://github.com/usha2405/Violation-Anticipation-Machine-Learning-Approaches-for-Urban-Traffic-Enforcement",
        demo: null,
        image: "/Parking.png?height=200&width=400"
      }
    ]
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-16">
      {projectSections.map((section, idx) => (
        <div key={idx} className="space-y-8">
          <h3 className="text-2xl font-bold">{section.section}</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {section.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full flex flex-col overflow-hidden group border-muted-foreground/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        <div className="overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {/* Defensive check for details */}
          {project.details && project.details.length > 0 && (
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              {project.details.map((detail, i) => (
                <li key={i} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <Badge key={i} variant="secondary" className="bg-secondary/50">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 pt-4">
          <Button variant="outline" size="sm" asChild className="group/btn">
            <Link href={project.github} target="_blank">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" /> GitHub
            </Link>
          </Button>
          {project.demo && (
            <Button size="sm" asChild className="group/btn">
              <Link href={project.demo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" /> Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
