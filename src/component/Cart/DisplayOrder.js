import React from 'react';


const Display = (props) => {

    const renderTable = ({ orderData }) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>

                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td style={{ width: '100px' }}>{item.products}</td>
                        <td>Rs.{item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>

                    </tr>
                )
            })
        }
    }

    return (
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table table-bordered table-hover" style={{ borderColor: 'black' }}>
                <thead className='table-dark'>
                    <tr>
                        <th>OrderId</th>

                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Products</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>

                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )

}

export default Display