import React, { useEffect, useState } from "react";
import serviceCallApi from "../../services/serviceApi";
import Header from "../../components/Layout/DefaultLayout/Header";
import { BsFillPersonFill } from "react-icons/bs";
import { Col, Row, Container} from "react-bootstrap";
import styles from "../user/UserPage.module.css";
import { orderGetList, selectOrder } from "../../features/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const UserPage = () => {
  const infor = localStorage.getItem("userData");
const nameInfor = JSON.parse(infor);
const [product, setProduct] = useState([]);
const dispatch = useDispatch();
 const { loading, data } = useSelector(selectOrder);
  useEffect(() => {
    getOrder();
  }, []);
  const getOrder = async () => {
    try {
      const res = await dispatch(orderGetList({nameInfor}))
      unwrapResult(res);
      setProduct(res.payload.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={`${styles.bg}`}>
      <Header />
      <div className="d-flex mt-3 ms-3">
        <BsFillPersonFill />
        <h6 className="mb-0">{nameInfor.name}</h6>
        
        </div>
        <h6 className={`${styles.txt} mt-3 ms-5`}>Các đơn hàng</h6>
        <div>
        {product.map((items) => {
                return (
                  <Container className="mt-4" key={items.id}>
                    <Row
                    className="bg-body shadow rounded-3 mb-3 pb-3"
                    key={items.id}
                  >
                    {/* <div className="pb-3 d-flex justify-content-between mx-3 mt-2">
                      <div className="d-flex align-items-center"> */}
                    <Col>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="align-items-center">
                          <span className="card-text  pt-2 ps-2">
                          <h6>Tên người nhận: {items.full_name}</h6>
                          </span>
                          <span className="card-text  pt-2 ps-2">
                           Tên sản phẩm: {items.name}      
                          </span>
                          <span className="card-text  pt-2 ps-2">
                          Số lượng: {items.quantity} sản phẩm                  
                          </span>
                          <span className="card-text pt-2 ps-2">
                          Ngày đặt hàng: {items.created_at}
                          </span>
                          <span className="card-text pt-2 ps-2">
                          Số điên thoại người nhận: 0{items.phone}
                          </span>
                          <span className="card-text pt-2 ps-2">
                          Địa chỉ nhận hàng: {items.address}              
                          </span>
                          
                        </div>
                        <div>      
                        </div>
                      </div>
                    </Col>
                  </Row>
                  </Container>
                  
                );
              })}
        </div>
    </div>
    
  );
};

export default UserPage;