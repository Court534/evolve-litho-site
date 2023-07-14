import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="font-bold border-b-2 text-4xl inline">
          <p>About us</p>
        </div>
        <div className="flex flex-row max-w-[1000px] justify-center items-center">
          <div>
            <i className="p-4 text-5xl font-semibold font-">
              OVER 25 YEARS OF EXPERIENCE IN THE DIGITAL & LITHO PRINT INDUSTRY
            </i>
          </div>
          <div className="p-4 pt-20 text-2xl">
            <p>
              Located in West Swindon’s Rivermead Business Centre, Evolve Litho
              are able produce a variety of printing ranging from leaflets to
              NCR pads. Over the years we have been able to provide products for
              customers in all different types of industries from estate agents
              to personal trainers.
            </p>
            <br />
            <p>
              In our unit we house a variety of different machinery enabling us
              to provide top of the range print products. We are able to design,
              print & finish whatever our customers desire. We can produce small
              quantities to large quantities in all different sizes, whether
              that is a small 55 mm x 85 mm Business Card or a A4 finished
              Magazine.
            </p>
            <br />
            <p>
              We aspire to develop only the best relationship we can with all of
              our customers whether they are a small business or the largest
              company in the world. 
            </p>
            <br />
            <p>
              We hope to evolve your brand in every way possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
