const element = (
  <div className="congrats-bg">
    <h1>Congratulations</h1>
    <div className="congrats-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="name"
        className="profile-image"
      />
      <h1 className="title">Kiran V</h1>
      <p className="place">
        Vishnu institute of computer Education and Technology, Bheemavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="name"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
