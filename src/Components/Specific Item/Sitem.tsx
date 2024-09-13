import React , { useEffect, useState } from'react'
import { useParams } from 'react-router-dom';
import { Product } from '../../type/type';
import Apiservices from '../../services/service';
import { addToCart } from '../../redux/Slice/Cart'
import { useDispatch } from 'react-redux'

const item = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch = useDispatch()
    const handleadd =(product: Product) =>{
     dispatch(addToCart(product))
    }
    useEffect(() => {
      async function fetchProduct() {
        try {
          const products = await Apiservices.allproducts() ;
          const foundProduct = products?.find((p) => p.id === parseInt(productId || '0'));
          console.log(products,"Ska");
          setProduct(foundProduct || null);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchProduct();
    }, [productId]);
  
    if (!product) {
      return <div className='text-center align-middle font-extrabold text-2xl p-3'>Loading...</div>;
    }
  
    return (
      <div className="flex max-w-auto p-10" key={product.id}>
        <div className="pt-6 m-auto h-3/6 w-3/6 object-contain"> <img src={product.image} alt={product.title} /></div>
        <div className="px-10 pt-10 text-center align-middle flex flex-col ">
          <h1 className='p-10 text-3xl '>{product.title}</h1>
          <span className='text-xl p-2 font-medium'>Category: {product.category}</span>
          <span className='text-xl p-2 font-medium'>Price: ${product.price}</span>
          <span className='px-28 py-4 font-medium space-x-5'>Description : {product.description}</span>
          <button onClick={()=>handleadd(product)} className='bg-red-600 p-4 font-medium text-white w-72 m-auto rounded-sm hover:text-red-400'  >Add to Cart</button>
        </div>
      </div>
    )
}

export default item