import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../Footer/Footer.module.css";
const Footer = () => {
  const [tutorial, setTutorial] = useState([]);

  console.log(tutorial);
  return (
    <div>
      <Container fluid className={` ${styles.bgFooter} pt-3`}>
        <Container>
          <Row>
            <Col className="px-0">
              <div className="d-flex justify-content-between">
                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    Chăm sóc khách hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Trung tâm trợ giúp
                  </li>
                  <li className={`${styles.description} mt-1`}>Shopee Blog</li>
                  <li className={`${styles.description} mt-1`}>Shopee mall</li>
                  <li className={`${styles.description} mt-1`}>
                    Hướng dẫn mua hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Hướng dẫn Bán hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>Thanh toán</li>
                  <li className={`${styles.description} mt-1`}>Shopee Xu</li>
                  <li className={`${styles.description} mt-1`}>Shopee mall</li>
                  <li className={`${styles.description} mt-1`}>Vận chuyển</li>
                  <li className={`${styles.description} mt-1`}>
                    Trả hàng & Hoàn tiền
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Chăm sóc khách hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Chính sách bảo hành
                  </li>
                </ul>

                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    VỀ SHOPEE
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Giới thiệu về Shopee Việt Nam
                  </li>
                  <li className={`${styles.description} mt-1`}>Tuyển dụng</li>
                  <li className={`${styles.description} mt-1`}>
                    Điều khoản Shopee
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Chính sách bảo mật
                  </li>
                  <li className={`${styles.description} mt-1`}>Chính hãng</li>
                  <li className={`${styles.description} mt-1`}>
                    Kênh người bán
                  </li>
                  <li className={`${styles.description} mt-1`}>Flash Sales</li>
                  <li className={`${styles.description} mt-1`}>
                    Chương trình tiếp thị liên kết Shopee
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Liên hệ với truyền thông
                  </li>
                </ul>

                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    Thanh toán
                  </li>
                </ul>

                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    THEO DÕI CHÚNG TÔI TRÊN
                  </li>
                  <li className={`${styles.description} mt-1`}>facebook</li>
                  <li className={`${styles.description} mt-1`}>Instagram</li>
                </ul>
                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    TẢI ỨNG DỤNG
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={6} md={4}>
            © 2022 Shopee. Tất cả các quyền được bảo lưu.
            </Col>
            <Col xs={12} md={8}>
               <ul
                  className={`d-flex list-unstyled justify-content-around align-items-center ${styles.sizeAbout} mb-0 `}
                >
                  <li>Quốc gia & Khu vực:Singapore</li>
                  <li>Indonesia</li>
                  <li>Đài Loan</li>
                  <li>Thái Lan</li>
                  <li>Malaysia</li>
                  <li>Việt Nam</li>
                  <li>Philippines</li>
                  <li>Brazil</li>
                </ul>
            </Col>

          </Row> */}
        </Container>
      </Container>

      {/* <Container fluid className="bg-white text-black">
        <Container fluid>
          <Row>
            <Col >
              <div className="d-flex justify-content-md-center">
                <div className={`d-flex flex-column ${styles.widthCompany} `}>
                  <div className="d-md-flex ">
                    <div>
                      <img
                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                        alt=""
                        className={`${styles.szStore} me-3 `}
                      />
                    </div>
                    <div>
                      <img
                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                        alt=""
                        className={`${styles.szStore}`}
                      />
                    </div>
                  </div>
                  <span className={`${styles.fz}  mt-1`}>
                    Công ty TNHH Shopee
                  </span>
                  <span className={`${styles.description} justify-content-md-center  text-black`}>
                    Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                    Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                    Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                    © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
                  </span>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container> */}
    </div>
  );
};

export default Footer;
