import React from "react";
import { v4 as uuid } from "uuid";
import RecommendationCard from "../components/RecommendationCard";

function RecommendationSection() {
  const recommendatins = [
    {
      id: 1,
      name: "Srinu AIET",
      company: "Skill Development APSSDC",
      designation: "Multi Skill Trainer",
      message: "Having 3+ years of experience in training students in Engineering colleges throughout APSSDC on various technologies Like PWA,MIT,Raptor,Python,AWS Google Productivity Tools.",
    },
    {
      id: 2,
      name: "Prasad AIET",
      company: "Skill AP",
      designation: "Trainer",
      message: "Having 3+ years of experience in training students in Engineering colleges throughout APSSDC on various technologies Like PWA,MIT,Raptor,Python,AWS Google Productivity Tools.",
    },
    {
      id: 3,
      name: "Sunil Vigan",
      company: "Dept Skill @AP",
      designation: "Technical Trainer",
      message: "He helped me a lot of knowledge",
    },
    {
      id: 4,
      name: "Dinesh",
      company: "Apssdc #Python Trainer",
      designation: "Trainer",
      message: "I Really Enjoyed it Python Coding",
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
        {recommendatins.map((recommendatin) => (
          <RecommendationCard key={uuid()} recommendatin={recommendatin} />
        ))}
      </div>
    </div>
  );
}
export default RecommendationSection;
