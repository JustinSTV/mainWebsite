import "./CSS/AboutMe.css"

const AboutMe = () => {


  return (
    <div className="about-me-section">
      <h1 className="big-heading">About Me</h1>
      <div className="about-me-content">
        <div className="photo">
          <img
            src="pfp.jpg"
            alt="Justas Steponavičius"
          />
        
          <p className="my-role">Junior Web Developer</p>
          <h3 className="my-name">Justas Steponavičius</h3>
        </div>
        <div className="descAndCards">
          <p className="about-me-description">
            I see myself as an IT fanatic. From an early age, there
            have always been endless questions about the operation
            of computers and other devices at home. With a lot of
            knowledge, I want to continue to improve with each
            passing day, so I'm interested in current technologies
            and their trends.
          </p>
          <div className="card">
            <div className="grid-section">
              <ul>
                <li>
                  <label>Name: </label>
                  <span>Justas Steponavičius</span>
                </li>
                <li>
                  <label>Birthday: </label>
                  <span>20th March 2002</span>
                </li>
                <li>
                  <label>Age: </label>
                  <span>21 years</span>
                </li>
                <li>
                  <label>Address: </label>
                  <span>Kaunas, Lithuania</span>
                </li>
              </ul>
              <ul>
                <li>
                  <label>Email: </label>
                  <span>steponaviciusjustas@gmail.com</span>
                </li>
                <li>
                  <label>GitHub: </label>
                  <span>
                    <a
                      href="https://github.com/JustinSTV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github"
                      >JustinSTV</a>
                  </span>
                </li>
                <li>
                  <label>LinkedIn: </label>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/justassteponavicius/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                      >Justas Steponavičius</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="education-section">
        <h2 className="big-heading">Education</h2>
        <div className="education-content">
          <div className="education-card">
            <h3>Kaunas Information Technology School</h3>
            <p className="education-card-year">
              Sep 2017 - Dec 2021
            </p>
            <p className="education-card-desc">
              High School Diploma
            </p>
          </div>
          <div className="education-card">
            <h3>Kaunas Information Technology School</h3>
            <p className="education-card-year">
              Sep 2017 - Dec 2021
            </p>
            <p className="education-card-desc">
              Computer Networking
            </p>
          </div>
          <div className="education-card">
            <h3>Kaunas Information Technology School</h3>
            <p className="education-card-year">
              Sep 2022 - Jun 2023
            </p>
            <p className="education-card-desc">
              JavaScript Programming
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
