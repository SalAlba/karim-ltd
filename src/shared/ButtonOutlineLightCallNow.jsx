const ButtonOutlineLightCallNow = () => {
  return (
    <button
      className="btn btn-outline-light btn-lg px-4"
      onClick={() => {
        window.location.href = "tel:+447450446551";
      }}
    >
      Call Now
    </button>
  );
};

export default ButtonOutlineLightCallNow;
