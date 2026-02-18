export default function Contact() {
  return (
    <section>
      <h1>How to contact me</h1>

      <p>
        If you would like to discuss an internship or an apprenticeship opportunity, <br></br>
        feel free to contact me using the details below.
      </p>

      <ul className="contact-list">
        <li>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:juskowiakquentin@gmail.com">
            juskowiakquentin@gmail.com
          </a>
        </li>

        <li>
          <i className="fa-brands fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/quentin-juskowiak-589a5a293/"
            target="_blank"
            rel="noreferrer"
          >
            Quentin Juskowiak
          </a>
        </li>

        <li>
          <i className="fa-brands fa-github"></i>
          <a
            href="https://github.com/QuentinoDelFuego"
            target="_blank"
            rel="noreferrer"
          >
            QuentinoDelFuego
          </a>
        </li>

        <li>
          <i className="fa-solid fa-location-dot"></i>
          <span>Lille, France</span>
        </li>

        <li>
          <i className="fa-solid fa-car"></i>
          <span>Driving license and personal vehicle</span>
        </li>
      </ul>

      <p style={{ marginTop: "20px" }}>
        <a href="/cvQuentinJuskowiak.pdf" download>
          <i className="fa-solid fa-file-arrow-down"></i> Download my CV (PDF)
        </a>
      </p>
    </section>
  );
}