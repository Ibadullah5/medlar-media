import './Home.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>

      <div className='home-maindiv'>
        <h1 className='home__heading'>MEDIA<br /> MEDLAR</h1>
        <div className='home-maindiv-secondarydiv'>
          <h2 className='home__heading-small'>EAST PAKISTAN</h2>
          <p className='home__heading-paragraph'>
            Giving your talent a medium and a voice
            to reach the maximum potential
          </p>
          <button className='home__btn'><NavLink className='navlinks-btn' to='/influencers'>
            See Influencers
          </NavLink></button>
        </div>
      </div>

      <div className='home-footer'>
        <p>FOR GENERAL INQUIRIES  03240803628</p>
        <p> © 2021 by Medlar Media</p>
      </div>
    </div>
  )
}

export default Home