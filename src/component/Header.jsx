import { Phone } from "lucide-react";
import { formatPhoneNumberUKWithCountryCode } from "./../helpers/formatPhoneNumberUK";

const PHONE = import.meta.env.VITE_PHONE;

const Header = () => {
  const callUs = () => {
    window.location.href = "tel:" + PHONE;
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/karim-ltd/">
            Karim Liverpool Ltd
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/karim-ltd/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/karim-ltd/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/karim-ltd/">
                  About
                </a>
              </li>
            </ul>
            <button
              className="btn btn btn-warning btn-lg px-4"
              onClick={callUs}
            >
              <Phone className="text-black" size={32} />
              <span>{formatPhoneNumberUKWithCountryCode(PHONE)}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
