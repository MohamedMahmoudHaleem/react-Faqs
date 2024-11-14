import iconStar from "./assets/images/icon-star.svg";
import Qgroup from "./Qgroup.jsx";

const questionAnswer = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges,with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function Container() {
  return (
    <div className="container">
      <div className="second-pic"></div>
      <div className="faqs">
        <header>
          <img src={iconStar} alt="star" />
          <h1>FAQs</h1>
        </header>
        {questionAnswer.map((qaText) => (
          <Qgroup
            key={qaText.question}
            question={qaText.question}
            answer={qaText.answer}
          />
        ))}
      </div>
    </div>
  );
}
