import './DesktopHeader.css'
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'

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
          <Link className="text-nav-bar">
            <span>00</span>
            <h6>Home</h6>
          </Link>
          <Link className="text-nav-bar">
            <span>01</span>
            <h6>Destination</h6>
          </Link>
          <Link className="text-nav-bar">
            <span>02</span>
            <h6>Crew</h6>
          </Link>
          <Link className="text-nav-bar">
            <span>03</span>
            <h6>Technology</h6>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader
