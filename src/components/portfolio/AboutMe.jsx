function AboutMe() {
  return (
    <div className="container h-100">
      <div className=" aboutme container h-100 m-0 p-0">
        <div className="d-flex row align-items-center w-100 h-100 m-0 p-0 justify-content-center">
          <div className="col-lg-5 p-0 m-0">
            <img src="#" alt="#" />
          </div>
          <div className="col-lg-7 p-0 m-0">
            <h3 className="mb-4 fw-bold">
              I'm Javohir Xolmamatov and{" "}
              <span className="text-danger">Developer</span>
            </h3>
            <p className="mb-4 lh-lg fw-semibold ">
              Hi! My name is{" "}
              <span className="text-danger">Javohir Xolmamatov</span>. I am a
              Web developer, and I'm very passionate and dedicated to my work. I
              have acquired the skills and knowledge neseccary to make your
              project a success.
            </p>
            <div className="row fw-bold h-100 w-100 m-0 p-0 ">
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-gift text-danger"></i> Birthday:{" "}
                <span className="text-body-secondary">02.03.2002</span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-calendar-date text-danger"></i> {""}
                Age: <span className="text-body-secondary">22</span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-geo-alt text-danger"></i> {""}
                Location:{" "}
                <span className="text-body-secondary">
                  Qashqadaryo, Qamashi, Chim
                </span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-controller text-danger"></i> {""}
                Interests:{" "}
                <span className="text-body-secondary">
                  Football, Reading, Chess
                </span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-bank text-danger"></i> {""}
                Study:{" "}
                <span className="text-body-secondary">
                  Tashkent university of information technologies
                </span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-mortarboard text-danger"></i> {""}
                Degree: <span className="text-body-secondary">Bachelor</span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-envelope text-danger"></i> {""}
                Mail:{" "}
                <span className="text-body-secondary">
                  xolmamatovjavohir390@gmail.com
                </span>
              </p>
              <p className="col-xs-6 col-sm-6 p-0 pb-3 m-0">
                <i className="bi bi-phone text-danger"></i> {""}
                Phone:{" "}
                <span className="text-body-secondary">+99894 988 04 77</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
