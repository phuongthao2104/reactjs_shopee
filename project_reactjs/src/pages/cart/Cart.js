import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Header from "../../components/Layout/DefaultLayout/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../../App.css";
import styles from "../cart/Cart.module.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  
  BsJournalBookmark,
  BsChevronRight,
  BsHeart,
  BsFillTrashFill,
} from "react-icons/bs";

const Cart = () => {
  const [check, setCheck] = useState(true);
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart, } = useCart();
  console.log(items);
  
  const total = items.map((e) => {});

  const handleOnChange = (e) => {
    console.log(e.quantity);
    if (check === true) {
      console.log("ok");
      setCheck(false);
    } else {
      setCheck(true);
      console.log("no ok");
    }
  };
  return (
    <div>
      <Header />
      <Container fluid className={`${styles.bg}`}>
        <Container>
          <Row>
            <Col>
              <div className=" my-3 d-flex align-items-center">
                <h5>SHOPEE|GIỎ HÀNG ({totalItems}) </h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div>
                {isEmpty ? (
                  <h5 className="text-center">
                    {" "}
                    Giỏ hàng của bạn trống. Nhấn để quay lại trang chủ{" "}
                    <Link to="/">Tại đây</Link>
                  </h5>
                ) : (
                  ""
                )}
              </div>

              <div>
                {items.map((e, i) => {
                  return (
                    <Row className="bg-body shadow rounded-3 mb-3 pb-3" key={i}>
                      <Col md="7" className="pe-0">
                        {" "}
                        <div>
                          <div>
                            <div className="d-flex justify-content-between pt-2 ">
                              <div className="d-flex">
                                <div>
                                  <img
                                    src="https://media3.scdn.vn/images/ecom/shop_blank-logo-2.jpg"
                                    alt=""
                                    className={`${styles.iconShop} rounded-circle `}
                                  />
                                </div>
                                <span>royalshoplc</span>
                              </div>
                              <div>
                                <button
                                  className={`border-0 ${styles.delete}`}
                                  onClick={() => {
                                    removeItem(e.id);
                                  }}
                                >
                                  Xoá
                                </button>
                              </div>
                            </div>

                            <div className="pb-3 d-flex justify-content-between mx-3 mt-2">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <input
                                    type="checkbox"
                                    className="me-3"
                                    value={check}
                                    onChange={handleOnChange}
                                  />
                                  <img
                                    src={e.avatar}
                                    alt=""
                                    className={`${styles.iconSP} mt-3 rounded-3`}
                                  />
                                </div>
                                <div className="ms-3 d-flex flex-column align-items-start justify-content-between">
                                  <button className="border-0 rounded-pill fw-bold mt-3 ">
                                    Hết hàng
                                  </button>
                                  <p
                                    className={`card-text ${styles.fzCardText} text-uppercase mt-2 mb-2`}
                                  >
                                    {e.name}
                                  </p>

                                  <button className="border-0 bg-body text-primary">
                                    Tìm sản phẩm tương tự
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="ms-3 pb-2">
                              <button className="border-0 bg-body">
                                {" "}
                                <BsJournalBookmark className="fs-5" />
                                <span className="mx-2">
                                  {" "}
                                  Mã giảm giá của shop
                                </span>
                                <BsChevronRight />
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md="5" className="px-0">                       

                        <div className="d-flex justify-content-between ">
                          <div className="mt-5 ms-2">
                            <h6 className="text-danger">{e.price}.000đ</h6>
                          </div>

                          <div className="d-flex flex-column align-items-center">
                            <div>
                              <button
                                className="border-0 ms-3 px-2 py-1 "
                                onClick={() => {
                                  updateItemQuantity(e.id, e.quantity - 1);
                                }}
                              >
                                -
                              </button>
                              <input
                                type="numeric"
                                value={e.quantity}
                                className={`${styles.count} ms-3 text-center`}
                              />
                              {/* <span></span> */}
                              <button
                                className="border-0 ms-3 px-2 py-1 mt-5"
                                onClick={() => {
                                  updateItemQuantity(e.id, e.quantity + 1);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end align-items-center mt-5 ">
                            <button
                              className={`${styles.iconHeart} border-0 bg-body d-none d-md-block`}
                            >
                              <BsHeart />
                            </button>
                            <button
                              className={`${styles.iconHeart} border-0 bg-body d-none d-md-block`}
                              onClick={() => {
                                removeItem(e.id);
                              }}
                            >
                              <BsFillTrashFill />
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </Col>
            
          </Row>
        </Container>
      
      </Container>
      <Footer />
    </div>

  );


};

export default Cart;
