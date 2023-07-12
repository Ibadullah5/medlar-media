import './Influencers.css'
import {
  warisha, syed, aashir, areeba, jiya, maimoona, mustafa, nazeeha, reeja, roha
}
  from '../../assets'

const Influencers = () => {
  return (
    <div className='influencers'>

      <h1 className='influencers__heading'>INFLUENCERS</h1>

      <div className='influencers__grid'>
        <div className='influencers__img'>
          <img src={aashir} />
        </div><div className='influencers__name'>
          <p className='paragraph'>AASHIR WAJAHAT</p>
        </div>


        <div className='influencers__img'>
          <img src={areeba} />
        </div>
        <div className='influencers__name'>
          <p className='paragraph'>AREEBA NADEEM</p>
        </div>


        <div className='influencers__name'>
          <p className='paragraph'>JIYA KHURRAM</p>
        </div>
        <div className='influencers__img'>
          <img src={jiya} />
        </div>


        <div className='influencers__name'>
          <p className='paragraph'>MAIMOONA SHAH</p>
        </div>
        <div className='influencers__img'>
          <img src={maimoona} />
        </div>


        <div className='influencers__img'>
          <img src={mustafa} />
        </div>
        <div className='influencers__name'>
          <p className='paragraph'>MUSTAFA BABER</p>
        </div>


        <div className='influencers__img'>
          <img src={nazeeha} />
        </div>
        <div className='influencers__name'>
          <p className='paragraph'>NAZEEHA</p>
        </div>


        <div className='influencers__name'>
          <p className='paragraph'>REEJA JEELANI</p>
        </div>
        <div className='influencers__img'>
          <img src={reeja} />
        </div>


        <div className='influencers__name'>
          <p className='paragraph'>ROHA NADEEM</p>
        </div>
        <div className='influencers__img'>
          <img src={roha} />
        </div>


        <div className='influencers__img'>
          <img src={syed} />
        </div>
        <div className='influencers__name'>
          <p className='paragraph'>SYED ABDULA</p>
        </div>


        <div className='influencers__img'>
          <img src={warisha} />
        </div>
        <div className='influencers__name'>
          <p className='paragraph'>WARISHA JAVED KHAN</p>
        </div>
      </div>

      <div className='influencers-footer'>
        <p>FOR GENERAL INQUIRIES  03240803628</p>
        <p> © 2021 by Medlar Media</p>
      </div>
    </div>
  )
}

export default Influencers