import React , { useState, useEffect, useCallback,}from 'react';
import { Col, Container, Row, Button, Form} from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import styles from "../../pages/detail/DetailProduct.module.css";
import { useParams,useNavigate } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import { useCart } from "react-use-cart";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDetailProduct, selectProduct } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../../api/productAPI";
import { unwrapResult } from "@reduxjs/toolkit";

const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  const { addItem } = useCart();
  const [quantity, SetQuantity] = useState(1);
  const dispatch = useDispatch();
  const { loading, data } = useSelector(selectProduct);
  const navigate = useNavigate();
  


  useEffect(() => {
    var realId = parseInt(product_id);
    (async function() {
      const result =  await dispatch(getDetailProduct(realId))
      unwrapResult(result);
      // console.log('result: ', result);
      setProduct(result.payload.data)
    })()
    
    
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }, [dispatch, product_id]);


  const addItemToCart = () => {
    const data ={
      id: product.id,
      name: product.name,
      price: product.price,
      avatar: product.avatar,
      detail: product.detail,
      cate_id: product.cate_id,
      product_id:product.id
    };
    addItem(data,parseInt(quantity));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");

  };
  const addItemCheckOut = () => {
    const data ={
      id: product.id,
      name: product.name,
      price: product.price,
      avatar: product.avatar,
      detail: product.detail,
      cate_id: product.cate_id,
      product_id:product.id
    };
    addItem(data,parseInt(quantity));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    navigate("/checkout");

  };
  console.log(product);
    return (
        <div>
             <Header />
             <Container className="bg-body  shadow my-3">
        <Row>
          <Col lg="5">
            <div>
              <img
                src={product.avatar}
                alt=""
                className="h-120 w-120 img-fluid"
              />
            </div>
          </Col>

          <Col lg="7">
            <div>
              <div className={`d-flex justify-content-md-start mt-3`}>
                <div>
                  <Button type="submit" className="btn btn-danger ms-auto ms-5 ">Yêu thích</Button>
                </div>
                <div>
                  <h5>{product.name}</h5>
                </div>
              </div>
              <div className="d-flex ms-5">
                <div className="d-flex align-items-center  ms-5">
                  <h3>5</h3>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/270px-Red_star.svg.png"
                    alt=""
                    className={`${styles.iconForYou} `}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/270px-Red_star.svg.png"
                    alt=""
                    className={`${styles.iconForYou}  `}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/270px-Red_star.svg.png"
                    alt=""
                    className={`${styles.iconForYou}  `}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/270px-Red_star.svg.png"
                    alt=""
                    className={`${styles.iconForYou} `}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/270px-Red_star.svg.png"
                    alt=""
                    className={`${styles.iconForYou} `}
                  />
                </div>
                <div className="d-flex align-items-center ms-5">
                  <div className="d-flex align-items-center">
                    <h5 className="text-secondary ms-2">100 đánh giá </h5>
                  </div>
                </div>
                <span className="text-primary ">{product.brandname}</span>
                <div className="d-flex align-items-center  ms-5">
                  <h5 className="text-secondary">100 lượt bán </h5>
                  <BsFillQuestionCircleFill />
                </div>
              </div>
              <div>
                <h3 className="text-danger mt-2 mb-5">{product.price}</h3>
              </div>

              <div className="d-flex justify-content-md-start">
                <div>
                  <p>Mã Giảm Giá <br /> Của Shop</p>
                </div>
                <div>
                  <Button variant="outline-danger" className="ms-4" >Giảm 5k</Button>{' '}
                </div>
              </div>
              <div className="d-flex justify-content-md-start">
                <div>
                  <p>Deal Sốc</p>
                </div>
                <div>
                  <Button variant="outline-danger" className="ms-5">Mua kèm deal sốc</Button>{' '}
                </div>
              </div>
              <div className="d-flex justify-content-md-start mt-3">
                <div>
                  <p>Vẩn chuyển</p>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex">
                      <img
                        src="https://manhhungexpress.com/Content/Upload/images/ship.png"
                        alt=""
                        className={`${styles.iconForYou} ms-4 `}
                      />
                      <span>Vận chuyển tới</span>
                    </div>
                    <div className="ms-2 .d-sm-inline-flex">
                      <Form.Select aria-label="Default select example" size="sm">
                        <option>Huyện Ba Vì</option>
                        <option value="1">Hà Nội</option>
                        <option value="2">Nghệ An</option>
                        <option value="3">TP HCm</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <span className="ms-5 mt-5">Phí vận chuyển</span>
                    </div>
                    <div className="ms-2 .d-sm-inline-flex">
                      <Form.Select aria-label="Default select example" size="sm">
                        <option>32.000đ</option>
                        <option value="1">Hỏa tốc </option>
                        <option value="2">Vận chuyển nhanh</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

              </div>
              <div className="d-flex mt-5">
                <div>
                  <span>Chọn số lượng</span>
                </div>
                <div>
                  
                <input
                    type="number"
                    defaultValue={quantity}
                    className="form-control ms-5"
                    style={{ width: "150px" }}
                    onChange={(e) => SetQuantity(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <button type="button" className="border-0 bg-danger rounded-3 text-light fw-bold px-3 px-md-5 py-2 text-center me-2"
                onClick={() => addItemToCart()}>
                  Thêm vào giỏ hàng
                </button>
              </div>

              <button type="button" className="border-0 bg-danger rounded-3 text-light fw-bold px-3 px-md-5 py-2 text-center me-2"
              onClick={() => addItemCheckOut()}>
                Mua ngay
              </button>
            </div>

            <hr />


          </Col>
        </Row>
        <Row>
          <Col lg="5"></Col>
          <Col lg="7">
            <div className={`d-flex justify-content-md-around `}>
              <div className={`d-flex`}>
                <img
                  src="https://dnpsolution.com/wp-content/uploads/2021/06/warranty-icon.png"
                  alt=""
                  className={`${styles.iconForYou} `}
                />
                <h5 className=" mb-3">Shopee đam bảo</h5>
              </div>

              <span className=""> 3 ngày giao hàng/hoàn tiền</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col lg="5"></Col>
        <Col lg="7">
          <div className={`${styles.moTa} mb-5`}>
            <h3 className="mt-5 mb-3">Mô tả sản phẩm</h3>
            <span className="mt-2">{product.detail}</span>
          </div>
        </Col>
      </Container>
      <Container fluid className={`${styles.bgDetail}`}>
        <Footer />

      </Container>
            
        </div>
    );
};

export default ProductDetail;