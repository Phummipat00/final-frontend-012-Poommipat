import React from 'react'
import iron from '../assets/image/FNFN.jpg'

function Review() {
    return (
        <section id="review">
            <div className="section-box-title">
                <h1 className="section-title">Customer Review</h1>
                <p className="section-sub-title">Follow instruction for more</p>
            </div>

            <div className="box-review">
                <div className="review-container">
                    <p>
                        ผลิตภัณฑ์ทำความสะอาดร่างกายของเราออกแบบมาเพื่อตอบสนองทุกความต้องการในการดูแลสุขภาพและความสะอาด ด้วยส่วนผสมจากธรรมชาติที่อ่อนโยนและปลอดภัย เหมาะสำหรับทุกสภาพผิว ไม่ว่าจะเป็นผิวแห้งหรือผิวมัน ผลิตภัณฑ์ของเราช่วยให้ผิวของคุณรู้สึกสะอาด สดชื่น และชุ่มชื้นตลอดทั้งวัน
                    </p>
                    <div className="cus-content">
                        <div className="customer-image">
                            <img src={iron} alt="" />
                        </div>
                        <div className="cus-info">
                            <h3 className="cus-name">BB</h3>
                            <p className="cus-des">Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="review-container">
                    <p>
                        ผลิตภัณฑ์ทำความสะอาดร่างกายของเราออกแบบมาเพื่อตอบสนองทุกความต้องการในการดูแลสุขภาพและความสะอาด ด้วยส่วนผสมจากธรรมชาติที่อ่อนโยนและปลอดภัย เหมาะสำหรับทุกสภาพผิว ไม่ว่าจะเป็นผิวแห้งหรือผิวมัน ผลิตภัณฑ์ของเราช่วยให้ผิวของคุณรู้สึกสะอาด สดชื่น และชุ่มชื้นตลอดทั้งวัน
                    </p>
                    <div className="cus-content">
                        <div className="customer-image">
                            <img src={iron} alt="" />
                        </div>
                        <div className="cus-info">
                            <h3 className="cus-name">BB</h3>
                            <p className="cus-des">Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="review-container">
                    <p>
                        ผลิตภัณฑ์ทำความสะอาดร่างกายของเราออกแบบมาเพื่อตอบสนองทุกความต้องการในการดูแลสุขภาพและความสะอาด ด้วยส่วนผสมจากธรรมชาติที่อ่อนโยนและปลอดภัย เหมาะสำหรับทุกสภาพผิว ไม่ว่าจะเป็นผิวแห้งหรือผิวมัน ผลิตภัณฑ์ของเราช่วยให้ผิวของคุณรู้สึกสะอาด สดชื่น และชุ่มชื้นตลอดทั้งวัน
                    </p>
                    <div className="cus-content">
                        <div className="customer-image">
                            <img src={iron} alt="" />
                        </div>
                        <div className="cus-info">
                            <h3 className="cus-name">BB</h3>
                            <p className="cus-des">Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review