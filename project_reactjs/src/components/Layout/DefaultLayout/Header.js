import React ,{ useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../DefaultLayout/Header.module.css";
import { useNavigate, Link } from "react-router-dom";
import {
  BsPersonCircle,
  BsFillCartFill,
  BsBoxArrowRight,
  BsFacebook,
  BsInstagram,
  BsFillBellFill,
  BsGlobe,
  BsQuestionCircle,
  BsGrid, 
  BsSearch
} from "react-icons/bs";
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  checkAuth,
  selectSignin,
} from "./../../../features/login/loginSlice";

const Header = () => {
  const navigate = useNavigate();
  const userLocal = localStorage.getItem("userData");
  const infoUser = JSON.parse(userLocal);
  const { totalItems } = useCart();
  const { loggedIn } = useSelector(selectSignin);
  // const { totalItems } = useCart();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handLogOut = async () => {
    try {
      await dispatch(logout());
      alert("Logout Ok");
    } catch (error) {
      console.log(error);
    }
  };
 
  // const handLogOut = () => {
  //   localStorage.removeItem("infor");

  //   navigate("/");
  //   window.location.reload();
  //   console.log("click");
  // };
  const hanDangNhap = () => {
    if (loggedIn) {
      // navigate("/");

      console.log(loggedIn);
    } else {
      window.location.reload(navigate("/login"));
    }
  };
  const hanGioHang = () => {
    if (loggedIn) {
      navigate("/my-profile");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Container fluid className={`${styles.bgHelp} text-white`}>
        <Container>
          <Row>
            <Col md="5">
              <div className="d-flex">
                <ul
                  className={`list-unstyled d-flex ${styles.fz} align-items-center`}
                >
                  <li className="me-2 text-nowrap">Kênh Người Bán</li>
                  <li className="me-2 text-nowrap">Tải Ứng dụng</li>
                  <li className="me-2 text-nowrap">
                    Kết Nối
                    <BsFacebook className="mx-2 fs-6" />
                    <BsInstagram className="fs-6" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="2" className="d-none d-lg block"></Col>
            <Col md="5">
              <div>
                <div>
                  <div>
                    <ul className={`list-unstyled d-flex  align-items-center`}>
                      <li className="me-2 text-nowrap d-none d-lg-block">
                        <BsFillBellFill className="me-1 fs-7" />
                        Thông báo
                      </li>
                      <li className="me-2 text-nowrap d-none d-md-block">
                        <BsQuestionCircle className="me-1 fs-7" />
                        Hỗ trợ
                      </li>
                      <li className="me-2 text-nowrap">
                        {" "}
                        <BsGlobe className="me-1 fs-7" />
                        Tiếng việt
                      </li>
                      <li className="pe-2 border-end text-nowrap">
                        
                        <button
                          className={`${styles.bgHelp} border-0 text-light`}
                          onClick={() => {
                            navigate("/register");
                          }}
                        >
                          {loggedIn ? "" : "Đăng ký"}
                        </button>
                      </li>
                      <li className="ps-2 text-nowrap">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className={`${styles.bgHelp} border-0 text-light `}
                          onClick={hanDangNhap}
                        >
                          {loggedIn ? (
                            <BsPersonCircle className="text-light me-1 fs-5" />
                          ) : (
                            ""
                          )}
                          {loggedIn ? infoUser.name : "Đăng Nhập"}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`modal`}
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className={`modal-content`}>
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body d-flex flex-column align-items-start ">
                        <button className="bg-body border-0" >
                          Tài Khoản của tôi
                        </button>
                        <button className="bg-body border-0" onClick={hanGioHang}>
                          Đơn Mua</button>
                      </div>
                      <div className="modal-footer d-flex justify-content-between">
                        <button
                          onClick={handLogOut}
                          className="bg-body border-0"
                        >
                          Đăng Xuất
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </Col>
            {/* <Col>
              <ul
                className={`d-flex list-unstyled justify-content-between  mb-0 md-5 ${styles.fz} text-nowrap`}
              >
                <li>Kênh Người Bán</li>
                <li>Tải ứng dụng</li>
                <li>kết nối</li>
                <li>Thông báo</li>
                <li>Hỗ trợ</li>
                <li>Tiếng việt</li>
                <ul />

                <Col />
                <Col lg="2" sm="3" xs="1">
                  <div className="d-flex justify-content-around ms-5">
                    <div className="d-flex justify-content-around mt-2 ">
                      <div className=" ">
                        <div className="d-none d-md-block ms-5  ">
                          {nameInfor ? (
                            <div>
                              <h6>{nameInfor.name}</h6>
                            </div>
                          ) : (
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="border-0 bg-body  py-1 px-2 text-nowrap mt-2 ms-5"
                              onClick={hanDangNhap}
                            >
                              Đăng nhập
                            </button>
                          )}
                        </div>
                      </div>
                      <div className=" d-flex">
                        <div className="d-none d-md-block ">
                          {nameInfor && (
                            <div>
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="border-0 bg-body  py-1 px-2 text-nowrap mt-2 ms-5"
                                onClick={handLogOut}
                              >
                                Đăng xuất
                              </button>
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="border-0 bg-body  py-1 px-2 text-nowrap mt-2 ms-5"
                                onClick={hanGioHang}
                              >
                                Quản lý đơn hàng
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles.modall} modal`}
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body text-black">
                            <div>
                              <button
                                className={`bg-body border-0 ${styles.hoverButton} mb-2`}
                              >
                                Tài khoản của tôi
                              </button>
                            </div>
                            <div>
                              <button className={`bg-body border-0  mb-2`}>
                                Đơn mua hàng
                              </button>
                            </div>
                          </div>
                          <div className={`modal-footer ${styles.logOut}`}>
                            <button
                              className="border-0 bg-body rounded-3 py-1 px-2 text-nowrap ms-2"
                              onClick={handLogOut}
                            >
                              <BsBoxArrowRight className="fs-5 fw-bold me-2" />{" "}
                              Đăng Xuất
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ul>
            </Col> */}
          </Row>
        </Container>
      </Container>

      <Container fluid className={`${styles.bg} text-white`}>
        <Container>
          <Row className={`${styles.sizeLogo} d-flex align-items-center`}>
            <Col lg="2" md="3" sm="3" xs="3" className="px-0">
              <div className="d-flex justify-content-around">
                <button
                  className={`${styles.bg} border-0`}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-products-kjm-11.png"
                    style={{ height: "61px" }}
                    alt=""
                    className="img-fluid"
                  />
                </button>
                <div className="fw-bold fs-4 d-none d-lg-block">
                  <BsGrid />
                </div>
              </div>
            </Col>

            <Col lg="8" md="6" sm="6" xs="6" className="ps-0">
              <div>
                <form>
                  <div className="d-flex">
                    <input
                      type="search"
                      className="form-control w-100 shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Tìm kiếm ..."
                    />
                    <button
                      type="submit"
                      className="btn bg-body ms-2 d-none d-md-block"
                    >
                      <BsSearch className="fs-5 fw-bold" />
                    </button>
                  </div>
                </form>
              </div>
            </Col>

            <Col lg="2" md="3 " sm="3" xs="3">
              <div className="d-flex justify-content-around ">
                <div className={` ${styles.cart}`}>
                  <button
                    className={`${styles.bg} border-0  text-light ps-0`}
                    onClick={() => {
                      navigate("/Cart");
                    }}
                  >
                    <BsFillCartFill className="fs-4 fw-bold" />
                  </button>
                  <span
                    className={`${styles.numberCart} text-center d-none d-md-block`}
                  >
                    {totalItems}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`${styles.bg}  text-white`}>
        <Container>
          <Row className="">
            <Col className="">
              <div className="d-none d-lg-block">
                <ul
                  className={`d-flex list-unstyled justify-content-around align-items-center ${styles.sizeAbout} mb-0 `}
                >
                  <li>Gì cũng rẻ</li>
                  <li>Khung giờ săn sale</li>
                  <li>Vận chuyển miễn phí</li>
                  <li>Hoàn xu</li>
                  <li>Hàng hiệu</li>
                  <li>Nạp thẻ dịch vụ</li>
                  <li>Deal Sốc từ 1K</li>
                  <li>Chọn 6 số trúng tiền triệu</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
