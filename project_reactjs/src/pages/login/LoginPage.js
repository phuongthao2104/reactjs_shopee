import React, { useState } from "react";
import styles from "./Login.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Example from "../../components/loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios").default;

const Login = () => {
  // const [path, setPath] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const postApi = async (data) => {
    try {
      setLoading(true);

      const result = await axios({
        method: "POST",
        url: "http://khanh.tokyo/api/login",
        data,
      });
      localStorage.setItem("infor", JSON.stringify(result.data.data));
      // console.log("day la result", result.data.data.name);

      setLoading(false);
      navigate("/");
    } catch (errors) {
      setLoading(false);
      toast("Tên đăng nhập hoặc mật khẩu không đúng !. Vui lòng kiểm tra lại");
    }
  };
  const onSubmit = (data) => {
    postApi(data);
  };

  return (
    <Container fluid>
      <Row className={styles.height}>
        <Col lg="8">
          <div className="d-none d-lg-block">
            <img
              src="https://wiki.tino.org/wp-content/uploads/2021/09/word-image-52.jpeg"
              alt=""
              className={`${styles.imgLeft} w-100 `}
            />
          </div>
        </Col>
        <Col lg="4">
          <div
            className={`d-flex flex-column  justify-content-center align-content-center ${styles.Login}`}
          >
            <h1 className="text-center mb-5">Login to continue</h1>
            {loading ? (
              <Example />
            ) : (
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      defaultValue=""
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      {...register("email", { required: true })}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.email && (
                        <p className="text-danger">Bạn phải nhập email</p>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      {...register("password", { required: true })}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.password && (
                        <p className="text-danger">Bạn phải nhập mật khẩu</p>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Lưu mật khẩu
                      </label>
                    </div>
                    <div>
                      <button className="bg-body border-0">
                        Quên mật khẩu
                      </button>
                    </div>
                  </div>

                  <div className=" d-flex justify-content-between mt-4">
                    <button type="submit" className="btn btn-danger  ">
                      Đăng Nhập
                    </button>
                    <ToastContainer />;
                    <Link
                      to="/register"
                      className="text-white text-decoration-none "
                    >
                      <button type="submit" className="btn btn-danger  ">
                        Đăng Ký
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
