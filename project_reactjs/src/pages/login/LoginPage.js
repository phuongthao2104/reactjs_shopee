import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container} from "react-bootstrap";
import LoginForm from "../../features/login/LoginForm";
import styles from "../login/Login.module.css";
const LoginPage = () => {
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
            <div className='card shadow-lg'>
              <div className= {`card card-body p-5 ${styles.card}`}>
                <LoginForm />
              </div>
            </div>
            <div className='card-footer py-3 border-0'>
                <div className='text-center'>
                  Already have an account?{" "}
                  <Link to='/register' className='text-dark'>
                    Register
                  </Link>
                </div>
            </div>
           
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
