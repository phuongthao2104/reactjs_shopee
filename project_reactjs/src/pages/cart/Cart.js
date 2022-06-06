import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Header from "../../components/Layout/DefaultLayout/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import styles from "../cart/Cart.module.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsCoin,
  BsJournalBookmark,
  BsChevronRight,
  BsHeart,
  BsFillTrashFill,
} from "react-icons/bs";
const Cart = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);
  const {
    isEmpty,

    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log(items);

  // const total = items.map((item) => { });

  const infor = localStorage.getItem("infor");
  const nameInfor = JSON.parse(infor);
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

  console.log({ items });

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
            </Col>

            <div>
              {items.map((item) => {
                return (
                  <Row
                    className="bg-body shadow rounded-3 mb-3 pb-3"
                    key={item.id}
                  >
                    {/* <div className="pb-3 d-flex justify-content-between mx-3 mt-2">
                      <div className="d-flex align-items-center"> */}
                    <Col>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="me-3"
                            value={check}
                            onChange={handleOnChange}
                          />
                          <img
                            src={item.avatar}
                            alt=""
                            className={`${styles.iconSP} mt-3 rounded-3`}
                          />
                          <span className="card-text text-uppercase pt-3 ps-2">
                            {item.name}
                          </span>
                        </div>
                        <div>
                          <h6 className="card-text  text-uppercase pt-3">
                            {item.price}
                          </h6>
                        </div>
                      </div>
                    </Col>

                    <Col>
                      <div className="d-flex justify-content-between">
                        <div>
                          <button
                            className="border-0 ms-3 px-2 py-1 "
                            onClick={() => {
                              updateItemQuantity(item.id, item.quantity - 1);
                            }}
                          >
                            -
                          </button>
                          <input
                            type="numeric"
                            value={item.quantity}
                            className={`${styles.count} ms-3 text-center`}
                          />
                          <button
                            className="border-0 ms-3 px-2 py-1 mt-5"
                            onClick={() => {
                              updateItemQuantity(item.id, item.quantity + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className=" mt-3">
                          <button
                            className={`${styles.iconHeart} border-0 bg-body d-none d-md-block ms-5 `}
                            onClick={() => {
                              removeItem(item.id);
                            }}
                          >
                            Xóa
                          </button>
                          <button className="border-0 bg-body text-danger">
                            Tìm sản phẩm tương tự
                          </button>
                        </div>
                      </div>
                    </Col>
                    {/* </div>
                    </div> */}
                  </Row>
                );
              })}
            </div>
            {/* <Col md="5" className="px-0"></Col> */}
          </Row>
        </Container>
      </Container>
      <Container>
        <Col fluid md="12" className={`${styles.bg}`}>
          <div className=" bg-body">
            <div className="d-flex justify-content-end px-2">
              <div>
                <button className="border-0 bg-body md-5">
                  {" "}
                  <BsJournalBookmark className="fs-5" />
                  <span className="mx-2">Shopee Voucher</span>
                </button>
              </div>
              <div className="text-primary ms-5 ">
                <span>Chọn hoặc nhập mã</span>
              </div>
            </div>
            <hr />

            <div className="d-flex justify-content-around px-2">
              <div>
                <BsCoin />
                <span>Áp dụng shopee xu</span>
              </div>
              <div>
                <span>Tổng tiền:</span>
              </div>
              <div>
                <h5>{cartTotal.toLocaleString()}đ</h5>
              </div>
            </div>
            <div className="px-2 mt-2 pb-3">
              <button
                className="border-0 text-center text-light w-100 bg-danger fw-bold py-2 rounded-3"
                onClick={() => {
                  nameInfor ? navigate("/checkout") : navigate("/Login");
                }}
              >
                Mua Ngay
              </button>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Cart;
