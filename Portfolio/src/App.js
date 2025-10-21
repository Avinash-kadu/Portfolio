import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value
  };
  try {
    const res = await fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if(data.success) { setFormStatus("Message sent! ✅"); e.target.reset(); }
    else setFormStatus("Failed to send message.");
  } catch {
    setFormStatus("Error connecting to server.");
  }
};


  return (
    <div>
      {/* Navbar */}
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

        <div className="container">
          <a className="navbar-brand" href="#hero">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Hi, I'm Avinash 👋</h1>
          <p className="lead">Aspiring Software Engineer | Java Developer| React Developer</p>
          <a href="#contact" className="btn btn-light btn-lg mt-3">Contact Me</a>
          <a href="/AVINASH KADU res-Ak.pdf" className="btn btn-outline-light btn-lg mt-3 ms-2" download>Download Resume</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <p>
                I am a passionate developer who loves creating responsive and interactive websites.
                Skilled in React, Bootstrap, JavaScript, Python, Java, C++ and continuously learning new technologies.
                Looking for a challenging role to utilize my technical, database and management skills for the growth 
                of the organization as well as to enhance my knowledge about new and emerging trends in the IT sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row">
            {[
              { title: 'Java', text: 'Object-oriented programming and backend development' },
              { title: 'C++', text: 'Hands-on experience with basic problem-solving' },
              { title: 'MySQL', text: 'Database design and query optimization' },
              { title: 'MongoDB', text: 'NoSQL data management for modern web apps' },
              { title: 'React', text: 'Building dynamic web apps' },
              { title: 'Bootstrap', text: 'Responsive design & UI' },
              { title: 'JavaScript', text: 'Interactive websites' },
              { title: 'HTML & CSS', text: 'Solid web foundations' },
              { title: 'Git & GitHub', text: 'Version control' }
            ].map((skill, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{skill.title}</h5>
                    <p className="card-text">{skill.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Projects</h2>
          <div className="row">
            {[
              { title: 'Project 1', desc: 'React + Bootstrap website', link: '#' },
              { title: 'Project 2', desc: 'Interactive JS app', link: '#' },
              { title: 'Project 3', desc: 'Full-stack project', link: '#' }
            ].map((proj, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.desc}</p>
                    <a href={proj.link} className="btn btn-primary" target="_blank" rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Resume</h2>
          <a href="/AVINASH KADU res-Ak.pdf" className="btn btn-primary btn-lg" download>Download Resume</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
                <p className="text-success mt-2">{formStatus}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
  <div className="mb-2">
    <a href="https://github.com/Avinash-kadu" target="_blank" rel="noreferrer" className="text-white me-3 fs-4">
      <i className="bi bi-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/avinash-kadu-01ak/" target="_blank" rel="noreferrer" className="text-white me-3 fs-4">
      <i className="bi bi-linkedin"></i>
    </a>
    <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-white me-3 fs-4">
      <i className="bi bi-twitter"></i>
    </a>
  </div>
  <p className="mb-0">© {new Date().getFullYear()} Avinash. All Rights Reserved.</p>
</footer>

    </div>
  );
}

export default App;
