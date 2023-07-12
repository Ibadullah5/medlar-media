import './SocialMedia.css'
import { facebook, instagram, message } from '../../assets'


const SocialMedia = () => {
  return (
    <div className='socialmedia'>
      <img className='facebook-img' src={facebook} />
      <img className='instagram-img' src={instagram} />
      <div className='message-wrapper'>
        <img src={message} />
      </div>
    </div>
  )
}

export default SocialMedia