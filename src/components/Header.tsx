const Header = () => {
  return (
    <header className="bg-primary d-sm-flex justify-content-between align-items-center text-white text-center py-2 px-5">
  <h1>
    <i className="fa-solid fa-utensils" /> Tracalorie
  </h1>
  <div>
    <button
      className="btn btn-outline-light mx-3"
      data-bs-toggle="modal"
      data-bs-target="#limit-modal"
    >
      Set Daily Limit
    </button>
    <button id="reset" className="btn btn-outline-light">
      Reset Day
    </button>
  </div>
</header>

  )
}

export default Header