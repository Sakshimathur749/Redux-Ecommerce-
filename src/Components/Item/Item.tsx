import React, { useEffect, useState } from 'react'
import { Product } from '../../type/type';
import Apiservices from '../../services/service';

const Item: React.FC = () => {
  const [item, setItem] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const products = await Apiservices.fetchallproducts();
        products && setItem(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [])
  return (
    <div className='m-10'>
      <h1 className='text-center font-semibold text-4xl underline text-red-400'>Top Products </h1>
      <ul className='flex gap-10 pt-10'>
        {item?.map((product) =>
          <li className='border border-slate-900 py-2'  key={product.id}>            
            <div className=" h-64 w-64 object-cover"><img src={product.image} className='object-contain h-60 w-60 p-5 ' alt="" /></div>
            <div className=" text-center px-3 py-2 h-20 "><h5>{product.title}</h5></div>
            <div className="text-center py-3 font-medium underline  "><p>{product.category}</p></div>
            <div className="text-center px-4"><p>Price: ${product.price}</p></div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Item