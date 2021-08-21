import React, { Component } from "react";
import ProductItem from ".././ProductItem/ProductItem";

class ProductList extends Component {
    render() {
        return (
            <div className="card border border-dark">
                <div className="card-header bg-dark text-white">Products</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;
