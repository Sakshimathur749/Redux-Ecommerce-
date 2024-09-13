import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../type/type'
import { addToCart } from '../../redux/Slice/Cart'
import { useDispatch } from 'react-redux'

interface ProductsProps{
  product : Product;
}
const Products: React.FC<ProductsProps> = ({product}) => {
  const dispatch = useDispatch()
  const handleadd =(product:Product) =>{
   dispatch(addToCart(product))
  }
  return (
    <div className='border border-gray-700 p-3 w-80 cursor-pointer' key={product.id}>
      <Link to={`/product/${product.id}`}>
        <div className=" h-36 w-36 object-contain m-auto"><img src={product.image} alt={product.title} /></div>
        <div className=" pt-28 font-bold px-3"><h5>{product.title}</h5></div>
        <div className="px-3 font-medium "><p>{product.category}</p></div>
        <div className="px-3 "><p>Price: ${product.price}</p></div>
      </Link>
      <div className="px-3">
        <button onClick={()=>handleadd(product)} className=' bg-red-600 text-white hover:bg-red-400 p-2' >Add to Cart</button>
      </div>
    </div>
  )
}

export default Products