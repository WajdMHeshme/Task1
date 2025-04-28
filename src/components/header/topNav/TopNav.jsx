
import './TopNav.css'
const TopNav = ({text , icon}) => {
  return (
    <div className='topNav'>
        <img className='leftPhoto' src = "/assets/Abstract Design (2).png" alt="left" />
        <img className='rightPhoto' src="/assets/Abstract Design (3).png" alt="right" />
        <p>{text}</p>
        <span>{icon}</span>
        <img className='left' src="/assets/Abstract Design.png" alt="" />
        <img className='right' src="/assets/Abstract Design.png" alt="" />
    </div>
  )
}

export default TopNav