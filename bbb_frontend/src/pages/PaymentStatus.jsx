import React from "react";
import "../styles/PaymentStatus.css";

const PaymentStatus = () => {
  return (
    <div className="payment-status-container">
      <h1 className="payment-status-title">Payment Status</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Sub-Project</th>
            <th>Deadline</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Homepage Design</td>
            <td>March 10, 2025</td>
            <td className="completed">Completed</td>
          </tr>
          <tr>
            <td>Backend API</td>
            <td>March 15, 2025</td>
            <td className="in-progress">In Transit</td>
          </tr>
          <tr>
            <td>Final Testing</td>
            <td>March 25, 2025</td>
            <td className="pending">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentStatus;
