import './DesktopHeader.css'
import logo from '../../assets/shared/logo.svg'
function DesktopHeader() {
  return (
    <header id="container-header">
      <div id="icon-header">
        <img src={logo} alt="logo" />
      </div>
      <div id="bar-spacing"></div>
      <div id="nav-bar">
        <div id="sort-bar"></div>
        <div id="wrapper-nav-bar">
          <div className="text-nav-bar">
            <span>01</span>
            <h6>Home</h6>
          </div>
          <div className="text-nav-bar">
            <span>02</span>
            <h6>Destination</h6>
          </div>

          <div className="text-nav-bar">
            <span>01</span>
            <h6>Crew</h6>
          </div>
          <div className="text-nav-bar">
            <span>01</span>
            <h6>Technology</h6>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader
