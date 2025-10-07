const PHONE = import.meta.env.VITE_PHONE_NUMBER;

const ButtonOutlineLightCallNow = () => {
  return (
    <button
      className="btn btn-warning btn-lg px-4"
      onClick={() => {
        window.location.href = "tel:" + PHONE;
      }}
    >
      Call Now
    </button>
  );
};

export default ButtonOutlineLightCallNow;
