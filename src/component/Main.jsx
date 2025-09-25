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
  const onAccidentManagement = () => {
    alert("Accident Management Clicked");
  };

  return (
    <div className="container marketing">
      {/* <!-- Three columns of text below the carousel --> */}
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://production-content-assets.ratecity.com.au/20221213/car-crash-4MFvEQmEB.jpg"
            alt="Antique Auto Repair"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            style={{ objectFit: "cover" }}
          />

          <h2>Accident Management</h2>
          <p>
            We handle the entire process after an accident, from recovery and
            repairs to dealing with insurers and providing courtesy vehicles.
            Let us take the stress out of getting you back on the road.
          </p>
          <p>
            <button className="btn btn-warning" onClick={onAccidentManagement}>
              Give details here
            </button>
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

          <h2>Bodywork</h2>
          <p>
            Our body shop has many years of experience in repair and
            customisation. We can accommodate any repair or customisation
            requests you may have. We request you come in and have a chat with
            us with no commitment needed, we are happy to help!
          </p>
          {/* <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
            </a>
          </p> */}
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src="https://resources.servicemycar.com/upimages/blogs/Full-Car-Servicing-at-Service-My-Car-20231011123729.webp"
            alt="Antique Auto Repair"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            style={{ objectFit: "cover" }}
          />

          <h2>Basic service</h2>
          <p>
            Our basic service includes oil and filter change, fluid top-ups, and
            a comprehensive vehicle health check to keep your car running
            smoothly and reliably.
          </p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
      {/* <!-- START THE FEATURETTES --> */}

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Accident <span className="text-muted">Management</span>
          </h2>
          <p className="lead">
            We handle the entire process after an accident, from recovery and
            repairs to dealing with insurers and providing courtesy vehicles.
            Let us take the stress out of getting you back on the road.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src="https://purecoinsurance.co.uk/wp-content/uploads/2017/07/Acident-Managment.jpg"
            alt="Antique Auto Repair"
            className="featurette-image img-fluid mx-auto rounded"
            width="500"
            height="500"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <hr className="featurette-divider" />

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
                <button className="btn btn-warning btn-lg" disabled>
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
