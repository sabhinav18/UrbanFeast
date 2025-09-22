import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='-mt-8 flex justify-between items-center py-[8px] px-[4%] '>
        <img className='w-[max(10%,80px)] ' src={assets.logoo} alt="" />
        <img className='w-10' src={assets.profile_image} alt="" />
        
    </div>
    
  )
}

export default Navbar