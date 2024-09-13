import React from 'react'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/Slice/Cart'


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state:RootState) => state.cart.products )
  const handleremove =(productId:number) =>{
   dispatch(removeFromCart(productId))
  }
  const totalAmount = cart.reduce((sum, item) => sum + item.totalAmount, 0);
  return (
    <div  >
      <h2 className='p-10 text-center font-semibold text-5xl italic underline'>Cart</h2>
    
      <div className='px-52 py-10'>
        {cart && cart.map((product)=>
          <div key={product.id} className='flex gap-20 border border-gray-600 p-4 justify-center items-center'>
            <img src={product.image} className='flex h-40 w-40' alt="" />
            <div className=' text-2xl font-light p-10 w-4/6'>
            <h5 >{product.title}</h5>
            <h5>Category:-{product.category}</h5>
            <h5>Price:-{product.price}</h5>
            <h5>Quantity:- {product.quantity}</h5>
            </div>
            <button className='font-bold ' onClick={()=>handleremove(product.id)}>Remove</button>
          </div>
        )}
      </div>
      <div className='text-center'>
        <strong>Total Amount: </strong>${totalAmount.toFixed(2)}
      </div>
    </div>
  )
}

export default Cart