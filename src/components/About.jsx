import React from "react";
import "../styles/about.css";

const About = () => (
  <section className="about-area section-padding" id="about">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
          <div className="about-card">
            <div className="card-inner">
              {/* Card Front */}
              <div className="front">
                <div className="cover">
                  <img src="/static/picture/cover.png" alt="Cover" />
                </div>
                <div className="user">
                  <img src="/static/picture/person.jpg" alt="Jingke" />
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="name">Jingke Liang</h4>
                    <span className="profession">Full-stack Developer, SOC Analyst</span>
                    <div><i className="fa fa-map-marker fa-fw"></i> Guelph, ON, Canada</div>
                    <div><i className="fa fa-university fa-fw"></i> Alum @ University of Toronto</div>
                    <div><i className="fa fa-institution fa-fw"></i> University of Guelph, Fanshawe</div>
                    
                  </div>
                  <div className="footer">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="back">
                <div className="header">
                  <span>"Every step counts."</span>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center mt-3">Greetings</h4>
                    <span>
                      Hello! I’m Jingke. Nice to connect with you here! I have a strong passion for web development, cybersecurity, and AI technologies.
                    </span>
                    <h4 className="text-center">Experience</h4>
                    <span>
                    Rebuilding my portfolio since 2020 with modern and smarter architecture for engaging, accessible, and AI-visible web experiences.
                    </span>
                  </div>
                </div>
                <div className="footer">
                  <div className="social-links text-center">
                    <a href="https://www.facebook.com/j.k.isa.liang/"><button  className="social-btn" aria-label="Facebook">
                      <i className="fa fa-facebook fa-fw"></i>
                    </button></a>
                    
                    <a  href="https://www.youtube.com/@gillianliang6996"><button  className="social-btn" aria-label="YouTube">
                      <i className="fa fa-youtube fa-fw"></i>
                    </button></a>
                    
                    <a  href="mailto:jingkeliang88@gmail.com"><button  className="social-btn" aria-label="Discord">
                      <i className="fa fa-envelope fa-fw"></i>
                    </button></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Details */}
        <div className="col-lg-7 col-md-6">
          <div className="about-details">
            <span className="subheading">About Me</span>
            <h2 className="mb-4">
              A Developer &amp; Security Analyst<br /> Based in Canada
            </h2>

            <div className="skill-ara">
              {[
                ["Python", 98],
                ["React", 96],
                ["Java", 95],
                ["Web Development", 95],
                ["AI & LLMs", 90],
                ["NLP & Machine Learning", 90],
                ["UI/UX Design", 90],
                ["Malware Analysis", 75],
                ["Cloud Security", 75],
                ["SEO & Website Migration", 95],
                ["Identity & Access Management (IAM)", 80],
                ["Multi-Factor Authentication (MFA)", 85],
                ["Role-Based Access Control (RBAC)", 85],
                ["Access Control & Identity Governance", 78],
              ].map(([skill, percent]) => (
                <div className="single-skill" key={skill}>
                  <div className="progress-count d-flex justify-content-between">
                    <h4>{skill}</h4>
                    <span>{percent}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/static/doc/Jingke_Liang_Resume_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn mt-4"
              data-text="Download CV"
            >
              {"Download CV".split("").map((ch, i) => (
                <span key={i}>{ch}</span>
              ))}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
