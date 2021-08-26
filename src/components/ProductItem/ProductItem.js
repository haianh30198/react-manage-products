import React, { Component } from "react";

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? "In Stock" : "Out Of Stock";
        var statusClass = product.status ? "warning" : "default";
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} ₫</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-2">
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
