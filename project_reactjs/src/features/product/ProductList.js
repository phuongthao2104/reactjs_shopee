import React, { useEffect, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./../../pages/home/HomePage.module.css";
import Header from "../../components/Layout/DefaultLayout/Header";
import { Link } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import ReactLoading from "react-loading";
import { getListProduct, selectProduct } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";


const ProductList = () => {
  const pages = [1, 2, 3];
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { loading, data } = useSelector(selectProduct);

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

    const animation = setInterval(() => {
      document.body.scrollTop = 100;
      document.documentElement.scrollTop = 100;
      console.log("log");
      clearInterval(animation, 200);
    }, 200);
    setPage(i + 1);

  };

  const onTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };


  const getProductAll = useCallback(async () => {
    // console.log("ok");
    try {
      await dispatch(getListProduct());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getProductAll();
  }, [dispatch, getProductAll]);
  const renderProduct = () => {
    if (data.length) {
      return data.map((product, index) => {

        return (
          <Link to={`product/${product.id}/${product.slug}`}
            className={`card ${styles.cardSize} shadow text-decoration-none text-black mt-4 rounded  mx-2`}
            key={index}
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
            </div>
            <div className="d-flex justify-content-between p-1">
              <div className="d-flex">
                <h5 className="card-title text-danger">
                  {product.price.toLocaleString()}.đ
                </h5>
              </div>
              <span>Đã bán 100</span>
            </div>
          </Link>
        );
      });
    }
  };
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
          <Col className="px-0">
            <div className="carosel mt-2 mt-sm-4">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded-3">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img
                      src="https://cf.shopee.vn/file/f7c4c88ab9c89e512927be1b925e827a"
                      className={`d-block w-100 img-fluid ${styles.widthCarosel}`}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://cf.shopee.vn/file/c1cd7af08f6f88885fe448bf3b972541"
                      className={`d-block w-100 img-fluid ${styles.widthCarosel}`}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cf.shopee.vn/file/536fa18c60608050fd55da69d43bcd98"
                      className={`d-block w-100 img-fluid ${styles.widthCarosel}`}
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="d-none d-md-block">
              <ul className="list-unstyled py-4 d-flex justify-content-between ">
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Gì cũng rẻ - <br /> Mua là Freeship
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/46a2a2c810622f314d78455da5e5d926_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Khung giờ săn <br /> sale
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Miễn phí Vận <br />
                    chuyển
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Hoàn xu 6% - <br />
                    lên đến 200K
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Hang hiệu -50%
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/c5ce98589dfa0ee36293fc34cc6f9826_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Hàng quốc tế - <br />
                    Deal x9k
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Nạp thẻ & dịch <br />
                    vụ
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Deal Sốc 1K
                  </span>
                </li>
                <li
                  className={`d-flex flex-column align-items-center justify-content-start ${styles.widthDanhMuc}`}
                >
                  <img
                    src="https://cf.shopee.vn/file/ed849a82e8c66bbff8ec0f2869c6fbb7_xhdpi"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span
                    className={`text-center mt-2 ${styles.fz} ${styles.danhMuc}`}
                  >
                    Chọn 6 số trúng
                    <br />
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
                <div className="d-flex flex-wrap "> {renderProduct()}</div>

              </div>
            </Col>
          </Row>
        </Container>
      </Container>
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
      <Footer />
      {/* )}*/}
    </div>
  );
};

export default ProductList;