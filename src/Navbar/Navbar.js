import "./navbar.css"

export const NavBar = () => {


    return (
        <>
       <div className="nav-main-div">
          <div className="left-side-div">
          <i class="fab fa-youtube"> Neog<span> Tube</span></i>
          </div>

          <div className="middle-div">
              <input placeholder="Search">
              </input>
              <button className="input-search-btn">
              <i class="fas fa-search"></i>
              </button>
              <i class="fas fa-microphone"></i>
          </div>

          <div className="right-side-div">
          <i class="fas fa-th"></i>
          <i class="fas fa-user-alt"> Sign in</i>
          </div>
       </div>
        </>
    )
}