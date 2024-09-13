
import React, { useState, useEffect } from 'react'
import { Product as ProductType, category } from '../type/type';
import Apiservices from '../services/service';
import { setProducts } from '../redux/Slice/Product';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Components/Products/Products'
import { RootState } from '../redux/store';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state:RootState) => state);
  const [allproduct, setAllproducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<category[]>([])
  const [filter, setFilter] = useState<ProductType[]>([]);
  const [selectedcategory, setSelectedcategory] = useState<string>('All');

  useEffect(() => {
    async function fetchdata() {
      try {
        const products = await Apiservices.allproducts();
        const category = await Apiservices.allCategory();
        products && setAllproducts(products);
        category && setCategories(category)
        products && setFilter(products);
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(setProducts(fetchdata))
    fetchdata();
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedcategory(category);
    if (category === 'All') {
      setFilter(allproduct);
    } else {
      setFilter(allproduct.filter(product => product.category === category));
    }
  };
  return (
    <div className='m-10'>
      <div className="text-center font-medium text-4xl italic underline p-5">
        <h2 >All Products</h2><hr />
      </div>

      <div className="max-w-auto justify-center   flex">
        <div className=" max-w-60 p-3 flex-1  border border-r-gray-600">
          <h1 className='font-bold text-3xl p-5 underline'>Categories</h1>
          <div className="font-semibold text-xl p-3 cursor-pointer ">
            <li
              key="all"
              className={`category ${selectedcategory === 'All' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </li>
            {categories.map((cat, i) => (
              <li
                key={i}
                className={`category ${selectedcategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.toString())}
              >
                {cat}
              </li>
            ))}
          </div>
        </div>
        <div className="  flex-1  px-10">
          <ul className='flex gap-5 flex-wrap ' >
            {filter.map(product =>
              <Products key={product.id} product={product} />
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Product