import {
  Phone,
  MapPin,
  Clock,
  Star,
  Wrench,
  Car,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Main = () => {
  return (
    <div className="container marketing">
      {/* <!-- Three columns of text below the carousel --> */}
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://www.drewmotive.com/auto-repair/images/antique-auto-repair-4.jpg"
            alt="Antique Auto Repair"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            style={{ objectFit: "cover" }}
          />

          <h2>Service 1</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src="https://www.drewmotive.com/auto-repair/images/antique-auto-repair-4.jpg"
            alt="Antique Auto Repair"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            style={{ objectFit: "cover" }}
          />

          <h2>Service 2</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src="https://www.drewmotive.com/auto-repair/images/antique-auto-repair-4.jpg"
            alt="Antique Auto Repair"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            style={{ objectFit: "cover" }}
          />

          <h2>Service 3</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}

      {/* <!-- START THE FEATURETTES --> */}

      {/* <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            First featurette heading.{" "}
            <span className="text-muted">It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div> */}

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.{" "}
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src="https://www.drewmotive.com/auto-repair/images/antique-auto-repair-4.jpg"
            alt="Antique Auto Repair"
            className="featurette-image img-fluid mx-auto rounded"
            width="500"
            height="500"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            And lastly, this one. <span className="text-muted">Checkmate.</span>
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div> */}

      <hr className="featurette-divider" />

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Why Choose Karim Ltd?</h2>
              <p className="lead mb-4">
                With over 25 years of experience serving the UK automotive
                community, we pride ourselves on honest, reliable service at
                competitive prices.
              </p>

              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <Award className="text-primary me-3" size={32} />
                    <div>
                      <h6 className="mb-1 text-danger">
                        Certified Technicians
                      </h6>
                      <small className="text-muted">
                        IMI qualified mechanics
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <Shield className="text-success me-3" size={32} />
                    <div>
                      <h6 className="mb-1 text-danger">12 Month Warranty</h6>
                      <small className="text-danger">
                        On all repairs & parts
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-primary rounded p-4 text-white text-center">
                <Car size={120} className="text-warning mb-3 opacity-75" />
                <h4 className="mb-3">Get Your Free Quote Today</h4>
                <p className="mb-4">
                  No obligation estimates for all repairs and services
                </p>
                <button className="btn btn-warning btn-lg">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- /END THE FEATURETTES --> */}
    </div>
  );
};

export default Main;
