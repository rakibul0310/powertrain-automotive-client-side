import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, price, availableQuantity } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;