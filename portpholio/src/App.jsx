import { useEffect, useState } from "react";
import "./App.css";
import castle from "./assets/castle.jpg";
import pythonCertificat  from "./assets/pytho certificate.jpeg";

function App() {
const [education, setEducation] = useState("10th");
const [changingEducation, setChangingEducation] = useState(false);
const [achievementStage, setAchievementStage] = useState("portfolio");
const [selectedCertificate, setSelectedCertificate] = useState(null);

const certificates = [
  {
    id: 1,
    name: "Python Certificate",
    image: pythonCertificat,
  },
  {
    id: 2,
    name: "Web Development",
    image: "/certificates/web-development.png",
  },
  {
    id: 3,
    name: "NPTEL Certificate",
    image: "/certificates/nptel.png",
  },
  {
    id: 4,
    name: "CAD Certificate",
    image: "/certificates/cad.png",
  },
];

const openAchievements = () => {
  setAchievementStage("rune");

  setTimeout(() => {
    setAchievementStage("door");
  }, 1500);

  setTimeout(() => {
    setAchievementStage("rows");
  }, 3500);
};

const openCertificate = (certificate) => {
  setSelectedCertificate(certificate);
  setAchievementStage("fireworks");

  setTimeout(() => {
    setAchievementStage("certificate");
  }, 3000);
};

const closeCertificate = () => {
  setSelectedCertificate(null);
  setAchievementStage("rows");
};

const returnToPortfolio = () => {
  setAchievementStage("returning");

  setTimeout(() => {
    setAchievementStage("portfolio");
  }, 1200);
};

const educationData = {
  "10th": {
    title: "ORDINARY LEVEL RESULTS",
    school: "Maharashtra Board",
    year: "2021",
    marks: "70%",
    symbol: "📜"
  },

  "12th": {
    title: "HIGHER SECONDARY RESULTS",
    school: "Maharashtra Board",
    year: "2023",
    marks: "60%",
    symbol: "📜"
  },

  engineering: {
    title: "MAGICAL ENGINEERING RECORD",
    school: "Rasiklal M. Dhariwal College of Engineering",
    year: "2024 – Present",
    marks: "Third Year",
    cgpa1: "1st Year CGPA: 8.15",
    cgpa2: "2nd Year CGPA: 6.80",
    symbol: "🎓"
  }
};

function changeEducation(type) {
  if (type === education || changingEducation) return;

  // Hide current information
  setChangingEducation(true);

  // Wait 2 seconds before showing new information
  setTimeout(() => {
    setEducation(type);
    setChangingEducation(false);
  }, 2000);
}
  /* =========================================
     NAVBAR SCROLL
  ========================================= */

  const [bookPage, setBookPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* =========================================
     CONTACT - OWL STATE
  ========================================= */

  const [owlSent, setOwlSent] = useState(false);


  /* =========================================
     ABOUT LETTER
  ========================================= */

  const [aboutOpen, setAboutOpen] = useState(false);
  const [typedLines, setTypedLines] = useState([]);
  const [showSignature, setShowSignature] = useState(false);

  const aboutLines = [
    "Dear Visitor,",
    "",
    "My name is Shashikant.",
    "I am a Mechanical Engineering student with a strong",
    "interest in Web Development, Programming and Technology.",
    "",
    "I enjoy creating websites, learning new technologies",
    "and turning ideas into real-world projects.",
    "",
    "My journey combines engineering with the magic of code.",
    "Every project I create is another step in my journey.",
    "",
    "I believe curiosity, patience and practice",
    "can turn an ordinary idea into something extraordinary.",
  ];


  const openAbout = () => {

    setAboutOpen(true);
    setTypedLines([]);
    setShowSignature(false);

    let currentLine = 0;

    const typeLine = () => {

      if (currentLine < aboutLines.length) {

        setTypedLines((previous) => [
          ...previous,
          aboutLines[currentLine],
        ]);

        currentLine++;

        setTimeout(typeLine, 550);

      } else {

        setTimeout(() => {
          setShowSignature(true);
        }, 700);

      }

    };

    setTimeout(typeLine, 1000);

  };


  const closeAbout = () => {

    setAboutOpen(false);
    setTypedLines([]);
    setShowSignature(false);

  };


  /* =========================================
     PROJECTS
  ========================================= */

  const projects = [

    {
      id: 1,
      title: "Amazon Clone",
      technology: "React",
      icon: "🛒",
      link: "https://shashikantmulimani076.github.io/amazon-clone/",
    },

    {
      id: 2,
      title: "Weather App",
      technology: "JavaScript",
      icon: "🌦️",
      link: "https://shashikantmulimani076.github.io/weather-app/",
    },

    {
      id: 3,
      title: "Todo List",
      technology: "React",
      icon: "📜",
      link: "https://your-todo-list-link.com",
    },

    {
      id: 4,
      title: "Vehicle Analysis",
      technology: "Python + Flask",
      icon: "🚗",
      link: "https://your-vehicle-project-link.com",
    },

    {
      id: 5,
      title: "Notes App",
      technology: "JavaScript",
      icon: "📖",
      link: "https://your-notes-app-link.com",
    },

  ];


  return (

    <div
      className="portfolio"
      style={{
        backgroundImage: `url(${castle})`,
      }}
    >


      {/* =========================================
          FIREFLY 1
      ========================================= */}

      <div className="firefly firefly-one">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>

      </div>


      {/* =========================================
          FIREFLY 2
      ========================================= */}

      <div className="firefly firefly-two">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>

      </div>


      {/* =========================================
          SMALL FIREFLY 3
      ========================================= */}

      <div className="firefly firefly-three small-firefly">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>

      </div>


      {/* =========================================
          SMALL FIREFLY 4
      ========================================= */}

      <div className="firefly firefly-four small-firefly">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>

      </div>


      {/* =========================================
          SMALL FIREFLY 5
      ========================================= */}

      <div className="firefly firefly-five small-firefly">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>

      </div>


      {/* =========================================
          SMALL FIREFLY 6
      ========================================= */}

      <div className="firefly firefly-six small-firefly">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>

      </div>


      {/* =========================================
          SMALL FIREFLY 7
      ========================================= */}

      <div className="firefly firefly-seven small-firefly">

        <div className="firefly-core"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>

      </div>


      {/* =========================================
          RANDOM FIREFLY 8
      ========================================= */}

      <div className="random-firefly random-firefly-1">

        <div className="random-firefly-core"></div>

        <span className="random-particle"></span>
        <span className="random-particle"></span>
        <span className="random-particle"></span>
        <span className="random-particle"></span>

      </div>


      {/* =========================================
          RANDOM FIREFLY 9
      ========================================= */}

      <div className="random-firefly random-firefly-2">

        <div className="random-firefly-core"></div>

        <span className="random-particle"></span>
        <span className="random-particle"></span>
        <span className="random-particle"></span>
        <span className="random-particle"></span>

      </div>


      {/* =========================================
          RANDOM FIREFLY 10
      ========================================= */}

      <div className="random-firefly random-firefly-3">

        <div className="random-firefly-core"></div>

        <span className="random-particle"></span>
        <span className="random-particle"></span>
        <span className="random-particle"></span>
        <span className="random-particle"></span>

      </div>


      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav
        className={`navbar ${
          scrollY > 50 ? "navbar-small" : ""
        }`}
      >

        <a
          href="#home"
          className="magic-logo"
        >

          <div className="logo-symbol">
            ⚡
          </div>

          <div className="logo-name">
            SHASHIKANT
          </div>

        </a>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>


          <a
            href="#about"
            onClick={(e) => {

              e.preventDefault();
              openAbout();

            }}
          >
            About
          </a>


          <a href="#education">
            Education
          </a>


          <a href="#skills">
            Skills
          </a>


          <a href="#projects">
            Projects
          </a>


          <a href="#certificates">
            Certificates
          </a>


          <a href="#contact">
            Contact
          </a>

        </div>


        <button className="magic-menu">
          🪄
        </button>

      </nav>


      {/* =========================================
          HOME
      ========================================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p>
            Welcome to my magical world
          </p>

          <h1>
            SHASHIKANT
          </h1>

          <h2>
            Web Developer & Mechanical Engineer
          </h2>

          <button
            className="magic-button"
            onClick={openAbout}
          >
            ✨ About Me
          </button>

        </div>

      </section>


      {/* =========================================
          ABOUT LETTER
      ========================================= */}

      {aboutOpen && (

        <div className="letter-overlay">

          <div className="letter-magic magic-one">
            ✦
          </div>

          <div className="letter-magic magic-two">
            ✧
          </div>

          <div className="letter-magic magic-three">
            ✦
          </div>


          <button
            className="letter-close"
            onClick={closeAbout}
          >
            ×
          </button>


          <div className="parchment">

            <div className="paper-roll top-roll"></div>


            <div className="wax-seal">
              ⚡
            </div>


            <div className="letter-symbol">
              ✦
            </div>


            <div className="letter-content">

              <div className="letter-heading">
                About Me
              </div>


              <div className="letter-line"></div>


              <div className="typed-text">

                {typedLines.map((line, index) => (

                  <p
                    key={index}
                    className="typed-line"
                  >

                    {line}

                    {index === typedLines.length - 1 && (

                      <span className="typing-spark">
                        ✦
                      </span>

                    )}

                  </p>

                ))}

              </div>


              {showSignature && (

                <div className="signature">

                  <span>
                    Yours magically,
                  </span>

                  <strong>
                    Shashikant ✒
                  </strong>

                </div>

              )}

            </div>


            <div className="paper-roll bottom-roll"></div>

          </div>

        </div>

      )}


        {/* =====================================================
    EDUCATION
===================================================== */}

<section className="education-section" id="education">

  <div className="education-container">

    {/* TITLE */}
    <div className="education-heading">
      <span>✦</span>
      <h2>MY EDUCATION</h2>
      <span>✦</span>
    </div>

    {/* EDUCATION BUTTONS */}

    <div className="education-buttons">

      <button
        className={education === "10th" ? "education-btn active" : "education-btn"}
        onClick={() => changeEducation("10th")}
        disabled={changingEducation}
      >
        📜 10th
      </button>

      <button
        className={education === "12th" ? "education-btn active" : "education-btn"}
        onClick={() => changeEducation("12th")}
        disabled={changingEducation}
      >
        📜 12th
      </button>

      <button
        className={
          education === "engineering"
            ? "education-btn active"
            : "education-btn"
        }
        onClick={() => changeEducation("engineering")}
        disabled={changingEducation}
      >
        🎓 Engineering
      </button>

    </div>


    {/* =================================================
        STAR TRANSITION
    ================================================= */}

    {changingEducation && (

      <div className="education-star-transition">

        {/* Lots of stars */}

        <span className="edu-star star1">✦</span>
        <span className="edu-star star2">✦</span>
        <span className="edu-star star3">★</span>
        <span className="edu-star star4">✦</span>
        <span className="edu-star star5">★</span>
        <span className="edu-star star6">✦</span>
        <span className="edu-star star7">★</span>
        <span className="edu-star star8">✦</span>
        <span className="edu-star star9">★</span>
        <span className="edu-star star10">✦</span>
        <span className="edu-star star11">★</span>
        <span className="edu-star star12">✦</span>
        <span className="edu-star star13">★</span>
        <span className="edu-star star14">✦</span>
        <span className="edu-star star15">★</span>
        <span className="edu-star star16">✦</span>
        <span className="edu-star star17">★</span>
        <span className="edu-star star18">✦</span>
        <span className="edu-star star19">★</span>
        <span className="edu-star star20">✦</span>
        <span className="edu-star star21">★</span>
        <span className="edu-star star22">✦</span>
        <span className="edu-star star23">★</span>
        <span className="edu-star star24">✦</span>
        <span className="edu-star star25">★</span>
        <span className="edu-star star26">✦</span>
        <span className="edu-star star27">★</span>
        <span className="edu-star star28">✦</span>
        <span className="edu-star star29">★</span>
        <span className="edu-star star30">✦</span>
        <span className="edu-star star31">★</span>
        <span className="edu-star star32">✦</span>
        <span className="edu-star star33">★</span>
        <span className="edu-star star34">✦</span>
        <span className="edu-star star35">★</span>
        <span className="edu-star star36">✦</span>
        <span className="edu-star star37">★</span>
        <span className="edu-star star38">✦</span>
        <span className="edu-star star39">★</span>
        <span className="edu-star star40">✦</span>

      </div>

    )}


    {/* =================================================
        HOGWARTS RESULT CARD
    ================================================= */}

    {!changingEducation && (

      <div className="hogwarts-result-card">

        {/* Hogwarts-style top */}

        <div className="hogwarts-logo">
          🏰
        </div>

        <h3>
          HOGWARTS SCHOOL
        </h3>

        <p className="wizarding-school">
          OF WITCHCRAFT AND WIZARDRY
        </p>

        <div className="result-line"></div>

        <h4>
          {educationData[education].title}
        </h4>


        {/* RESULT */}

        <div className="education-result">

          <div className="result-row">
            <span>Academic Record</span>
            <span>{educationData[education].symbol}</span>
          </div>

          <div className="result-row">
            <span>Institution</span>
            <strong>
              {educationData[education].school}
            </strong>
          </div>

          <div className="result-row">
            <span>Year</span>
            <strong>
              {educationData[education].year}
            </strong>
          </div>


          {/* 10th / 12th MARKS */}

          {education !== "engineering" && (

            <div className="result-row highlight">
              <span>Percentage</span>

              <strong>
                {educationData[education].marks}
              </strong>
            </div>

          )}


          {/* ENGINEERING */}

          {education === "engineering" && (

            <>
              <div className="result-row highlight">
                <span>Current Year</span>

                <strong>
                  {educationData[education].marks}
                </strong>
              </div>

              <div className="result-row highlight">
                <span>1st Year</span>

                <strong>
                  CGPA 8.15
                </strong>
              </div>

              <div className="result-row highlight">
                <span>2nd Year</span>

                <strong>
                  CGPA 6.80
                </strong>
              </div>
            </>

          )}

        </div>


        {/* BOTTOM */}

        <div className="hogwarts-bottom-line"></div>

        
           <div className="education-footer">
            <p className="academic-footer">
          ✦ Academic Journey ✦
        </p>
               <h3>*Enrolled by*</h3> 
        <strong>Shashikant Suresh Mulimani</strong>
</div>
      </div>
      

    )}
           
  </div>

</section>
       
    





      {/* =========================================
          SKILLS BOOK
      ========================================= */}

      <section
        className="skills-section"
        id="skills"
      >

        <div className="skills-book">


          {/* =====================================
              PAGE 1 - FRONT COVER
          ===================================== */}

          {bookPage === 0 && (

            <div className="skill-book-page front-cover">

              <div className="book-symbol">
                ⚡
              </div>

              <div className="cover-line"></div>

              <h1>
                SKILLS
              </h1>

              <p>
                THE MAGICAL BOOK OF KNOWLEDGE
              </p>

              <div className="cover-name">
                SHASHIKANT
              </div>

              <button
                className="book-next"
                onClick={() => setBookPage(1)}
              >
                OPEN BOOK →
              </button>

            </div>

          )}


          {/* =====================================
              PAGE 2 - WEB DEVELOPMENT
          ===================================== */}

          {bookPage === 1 && (

            <div className="skill-book-page skill-page">

              <div className="page-top-symbol">
                ✦
              </div>

              <h2>
                WEB DEVELOPMENT
              </h2>

              <div className="page-decoration"></div>


              <div className="skills-list">

                <div className="skill-item">
                  <span>⚡</span>
                  HTML
                </div>

                <div className="skill-item">
                  <span>⚡</span>
                  CSS
                </div>

                <div className="skill-item">
                  <span>⚡</span>
                  JavaScript
                </div>

                <div className="skill-item">
                  <span>⚛</span>
                  React
                </div>

              </div>


              <div className="page-number">
                II
              </div>


              <button
                className="book-next"
                onClick={() => setBookPage(2)}
              >
                NEXT PAGE →
              </button>

            </div>

          )}


          {/* =====================================
              PAGE 3 - PROGRAMMING
          ===================================== */}

          {bookPage === 2 && (

            <div className="skill-book-page skill-page">

              <div className="page-top-symbol">
                ✦
              </div>

              <h2>
                PROGRAMMING
              </h2>

              <div className="page-decoration"></div>


              <div className="skills-list">

                <div className="skill-item">
                  <span>🐍</span>
                  Python
                </div>

                <div className="skill-item">
                  <span>🔥</span>
                  Flask
                </div>

                <div className="skill-item">
                  <span>💻</span>
                  C Programming
                </div>

              </div>


              <div className="page-number">
                III
              </div>


              <div className="page-buttons">

                <button
                  className="book-previous"
                  onClick={() => setBookPage(1)}
                >
                  ← PREVIOUS
                </button>


                <button
                  className="book-next"
                  onClick={() => setBookPage(3)}
                >
                  NEXT PAGE →
                </button>

              </div>

            </div>

          )}


          {/* =====================================
              PAGE 4 - DATA
          ===================================== */}

          {bookPage === 3 && (

            <div className="skill-book-page skill-page">

              <div className="page-top-symbol">
                ✦
              </div>

              <h2>
                DATA
              </h2>

              <div className="page-decoration"></div>


              <div className="skills-list">

                <div className="skill-item">
                  <span>🗄</span>
                  SQL
                </div>

                <div className="skill-item">
                  <span>🐼</span>
                  Pandas
                </div>

                <div className="skill-item">
                  <span>🔢</span>
                  NumPy
                </div>

                <div className="skill-item">
                  <span>📊</span>
                  Matplotlib
                </div>

              </div>


              <div className="page-number">
                IV
              </div>


              <div className="page-buttons">

                <button
                  className="book-previous"
                  onClick={() => setBookPage(2)}
                >
                  ← PREVIOUS
                </button>


                <button
                  className="book-next"
                  onClick={() => setBookPage(4)}
                >
                  NEXT PAGE →
                </button>

              </div>

            </div>

          )}


          {/* =====================================
              PAGE 5 - ENGINEERING
          ===================================== */}

          {bookPage === 4 && (

            <div className="skill-book-page skill-page">

              <div className="page-top-symbol">
                ✦
              </div>

              <h2>
                ENGINEERING
              </h2>

              <div className="page-decoration"></div>


              <div className="skills-list">

                <div className="skill-item">
                  <span>⚙</span>
                  SolidWorks
                </div>

                <div className="skill-item">
                  <span>⚙</span>
                  Onshape
                </div>

                <div className="skill-item">
                  <span>📊</span>
                  Excel
                </div>

                <div className="skill-item">
                  <span>🔧</span>
                  Git
                </div>

              </div>


              <div className="page-number">
                V
              </div>


              <div className="page-buttons">

                <button
                  className="book-previous"
                  onClick={() => setBookPage(3)}
                >
                  ← PREVIOUS
                </button>


                <button
                  className="book-next"
                  onClick={() => setBookPage(5)}
                >
                  CLOSE BOOK →
                </button>

              </div>

            </div>

          )}


          {/* =====================================
              PAGE 6 - BACK COVER
          ===================================== */}

          {bookPage === 5 && (

            <div className="skill-book-page back-cover">

              <div className="back-symbol">
                ✦
              </div>

              <h1>
                THE END
              </h1>

              <div className="cover-line"></div>

              <p>
                KNOWLEDGE IS THE
                <br />
                GREATEST MAGIC
              </p>

              <div className="cover-name">
                SHASHIKANT
              </div>


              <button
                className="book-next"
                onClick={() => setBookPage(0)}
              >
                OPEN AGAIN
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =========================================
          PROJECTS
      ========================================= */}

      <section
        className="projects"
        id="projects"
      >

        <div className="projects-title">

          <p className="section-subtitle">
            ✦ My Magical Creations ✦
          </p>

          <h2>
            Projects
          </h2>

        </div>


        <div className="project-arc">

          {projects.map((project, index) => (

            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card project-${index + 1}`}
            >

              <div className="project-icon">
                {project.icon}
              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.technology}
              </p>


              <span className="project-spark">
                ✦
              </span>


              <span className="open-project">
                Open Project
              </span>

            </a>

          ))}

        </div>

      </section>


      {/* =========================================
          CERTIFICATES
      ========================================= */}

      {/* =====================================================
    MAGICAL ACHIEVEMENTS
===================================================== */}

<section className="achievements-section">

  {/* =====================================================
      MAIN BUTTON
  ===================================================== */}

  {achievementStage === "portfolio" && (
    <div className="achievement-entry">

      <div className="achievement-sparks">
        ✦
      </div>

      <button
        className="magical-achievement-button"
        onClick={openAchievements}
      >
        🏆 MY MAGICAL ACHIEVEMENTS
      </button>

      <div className="achievement-spark spark-a">✦</div>
      <div className="achievement-spark spark-b">✧</div>
      <div className="achievement-spark spark-c">✦</div>
      <div className="achievement-spark spark-d">✧</div>

    </div>
  )}


  {/* =====================================================
      RUNE CIRCLE
  ===================================================== */}

  {achievementStage === "rune" && (
    <div className="rune-screen">

      <div className="magic-rune">

        <div className="rune-ring ring-one"></div>
        <div className="rune-ring ring-two"></div>
        <div className="rune-ring ring-three"></div>

        <div className="rune-symbol">
          ⚡
        </div>

        <span className="rune-star rune-star-one">✦</span>
        <span className="rune-star rune-star-two">✧</span>
        <span className="rune-star rune-star-three">✦</span>
        <span className="rune-star rune-star-four">✧</span>

      </div>

      <p className="magic-loading">
        Awakening the magical archives...
      </p>

    </div>
  )}


  {/* =====================================================
      MAGICAL DOOR
  ===================================================== */}

  {achievementStage === "door" && (
    <div className="door-screen">

      <div className="door-glow"></div>

      <div className="magical-door">

        <div className="door-symbol">
          ⚡
        </div>

        <div className="door-text">
          MAGICAL
          <br />
          ARCHIVES
        </div>

        <div className="door-handle">
          ✦
        </div>

      </div>

      <p className="door-opening-text">
        The magical archives are opening...
      </p>

    </div>
  )}


  {/* =====================================================
      ACHIEVEMENT ROWS
  ===================================================== */}

  {achievementStage === "rows" && (
    <div className="achievement-archive">

      <div className="archive-title">
        ✦ MAGICAL ACHIEVEMENTS ✦
      </div>

      <p className="archive-subtitle">
        Records of magical knowledge and accomplishments
      </p>


      <div className="achievement-rows">

        {certificates.map((certificate, index) => (

          <div
            className="achievement-row"
            key={certificate.id}
            style={{
              animationDelay: `${index * 0.25}s`
            }}
          >

            <div className="achievement-left">

              <span className="achievement-paper">
                📜
              </span>

              <div>
                <h3>
                  {certificate.name}
                </h3>

                <span>
                  Academic Magical Record
                </span>
              </div>

            </div>


            <button
              className="certificate-view-button"
              onClick={() => openCertificate(certificate)}
            >
              VIEW
              <span>✦</span>
            </button>

          </div>

        ))}

      </div>


      <button
        className="return-portfolio-button"
        onClick={returnToPortfolio}
      >
        🔙 RETURN TO PORTFOLIO
      </button>

    </div>
  )}


  {/* =====================================================
      FIREWORKS
  ===================================================== */}

  {achievementStage === "fireworks" && (
    <div className="fireworks-screen">

      <div className="firework fw-one"></div>
      <div className="firework fw-two"></div>
      <div className="firework fw-three"></div>
      <div className="firework fw-four"></div>
      <div className="firework fw-five"></div>
      <div className="firework fw-six"></div>

      <div className="firework-stars">

        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>

      </div>

      <div className="fireworks-message">
        ✦ Revealing your achievement ✦
      </div>

    </div>
  )}


  {/* =====================================================
      CERTIFICATE
  ===================================================== */}

  {achievementStage === "certificate" &&
    selectedCertificate && (

      <div className="certificate-screen">

        <div className="certificate-light"></div>

        <div className="certificate-container">

          <div className="certificate-heading">
            ✦ {selectedCertificate.name} ✦
          </div>


          <div className="certificate-frame">

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
            />

          </div>


          <button
            className="certificate-back-button"
            onClick={closeCertificate}
          >
            ✦ BACK TO ACHIEVEMENTS ✦
          </button>

        </div>

      </div>
    )}


  {/* =====================================================
      RETURNING ANIMATION
  ===================================================== */}

  {achievementStage === "returning" && (
    <div className="return-magic">

      <div className="return-rune">
        ✦
      </div>

      <div className="return-particles">

        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>

      </div>

    </div>
  )}

</section>

         


              


      {/* =========================================
          CONTACT - SEND AN OWL
      ========================================= */}

      <section
        className="contact"
        id="contact"
      >

        <div className="contact-container">


          {/* HEADING */}

          <div className="contact-heading">

            <div className="owl-title">
              🦉 SEND AN OWL 🦉
            </div>

            <p>
              "Have a message for me?"
            </p>

          </div>


          {/* CONTACT LETTER */}

          <div
            className={`owl-letter ${
              owlSent ? "letter-sent" : ""
            }`}
          >


            {/* WAX SEAL */}

            {owlSent && (

              <div className="wax-seal">
                ⚡
              </div>

            )}


            {!owlSent ? (

              <form
                className="owl-form"
                onSubmit={(e) => {

                  e.preventDefault();

                  setOwlSent(true);

                  setTimeout(() => {
                    setOwlSent(false);
                  }, 6000);

                }}
              >


                {/* NAME */}

                <div className="form-group">

                  <label htmlFor="owl-name">
                    Your Name
                  </label>

                  <input
                    id="owl-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="form-group">

                  <label htmlFor="owl-email">
                    Your Email
                  </label>

                  <input
                    id="owl-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>


                {/* MESSAGE */}

                <div className="form-group">

                  <label htmlFor="owl-message">
                    Your Message
                  </label>

                  <textarea
                    id="owl-message"
                    placeholder="Write your message..."
                    rows="5"
                    required
                  ></textarea>

                </div>


                {/* SEND BUTTON */}

                <button
                  type="submit"
                  className="owl-send-button"
                >
                  🪶 SEND OWL
                </button>

              </form>

            ) : (


              /* =====================================
                 SUCCESS
              ===================================== */

              <div className="owl-success">

                <div className="flying-owl">
                  🦉
                </div>


                <div className="folding-letter">
                  📜
                </div>


                <div className="success-seal">
                  ⚡
                </div>


                <h3>
                  🦉 Owl dispatched!
                </h3>


                <p>
                  Your message has been delivered by owl. ✨
                </p>

              </div>

            )}

          </div>


          {/* =====================================
              SOCIAL LINKS
          ===================================== */}

          <div className="magical-socials">


            {/* GITHUB */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="magic-social"
            >

              <span className="social-icon">
                🦉
              </span>


              <span className="social-text">

                <strong>
                  GitHub
                </strong>

                <small>
                  My Code
                </small>

              </span>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="magic-social"
            >

              <span className="social-icon">
                💼
              </span>


              <span className="social-text">

                <strong>
                  LinkedIn
                </strong>

                <small>
                  My Professional Network
                </small>

              </span>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:your-email@gmail.com"
              className="magic-social"
            >

              <span className="social-icon">
                ✉️
              </span>


              <span className="social-text">

                <strong>
                  Email
                </strong>

                <small>
                  Send a Letter
                </small>

              </span>

            </a>


            {/* RESUME */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="magic-social"
            >

              <span className="social-icon">
                📜
              </span>


              <span className="social-text">

                <strong>
                  Resume
                </strong>

                <small>
                  My Wizarding Record
                </small>

              </span>

            </a>

          </div>

        </div>

      </section>


    </div>

  );
}

export default App;