import evolveIcon from '../assets/evolve-litho-e.jpg'

const Services = () => {
  return (
    <div name="services" className="w-full min-h-screen text-white">
    <div className="flex flex-col justify-center items-center w-full min-h-screen pb-2">
      <div className="font-bold border-b-2 text-4xl md:text-5xl inline">
        <p>Services</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-4 max-w-[1000px] text-center pt-12">
          <div className="p-4">
          <img className='m-auto' src={evolveIcon} alt="Icon of evolve logo" width={80}/>
            <p className="p-4 text-4xl font-bold">Litho Printing</p>
            <p className="text-xl md:text-2xl">With a single colour Lithographic Printer we provide high quality prints for your company branding.</p>
          </div>
          <div className="p-4">
            <img className='m-auto' src={evolveIcon} alt="Icon of evolve logo" width={80}/>
            <p className="p-4 text-4xl font-bold">Digital Printing</p>
            <p className="text-xl md:text-2xl">We house a state of the art Konica Minolta c2060 providing us with beautiful variety of products from leaflets to company branding.</p>
          </div>
          <div className="p-4">
          <img className='m-auto' src={evolveIcon} alt="Icon of evolve logo" width={80}/>
            <p className="p-4 text-4xl font-bold">Print Design</p>
            <p className="text-xl md:text-2xl">We can create the perfect artwork to help boost your company image.</p>
          </div>
        </div>
    </div>
  </div>
);
};

export default Services