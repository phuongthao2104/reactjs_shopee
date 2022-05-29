import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../home/HomePage.module.css";
import Header from "../../components/Layout/DefaultLayout/Header";
import { Link } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import Banner from "../../components/Banner/Banner.js";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
const axios = require("axios").default;

const pages = [1, 2, 3];

const HomePage = () => {  
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleScrol = (e) => {
      const onTop = document.getElementById("onTheTop");
      if (window.scrollY > 100) {
        onTop.classList.remove("d-none");
      } else {
        onTop.classList.add("d-none");
      }
    };
    window.addEventListener("scroll", handleScrol);
  }, []);
  const handleNextPage = (i) => {
    setPage(i + 1);

    const animation = setInterval(() => {
      document.body.scrollTop = 100;
      document.documentElement.scrollTop = 100;
      console.log("log");
      clearInterval(animation, 200);
    }, 200);
 
  };



  const onTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    axios
      .get(`http://khanh.tokyo/api/products?page=${page}&limit=18&id=2`)
      .then(function (response) {
        setProduct(response.data.data.data);

        console.log(response.data.data.data);
      })  
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [page]);
  
  // console.log(product);
  return (
    <div>
      <Header />
      <Container>
      <Row>
          <Col>
            <div className={`fixed-bottom mb-5 ${styles.widthOntop}`}>
              <button
                onClick={onTop}
                className="border-0 fs-3 shadow  mb-3 ms-3 pb-2 px-2 bg-body rounded text-danger d-none"
                id="onTheTop"
              >
                {" "}
                <BsArrowUpSquare />
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="carousel-inner mt-2 ">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="https://cf.shopee.vn/file/46ac0298c25f797c33189c6148ee8221" className="d-block  img-fluid" alt="..." />
          </div>
          
        </div>
            <div className="d-none d-md-block">
              <ul className="list-unstyled py-4 d-flex justify-content-between ">
              <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Gì cũng rẻ - <br /> Mua là Freeship
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/46a2a2c810622f314d78455da5e5d926_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Khung giờ săn <br /> sale
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Miễn phí Vận <br />
                    chuyển
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Hoàn xu 6% - <br />lên đến 200K
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Hang hiệu -50%
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/c5ce98589dfa0ee36293fc34cc6f9826_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Hàng quốc tế - <br />
                    Deal x9k
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                  Nạp thẻ & dịch <br />
                     vụ
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                  Deal Sốc 1K
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://cf.shopee.vn/file/ed849a82e8c66bbff8ec0f2869c6fbb7_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Chọn 6 số trúng<br />
                     tiền triệu
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className={`${styles.bgSP}`}>
        <Container>
          <Row>
            <Col lg="12" className="">
              <div className={`${styles.cardProduct}`}>
                {product.map((product, i) => {
                  return (
                    <Link
                      to={`product/${product.id}/${product.slug}`}
                      className={`card ${styles.cardSize} shadow text-decoration-none text-black mt-4 rounded  mx-2`}
                      key={i}
                    >
                      <img
                        src={product.avatar}
                        className={`${styles.cardImg}`}
                        alt="..."
                      />
                      <div className={`card-body p-2`}>
                        <p
                          className={`card-text ${styles.fzCardText} mt-1 mb-2`}
                        >
                          {product.name}
                        </p>
                        <h6 className="card-title">{product.price}</h6>
                      </div>
                      <div className="d-flex justify-content-between p-1">
                        <span>Hà Nội</span>
                        <span>Đã bán 100</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`d-flex justify-content-center mt-5 mb-3`}>
                {pages.map((e, i) => {
                  return (
                    <button
                      className="border-0 shadow  mb-3 ms-3 pb-2 px-2 bg-body rounded mx-3"
                      key={i}
                      onClick={() => {
                        handleNextPage(i);
                      }}
                    >
                      {e}
                    </button>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col>
            <div className={`fixed-bottom mb-5 ${styles.widthOntop}`}>
              <button
                onClick={onTop}
                className="border-0 fs-3 shadow  mb-3 ms-3 pb-2 px-2 bg-body rounded text-danger d-none"
                id="onTheTop"
              >
                {" "}
                <BsArrowUpSquare />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
