export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {year} Quentin Juskowiak — Built with React</p>

      <nav style={styles.nav}>
        <a
          href="https://github.com/QuentinoDelFuego"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          My GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/quentin-juskowiak-589a5a293/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          My LinkedIn
        </a>
        <a href="/cvQuentinJuskowiak.pdf" target="_blank" rel="noreferrer" style={styles.link}>
          CV (PDF)
        </a>
      </nav>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 40,
    padding: "16px 20px",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
  },
};