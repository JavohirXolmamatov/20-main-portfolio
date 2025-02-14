function Home() {
  const DownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/resume.pdf"; // `public` papkasidagi faylga to‘g‘ri yo‘l
    link.download = "MyResume.pdf"; // Yuklab olinadigan fayl nomi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home-section" id="home" style={{ height: "92.2vh" }}>
      <div className="container">
        <div className="home-body">
          <h1 className="fw-semibold mb-4 mt-3">I AM JAVOHIR XOLMAMATOV</h1>
          <p className="mb-4 fs-5">
            I'm a web developer who loves bringing innovative ideas to life.{" "}
            <br />
            I'm always eager to learn new technologies and <br />
            continuously work on improving my skills.
          </p>
          <div className="button">
            <br />
            <button id="download-btn" className="btn1" onClick={DownloadResume}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
