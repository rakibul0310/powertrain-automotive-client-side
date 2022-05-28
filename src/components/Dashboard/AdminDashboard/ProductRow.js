import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, price, availableQuantity } = product;

    return (
        <tr>
            <th className='border-[1px]'>{index + 1}</th>
            <td className='border-[1px]'>{name}</td>
            <td className='border-[1px]'>{availableQuantity}</td>
            <td className='border-[1px]'>{price}</td>
            <td className='border-[1px]'>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;