import React, { Component } from "react";

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>iPhone X</td>
                <td>25.000.000 ₫</td>
                <td>
                    <span className="badge badge-warning">In Stock</span>
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
