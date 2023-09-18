/* eslint-disable react/prop-types */
import './DesktopHeader.css'
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'

function DesktopHeader({ setStep }) {
  return (
    <header id="container-header">
      <div id="icon-header">
        <img src={logo} alt="logo" />
      </div>
      <div id="bar-spacing"></div>
      <div id="nav-bar">
        <div id="sort-bar"></div>
        <div id="wrapper-nav-bar">
          <Link
            to={'/'}
            className="text-nav-bar"
            onClick={() => setStep('container')}
          >
            <span>00</span>
            <h6>Home</h6>
          </Link>
          <Link
            to={'/destination'}
            onClick={() => setStep('container-destination')}
            className="text-nav-bar"
          >
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
