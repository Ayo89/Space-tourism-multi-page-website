import { Outlet } from 'react-router-dom';
import DesktopHeader from '../Pages/DesktopHeader/DesktopHeader';
import './index.css';
function Root() {
  return (
    <div id='container'>
    <DesktopHeader/>
    <Outlet />
    </div>
  )
}

export default Root