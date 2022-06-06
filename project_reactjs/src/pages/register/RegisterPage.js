// import React, { useEffect, useState } from "react";
import styles from "../login/Login.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const postApi = async (data) => {
    try {
      await axios({
        method: "POST",
        url: "http://khanh.tokyo/api/register",
        data,
      });
      navigate("/login");
    } catch (errors) {
      console.log("loi");
    }
  };
  const onSubmit = (data) => {
    postApi(data);
  };

  return (
    <Container fluid>
      <Row className={styles.height}>
        <Col lg="4">
          <div
            className={`d-flex flex-column  justify-content-center align-content-center ${styles.Login}`}
          >
            <h1 className="text-center mb-5">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  defaultValue=""
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  {...register("name", { required: true })}
                />
                <div id="name" className="form-text">
                  {errors.name && (
                    <p className="text-danger">Bạn phải nhập Name</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  defaultValue=""
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  {...register("email", { required: true })}
                />
                <div id="email" className="form-text">
                  {errors.email && (
                    <p className="text-danger">Bạn phải nhập email</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", { required: true })}
                />
                <div id="password" className="form-text">
                  {errors.password && (
                    <p className="text-danger">Bạn phải nhập password</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="c_password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="c_password"
                  {...register("c_password", { required: true })}
                />
                <div id="c_password" className="form-text">
                  {errors.c_password && (
                    <p className="text-danger">
                      Bạn phải nhập Confirm password
                    </p>
                  )}
                </div>
              </div>

              <div className="">
                <button type="submit" className="btn btn-primary  w-100 ">
                  Đăng Ký
                </button>
              </div>
              {/* <Link
                to=""
                type="submit"
                className="text-white text-decoration-none btn btn-primary mt-4 w-100"
                onClick={handlRegister}
              >
                Đăng Ký
              </Link> */}
            </form>
          </div>
        </Col>
        <Col lg="8">
          <div className="d-none d-lg-block">
            <img
              src="https://wiki.tino.org/wp-content/uploads/2021/09/word-image-52.jpeg"
              alt=""
              className={`${styles.imgLeft} w-100`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
