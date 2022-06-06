import React, { useEffect, useState } from "react";
import serviceCallApi from "../../services/ServiceApi";
import Header from "../../components/Layout/DefaultLayout/Header";
import { BsFillPersonFill } from "react-icons/bs";
import { Col} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
const UserPage = () => {
const infor = localStorage.getItem("infor");
const nameInfor = JSON.parse(infor);
const [orderData, setOrderData] = useState([]);
const [product, setProduct] = useState([]);

  useEffect(() => {
    getOrder();
  }, []);
  const getOrder = async () => {
    try {
      const res = await serviceCallApi(
        "order",
        "GET",
        null,
        null,
        nameInfor.data.token
      );
      setOrderData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <Header />
      <div className=" d-flex ms-3">
        <BsFillPersonFill />
        <h6 className="mb-0">{nameInfor.name}</h6>
        </div>
    </div>
  );
};

export default UserPage;