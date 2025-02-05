import React from "react";
import HTMLFlipBook from "react-pageflip"; // Flipbook package
import "./Book.css"; // Import styles

const features = [
  {
    header: "Personalized, AI-Driven Learning",
    paragraph:
      "EEC utilizes advanced AI to deliver tailored learning experiences, adapting to each student’s unique needs and pace. This dynamic approach ensures focused academic growth, fostering a deeper understanding of subjects.",
  },
  {
    header: "Engaging and Interactive Content",
    paragraph:
      "With multimedia-rich, real-world-based lessons, EEC transforms traditional learning into an immersive experience. Students engage with content that not only informs but also motivates them to explore and excel.",
  },
  {
    header: "Seamless Flexibility and Access",
    paragraph:
      "EEC offers unmatched flexibility, allowing students to access learning materials anytime, anywhere, on any device. This ensures that learning can continue uninterrupted, adapting to the student’s schedule and pace.",
  },
  {
    header: "Real-Time Performance Insights",
    paragraph:
      "Through continuous feedback and AI-driven analytics, EEC tracks and monitors student progress, providing immediate insights and recommendations. This ensures that students and educators are always aligned with academic goals, facilitating timely interventions.",
  },
  {
    header: "Collaborative Learning and Future-Ready Skills",
    paragraph:
      "EEC fosters collaboration through group projects and peer interaction while equipping students with critical skills such as problem-solving, digital literacy, and teamwork. These skills are essential for success in both academic and professional spheres.",
  },
];

// Add an "End" page at the last
features.push({ header: "The End", paragraph: "Thank you for reading!" });

// Ensure the number of pages is even
if (features.length % 2 !== 0) {
  features.push({ header: "", paragraph: "" }); // Add an empty page for balance
}

const Book = () => {
  return (
    <div>
      <h1 className="book-title">Our Features</h1>
    <div className="book-container">
      <HTMLFlipBook width={400} height={450} className="flipbook">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`page ${feature.header === "The End" ? "end-page" : ""}`}
          >
            <h2>{feature.header}</h2>
            <p>{feature.paragraph}</p>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
    </div>
  );
};

export default Book;
