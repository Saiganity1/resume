import React from "react";
import "./App.css";

const Header = () => (
  <div className="resume">
    <div className="sidebar">
      <div className="profile-container">
        <img
          src="/image.png"
          alt="Profile"
          className="profile-pic"
        />
        <h1 className="name">Michael Dave Sicat</h1>
      </div>

      <div className="section">
        <h2>Contact</h2>
        <h4>Address</h4>
        <p>Sta Maria Mexico Pampanga</p>
        <h4>Phone</h4>
        <p>+639489597004</p>
        <h4>E-mail</h4>
        <p>mdpsicat.student@ua.edu.ph</p>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>Wide knowledge of Microsoft Office, Microsoft Excel, Adobe Photoshop</li>
          <li>Wide knowledge in Editing Videos and Photos</li>
          <li>Wide knowledge in Programming Software</li>
          <li>Wide knowledge in Computer Language and System</li>
          <li>Certified Database Specialist</li>
        </ul>
      </div>
    </div>

    <div className="main">
      <div className="main-summary-container">
        <p className="summary">
          Aspiring Information Technology graduate with a strong focus on software development. Committed to building user-friendly and efficient tech solutions that address complex challenges. I am driven by the opportunity to create applications that not only simplify tasks but also enhance the overall user experience, and I'm seeking a role where I can apply my skills in a collaborative environment.
        </p>
      </div>

      <Education />
      <Experience />
    </div>
  </div>
);

const Education = () => (
  <div className="section-main">
    <h2>Education</h2>
    <div className="education-entry">
      <h3>College: Bachelor of Science in Information Technology</h3>
      <p className="school">University of the Assumption - San Fernando City, Pampanga</p>
    </div>
    <div className="education-entry">
      <h3>Senior High School: Stem Strand</h3>
      <p className="school">
        University of the Assumption - San Fernando City, Pampanga
      </p>
    </div>
    <div className="education-entry">
      <h3>High School: San Luis National High School</h3>
      <p className="school">
       San Luis, Pampanga
      </p>
    </div>
    <div className="education-entry">
      <h3>Elementary: Escuela Catolica De San Luis Gonzaga</h3>
      <p className="school">
       San Luis, Pampanga
      </p>
    </div>
  </div>
);

const Experience = () => (
  <div className="section-main">
    <h2>Experience</h2>
    <JobEntry
      year="2023 - Current"
      title="Cashier"
      company="Rem's Grocery Store. San Luis, Pampanga"
      details={[
        "Processed customer transactions accurately and efficiently using a point-of-sale (POS) system, handling cash, credit, and debit payments.",
        "Provided friendly and prompt customer service, addressing inquiries, and resolving issues to ensure a positive shopping experience.",
        "Managed daily cash flow, including counting and reconciling the cash drawer to ensure balanced transactions at the beginning and end of each shift.",
      ]}
    />
    <JobEntry
      year="2019 - 2022"
      title="Production Management Staff"
      company="AnyPrint Avenue, Inc. San Jose del Monte, Bulacan"
      details={[
        "Operated and maintained heat press and vinyl cutting machinery to produce high-quality, custom-designed stickers and transfers for apparel.",
        "Managed the production workflow, ensuring timely completion of orders while upholding strict quality control standards for each product.",
        "Collaborated with the design team to ensure accurate transfer of digital designs into physical products, troubleshooting any technical issues that arose.",
      ]}
    />
    
  </div>
);

const JobEntry = ({ year, title, company, details }) => (
  <div className="job">
    {year && <p className="year">{year}</p>}
    <div className="job-details">
      <h3>{title}</h3>
      <p className="italic">{company}</p>
      <ul>
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}