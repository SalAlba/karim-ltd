const ButtonWarningBookService = () => {
  return (
    <button
      className="btn btn-warning btn-lg px-4"
      onClick={() => alert("Book Service clicked")}
    >
      Book Service
    </button>
  );
};

export default ButtonWarningBookService;
