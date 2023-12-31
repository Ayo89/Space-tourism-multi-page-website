import { useContext } from 'react'
import './DesktopHome.css'
import {Link} from 'react-router-dom'
import { StepContext } from '../../context/theme'
function DesktopHome() {
  const {
    setStep
  } = useContext(StepContext)
  return (
    <div id="container-home">
      <div id="wrapper-text">
        <div id="main-text">
          <h1>
            So, you want to travel to <br />
            <span>Space</span>
          </h1>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!{' '}
          </p>
        </div>
      </div>

      <div id="container-large-button">
        <Link to={'/destination'} id="wrapper-button" onClick={() => setStep('container-destination')}>
          <p>Explore</p>
        </Link>
      </div>
    </div>
  )
}

export default DesktopHome
