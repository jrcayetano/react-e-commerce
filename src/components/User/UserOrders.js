import React, { useEffect, useState } from "react";
import { getOrders } from "./../../services/User.service";
import UserOrderItem from "./UserOrdersItem";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col w-100 page-wrapper">
          <h3 className="title-page title-page">Mis pedidos</h3>
          {orders.map((order, index) => (
            <UserOrderItem order={order} key={`order_${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
