// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo"
          alt="website logo"
        />
      </div>
      <div>
        <ul className="list-container">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/product">Products</Link>
          </li>
          <li className="list-item">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="list-item">
            <Link to="/logout">
              <button type="button" className="logout-button">
                LogOut
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
export default Header
