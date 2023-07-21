import { HiOutlineMail, HiPhone, HiHome } from "react-icons/hi"

const Footer = () => {
  return (
    <div className='text-white bg-black'>
      {/* Container */}
      <div className='flex justify-between items-center sm:px-12 px-4 bg-black py-7'>
        <div className='grid gap-10 justify-center items-center text-center'>
          <span>© 2023 All rights reserved</span>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          <a className='hover:text-gray-400 hover:scale-110' href="https://www.google.com/maps/place/Evolve+Litho/@51.5700493,-1.826182,15z/data=!4m6!3m5!1s0x487144ee2d16a165:0x30554c17aed44495!8m2!3d51.5700493!4d-1.826182!16s%2Fg%2F1tfp1xj0?entry=ttu" target="_blank" rel="noreferrer"><HiHome size={30}/></a>
          <a className='hover:text-gray-400 hover:scale-110' href="tel:01793692012" rel="noreferrer"><HiPhone size={30}/></a>
          <a className= 'hover:text-gray-400 hover:scale-110' href="mailto:info@evolvelitho.co.uk" rel="noreferrer"><HiOutlineMail size={31} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer