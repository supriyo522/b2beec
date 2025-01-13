import React from "react";
import "./Testimonials.css"; // Import your CSS for styling

const testimonialsData = [
  {
    id: 1,
    stars: 5,
    text: "EEC Educare has streamlined our administrative tasks, allowing us to focus more on student engagement and learning.",
    name: "Sarah Johnson",
    role: "Principal at Green Valley School",
    image: "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/thumbnail_female_JTDJA7Sv.webp", // Replace with actual image URLs
  },
  {
    id: 2,
    stars: 5,
    text: "The interactive lessons feature has made teaching more enjoyable and effective for my students.",
    name: "Michael Smith",
    role: "Teacher",
    image: "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/thumbnail_male_Gbj5rYla.webp",
  },
  {
    id: 3,
    stars: 5,
    text: "As a parent, I appreciate the progress monitoring tools that keep me informed about my child's learning journey.",
    name: "Emily Davis",
    role: "Parent",
    image: "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/thumbnail_female_jutb1J5g.webp",
  },
  {
    id: 4,
    stars: 5,
    text: "Implementing EEC Educare was seamless, and the support team has been incredibly helpful.",
    name: "David Brown",
    role: "IT Coordinator",
    image: "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/thumbnail_male_m7Af0qRL.webp",
  },
  {
    id: 5,
    stars: 5,
    text: "The fee management system has simplified our billing process significantly.",
    name: "Laura Wilson",
    role: "School Administrator",
    image: "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/thumbnail_female_A42NOI8a.webp",
  },
  {
    id: 6,
    stars: 5,
    text: "I love the interactive lessons! They make learning fun and engaging.",
    name: "James Taylor",
    role: "Student",
    image: "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/thumbnail_male_1ElSH33b.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
    <h1 style={{ display: "flex",justifyContent:"center",textAlign:"center" }}>What Our Users Say</h1>
    <p style={{ display: "flex",justifyContent:"center",textAlign:"center" }}>
    Discover how EEC Educare has transformed education for schools and students.
</p>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="stars">
              {"★".repeat(testimonial.stars)}
            </div>
            <p>{testimonial.text}</p>
            <div className="author-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
