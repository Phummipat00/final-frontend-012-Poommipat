import React from 'react'
import iron from '../assets/image/FNFN.jpg'

function About() {
  return (
    <section id='about' className="section-about">
      <div className="section-box-title">
        <h1 className="section-title">About Us</h1>
        <p className="section-sub-title">Follow instruction for more</p>
      </div>

      <div className="about-blog">
        <div className="about-image">
          <img src={iron} alt="" />
        </div>
        <div className="about-content">
          <h2>Lorem ipsum <span className='text-span'>dolor sit.</span></h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            similique, dolore mollitia blanditiis, ipsa voluptatibus aut iure
            perspiciatis dolorum a ipsum corrupti quo ratione dignissimos
            provident. Incidunt iste odio porro.
          </p>
        </div>
        <div className="about-content">
          <h2>Lorem ipsum <span className='text-span'>dolor sit.</span></h2>
          <p>
          Our premium body care products offer the perfect blend of cleansing and 
  nourishment. Whether you're looking for a gentle body wash or a refreshing lotion, 
  we have a range of solutions to pamper your skin, leaving it soft, smooth, and healthy.
          </p>
        </div>
        <div className="about-image">
          <img src={iron} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About