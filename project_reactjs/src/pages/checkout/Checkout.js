import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import ReactLoading from "react-loading";
import serviceCallApi from "../../services/ServiceApi";
import { Link, useNavigate } from "react-router-dom";
import { nameInfor } from "./../../untils";
import axios from "axios";

const Checkout = () => {

  // const [loading, setLoading] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem } =
    useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: nameInfor.name,
      sdt: "",
      location: "",
      Email: nameInfor.email,
    },
  });
  const navigate = useNavigate();

  // console.log(nameInfor);

  const onSubmit = async (data) => {
    // setLoading(true);
    const orderProduct = {
      user_id: nameInfor.id,
      full_Name: data.fullName,
      phone: data.phone,
      address: data.address,
      item: items,
    }
    // console.log(
    //   "🚀 ~ file: CheckOut.js ~ line 39 ~ onSubmit ~ orderProduct",
    //   orderProduct
    // );
    try {
      await serviceCallApi('order', 'POST', orderProduct, null, nameInfor.token);
      navigate("/thank")
      // console.log(orderProduct);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col className="px-0">
            <div className="shadow bg-body">
              <h5 className="fw-bold text-uppercase  py-2 ms-2 text-danger">
                Nhận thông tin mua hàng
              </h5>
            </div>
          </Col>
        </Row>
        <Row className="shadow bg-body pb-5">
          <Col lg="3" className="bg-body"></Col>
          <Col lg="6" className="bg-body pt-4">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column text-danger ">
                  <h6 htmlFor="">Họ và Tên </h6>
                  <input  {...register("fullName", { maxLength: 20 })} />
                </div>
                <div className="d-flex flex-column mt-2 text-danger">
                  <h6 htmlFor="">Email </h6>
                  <input  {...register("Email")} />
                </div>
                <div className="d-flex flex-column mt-2 text-danger">
                  <h6 htmlFor="">Số điện thoại nhận hàng</h6>

                  <input className="form-control" {...register("phone", { required: true })} />
                  {errors.phone && (
                    <p className="mb-0 text-primary">
                      Trường này không được bỏ trống! Vui lòng nhập thông tin
                    </p>
                  )}
                </div>
                <div className="d-flex flex-column mt-2 text-danger">
                  <h6 htmlFor="">Địa chỉ nhận hàng</h6>
                  <input type="text" className="form-control"
                    {...register("address", { required: true })} />
                  {errors.address && (
                    <p className="mb-0 text-primary">
                      Trường này không được bỏ trống! Vui lòng nhập thông tin
                    </p>
                  )}
                </div>
                <div className="d-flex justify-content-end mt-3 text-danger">
                  <button className=" border-1 bg-danger border-dark text-white" type="submit">Xác Nhận</button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg="3 "></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;