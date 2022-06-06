import React from 'react';
import Header from "../../components/Layout/DefaultLayout/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
const ThankPages = () => {
    return (
        <div>
            <Header />
            <Container fluid >
                <Container>
                    <Row>

                        <div>
                            <h5 className="text-center">
                                {" "}
                                Bạn đã đặt hàng thành công. Nhấn để quay lại trang chủ{" "}
                                <Link to="/">Tại đây</Link>
                            </h5>

                        </div>

                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>

    );
};

export default ThankPages;