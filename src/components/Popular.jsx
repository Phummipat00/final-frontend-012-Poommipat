import React from 'react'
import FNFN from '../assets/image/FNFN.jpg'
import { IoStar, IoStarHalf, IoStarOutline, IoCartOutline } from "react-icons/io5";


function Popular() {
  return (
    <section id='popular' className="">
      <div className="section-box-title">
        <h1 className="section-title">Your Choice Plant</h1>
        <p className="section-sub-title">Follow instruction for more</p>
      </div>

      <div className="card-group">
        <div className="card">
          <div className="card-image">
            <img src={FNFN} alt="" />
          </div>

          <div className="card-content">
            <p className="card-sub-title">Lorem ipsum dolor sit.</p>
            <h2 className="card-title">FNFN</h2>
            <div className="star">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
              <IoStarOutline />
            </div>
          </div>

          <div className="card-footer">
            <h2>15$</h2>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={FNFN} alt="" />
          </div>

          <div className="card-content">
            <p className="card-sub-title">Lorem ipsum dolor sit.</p>
            <h2 className="card-title">FNFN</h2>
            <div className="star">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
              <IoStarOutline />
            </div>
          </div>

          <div className="card-footer">
            <h2>15$</h2>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={FNFN} alt="" />
          </div>

          <div className="card-content">
            <p className="card-sub-title">Lorem ipsum dolor sit.</p>
            <h2 className="card-title">FNFN</h2>
            <div className="star">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
              <IoStarOutline />
            </div>
          </div>

          <div className="card-footer">
            <h2>15$</h2>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={FNFN} alt="" />
          </div>

          <div className="card-content">
            <p className="card-sub-title">Lorem ipsum dolor sit.</p>
            <h2 className="card-title">FNFN</h2>
            <div className="star">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
              <IoStarOutline />
            </div>
          </div>

          <div className="card-footer">
            <h2>15$</h2>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular