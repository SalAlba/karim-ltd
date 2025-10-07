const COMPANY_NUMBER = import.meta.env.VITE_COMPANY_NUMBER;

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container">
        {/*  */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Karim Liverpool Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <small>
              Registered in England & Wales | VAT Reg: GB
              {COMPANY_NUMBER}
            </small>
          </div>
        </div>

        {/*  */}
        <div className="row">
          <div className="col-md-12">
            <p className="float-end">
              <a href="#" className="text-white">
                Back to top
              </a>
            </p>
            <p>
              <a className="text-white" href="#">
                Privacy
              </a>{" "}
              &middot;{" "}
              <a className="text-white" href="#">
                Terms
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
