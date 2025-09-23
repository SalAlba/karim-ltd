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

const Contact = () => {
  const bookService = () => {
    alert("Redirecting to booking page...");
  };

  const findLocations = () => {
    alert("Finding nearest locations...");
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="lead mb-5">
              Ready to book your service or need emergency assistance?
            </p>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <Phone className="text-warning mb-3" size={48} />
                  <h5>Call Us</h5>
                  <p className="mb-0">+44 7450 446551</p>
                  <small className="text-muted">24/7 Emergency Line</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <MapPin className="text-warning mb-3" size={48} />
                  <h5>Visit Us</h5>
                  <p className="mb-0">
                    123 High Street
                    <br />
                    Birmingham B1 1AA
                  </p>
                  <small className="text-muted">Multiple locations</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <Clock className="text-warning mb-3" size={48} />
                  <h5>Opening Hours</h5>
                  <p className="mb-0">
                    Mon-Fri: 8AM-6PM
                    <br />
                    Sat: 8AM-4PM
                  </p>
                  <small className="text-muted">Sunday: Emergency only</small>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button
                className="btn btn-warning btn-lg me-3"
                onClick={bookService}
              >
                Book Service Online
              </button>
              <button
                className="btn btn-outline-light btn-lg"
                onClick={findLocations}
              >
                Find Locations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
