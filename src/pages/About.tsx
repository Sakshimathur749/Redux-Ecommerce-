import React from 'react'
import team1 from '../Components/Asserts/team.jpg'
import team2 from '../Components/Asserts/team2img.jpg'
const About = () => {
  return (
    <div className='m-10'>
    <div className='font-semibold text-center text-5xl underline italic p-3 mx-80'><h1>About</h1><hr /></div>
    <div className=" p-4 justify-center text-center px-64  font-bold italic text-xl  ">
        An exclusive connection to Italian artisans for more meaningful buying.
        Menswear and accessories crafted for you in numerous colours and refined materials
    </div>
    <div className=" p-4">
        <div className=" font-medium text-center text-base p-3">
            <h3 className='font-bold text-lg'>Who We Are</h3>
            <span>
                An exclusive connection to Italian artisans for more meaningful buying.
                Menswear and accessories crafted for you in numerous colours and refined materials.
                Who We Are

                Starting in 2014 out of our family workshop in Como, Italy; we have teamed up with 8 fellow Italian artigiani or craftsmen, all very eager to showcase their artisanal heritage and quintessential designs. (read more on Our Artisans)

                From hand-hemmed tips to hand-stitched shoulders, our artisans craft all 40 Colori garments and accessories according to the highest quality standards to create hard-wearing everyday pieces for a timeless casual elegance.

                To make this happen, we provide them with the canvas to turn into their next creation. We travel around Italy, visiting mills and merchants to find the best fabrics and yarns, making sure they are natural, colourful and responsibly sourced. (read more on Our Materials)
            </span>
        </div>
        <div className=" font-medium text-center text-base p-3">
            <h3 className='font-bold text-lg'>How We Work</h3>
            <span>
                We opted for a direct-to-artisan distribution model focused on made-to-order and custom services to ensure that we produce as much as possible what is needed exactly as needed by the final customer, with less compromises and wasteful use of resources. All with honest pricing, because more meaningful buying should not be a luxury. (read more on Our Approach and Ethical Quality)

                Shop now our core collection of timeless designs that we truly love. Our core collection is rarely available immediately and always available on demand. Anything not in stock, you can have it Made to Order and our artisans will craft any sold out size or style exclusively for you in 3-6 weeks. (read more on Made to Order)

                If you are feeling creative or if you can't find the style or fit that you are looking for, our custom offer is the answer. With our Custom Made and Made to Measure services, you can customize our designs and have our artisans craft each garment or accessory exactly as you want, to your perfection, with no compromise on style or fit! Visit us in our Bloomsbury store to enjoy the full 40 Colori experience! Alternatively, book an online consultation to get started with your custom project. (read more on Custom Made) (read more on Made to Measure)</span>
        </div>
    </div>
    <div className="flex gap-4 p-5">
        <img src={team1} alt="" width="900px" />
        <img src={team2} alt="" />
    </div>
</div>
  )
}

export default About