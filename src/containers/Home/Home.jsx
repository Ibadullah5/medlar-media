import './Home.css'
import { facebook, instagram, message } from '../../assets'

const Home = () => {
  return (
    <div className='home'>
      <img className='facebook-img' src={facebook} />
      <img className='instagram-img' src={instagram} />
      <div className='message-wrapper'>
        <img src={message} />
      </div>
      <div className='home-maindiv'>
        <h1 className='home__heading'>MEDIA<br /> MEDLAR</h1>
        <div className='home-maindiv-secondarydiv'>
          <h2 className='home__heading-small'>PAKISTAN</h2>
          <p className='home__heading-paragraph'>
            Giving your talent a medium and a voice
            to reach the maximum potential
          </p>
          <button className='home__btn'>See Influencers</button>
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