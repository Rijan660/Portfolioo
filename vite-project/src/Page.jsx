import React from 'react';

const Page = () => {
  return (
    <div className="profile-page">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .profile-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.7;
          color: #2c3e50;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          min-height: 100vh;
        }

        .intro {
          text-align: center;
          padding: 90px 20px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          color: #f9f9f9;
          margin-bottom: 30px;
        }

        .intro h1 {
          font-size: 3rem;
          margin-bottom: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
        }

        .intro h2 {
          font-size: 1.6rem;
          font-weight: 400;
          opacity: 0.85;
          margin-bottom: 8px;
        }

        .intro p {
          font-size: 1.1rem;
          opacity: 0.75;
        }

        .card-section {
          background: #ffffff;
          margin: 25px auto;
          padding: 45px 35px;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          max-width: 960px;
          transition: all 0.3s ease;
        }

        .card-section:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.18);
        }

        .card-section h2 {
          color: #2575fc;
          font-size: 2rem;
          margin-bottom: 18px;
          border-left: 5px solid #6a11cb;
          padding-left: 12px;
        }

        .card-section p {
          font-size: 1.05rem;
          color: #444;
          margin-bottom: 14px;
        }

        .grid-skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .skill {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: #fff;
          padding: 14px 22px;
          border-radius: 20px;
          text-align: center;
          font-weight: 600;
          transition: transform 0.3s ease;
        }

        .skill:hover {
          transform: scale(1.07);
        }

        .timeline {
          background: #f4f6ff;
          padding: 22px;
          border-radius: 12px;
          margin: 18px 0;
          border-left: 4px solid #2575fc;
        }

        .timeline h3 {
          font-size: 1.35rem;
          color: #2575fc;
          margin-bottom: 8px;
        }

        .timeline strong {
          color: #6a11cb;
        }

        .hobby-list {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .hobby {
          background: linear-gradient(135deg, #f6d365, #fda085);
          padding: 13px 22px;
          border-radius: 22px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #2d3436;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
          margin-top: 20px;
        }

        .contact-box {
          background: #f4f6ff;
          padding: 18px;
          border-radius: 12px;
          text-align: center;
        }

        .contact-box a {
          color: #2575fc;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-box a:hover {
          color: #6a11cb;
        }

        .note {
          background: #fffbe6;
          color: #8c6d1f;
          padding: 14px;
          border-radius: 8px;
          margin-top: 14px;
          border: 1px solid #ffe58f;
          font-style: italic;
        }

        .footer {
          text-align: center;
          padding: 35px 20px;
          color: #f9f9f9;
          font-size: 1rem;
          margin-top: 45px;
        }
      `}</style>

      <header id="home">
        <div className="intro">
          <h1>Rijan Prajapati</h1>
          <h2>Frontend Web Developer</h2>
          <p>Kathmandu, Nepal</p>
        </div>
      </header>

      <section id="about" className="card-section">
        <h2>About Me</h2>
        <p>
          I enjoy crafting clean, responsive, and engaging web experiences. 
          My work focuses on performance, accessibility, and creating designs 
          that leave a lasting impression.
        </p>
        <div className="note">
          ✨ Tip: Share your personal journey, values, and vision for your career here.
        </div>
      </section>

      <section id="skills" className="card-section">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill">HTML5</div>
          <div className="skill">CSS3</div>
          <div className="skill">JavaScript (ES6+)</div>
          <div className="skill">UI/UX Tools</div>
        </div>
      </section>

      <section id="experience" className="card-section">
        <h2>Experience</h2>
        <div className="timeline">
          <h3>Intern – Sunway College Kathmandu</h3>
          <p><strong>Duration:</strong> 1 year</p>
          <p>
            Assisted in developing web interfaces, participated in student projects, 
            and collaborated with teams to deliver user-focused solutions.
          </p>
        </div>
      </section>

      <section id="education" className="card-section">
        <h2>Education</h2>
        <div className="timeline">
          <h3>BSc (Hons) with AI</h3>
          <p>
            Studied computer science fundamentals alongside applied artificial 
            intelligence, preparing for future-focused development challenges.
          </p>
        </div>
      </section>

      <section id="projects" className="card-section">
        <h2>Projects</h2>
        <div className="note">
          🚀 Add details like: project names, technologies, links to GitHub, 
          and screenshots to showcase your work.
        </div>
      </section>

      <section id="hobbies" className="card-section">
        <h2>Hobbies</h2>
        <div className="hobby-list">
          <div className="hobby">⚽ Basketball</div>
          <div className="hobby">🎨 Digital Art</div>
          <div className="hobby">📚 Reading</div>
        </div>
      </section>

      <section id="contact" className="card-section">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="contact-box">
            <h3>Email</h3>
            <a href="mailto:rijan69@gmail.com">rijan69@gmail.com</a>
          </div>
          <div className="contact-box">
            <h3>Phone</h3>
            <p>9800000000</p>
          </div>
        </div>
        <div className="note">
          🔗 Don’t forget to include LinkedIn and GitHub links here.
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Rijan Prajapati | Crafted with passion 💻</p>
      </footer>
    </div>
  );
};

export default Page;