import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DownloadIcon from "@mui/icons-material/Download";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import FNFN from "../assets/image/FNFN.jpg";


function Home() {
    return (
        <section id="home" className="span-container">
            <div className="home-main">
                {/* column 1 */}
                <div className="home-container">
                    {/* box 1 */}
                    <div className="home-box">
                        <h1 className="title">
                            <span className="text-span">Ultimate</span> body care for a fresh and <br />
                            healthy lifestyle. <span className="text-span">Pamper</span> your skin with
                            the finest cleansers and lotions.
                        </h1>
                        <p className="sub-title">
                            ผลิตภัณฑ์ทำความสะอาดร่างกายของเราออกแบบมาเพื่อตอบสนองทุกความต้องการในการดูแลสุขภาพและความสะอาด ด้วยส่วนผสมจากธรรมชาติที่อ่อนโยนและปลอดภัย เหมาะสำหรับทุกสภาพผิว ไม่ว่าจะเป็นผิวแห้งหรือผิวมัน ผลิตภัณฑ์ของเราช่วยให้ผิวของคุณรู้สึกสะอาด สดชื่น และชุ่มชื้นตลอดทั้งวัน
                        </p>
                    </div>

                    {/* box 2 */}
                    <div className="home-box">
                        <div className="btn-con">
                            <button className="home-btn shop-btn">
                                <p>Shop Now</p>
                                <ShoppingCartIcon />
                            </button>
                            <button className="home-btn know-btn">
                                <p>Know More</p>
                            </button>
                        </div>
                        <p className="sub-title">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <ul className="ul-container ul-social">
                        <li className="list-social">
                            <a href="#">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className="list-social">
                            <a href="#">
                                <TwitterIcon />
                            </a>
                        </li>
                        <li className="list-social">
                            <a href="#">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li className="list-social">
                            <a href="#">
                                <LinkedInIcon />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* column 2 */}
                <div className="image-FNFN">
                    <img src={FNFN} alt="product" />
                </div>
            </div>

            <div className="blog-container">
                <div className="home-blog">
                    <div className="box-title">
                        <AllInboxIcon className="icon" />
                        <h3 className="home-blog-title">box</h3>
                    </div>
                    <p className="home-blog-description">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className="home-blog">
                    <div className="box-title">
                        <ListAltIcon className="icon" />
                        <h3 className="home-blog-title">box</h3>
                    </div>
                    <p className="home-blog-description">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className="home-blog">
                    <div className="box-title">
                        <DownloadIcon className="icon" />
                        <h3 className="home-blog-title">box</h3>
                    </div>
                    <p className="home-blog-description">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className="home-blog">
                    <div className="box-title">
                        <AlignHorizontalLeftIcon className="icon" />
                        <h3 className="home-blog-title">box</h3>
                    </div>
                    <p className="home-blog-description">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;
