import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeletePartsModal from './DeletePartsModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://powertrain.onrender.com/parts').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full md:px-10'>
            <h2 className="text-2xl text-center my-5">Manage Parts: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto table-compact w-full">
                    <thead className='bg-secondary'>
                        <tr>
                            <th></th>
                            <th className='border-b-[1px]'>Name</th>
                            <th className='border-b-[1px]'>Quantity</th>
                            <th className='border-b-[1px]'>Price</th>
                            <th className='border-b-[1px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                deletingProduct={deletingProduct}
                                setDeletingProduct={setDeletingProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeletePartsModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeletePartsModal>}
        </div>
    );
};

export default ManageProducts;