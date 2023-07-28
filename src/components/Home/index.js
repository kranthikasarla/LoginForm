// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div>
          <Header />
        </div>
        <div className="home-container">
          <div className="container">
            <h1 className="heading">Clothes That get you noticed</h1>
            <p className="description">
              Fashion is part of the daily air and it does not quit help that it
              changes all the time. clothes have always been a amrker of the era
              and we are in a revolution. your fashion makes you been seen and
              heard that way you are So, celebrates the seasons new and exciting
              fashion in your own way.
            </p>
            <button type="button" className="shop-button">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              className="home-image"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
