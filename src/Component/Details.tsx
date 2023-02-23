import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { myfun } from './CreateSlice'
import popimage from '../assets/image-product-1.jpg'
import { Button } from 'antd'


const Details = () => {


  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  const [pricese, setPricese] = useState("125.00")
  const [mydata, setMydata] = useState("Fall Limited Edition Sneakers")

  const soppi = () => {
    if (count !== 0) {
      dispatch(myfun(

        {
          count: count,
          mydata: mydata,
          popimage: popimage,
          pricese: pricese,
          totalprice: (125 * count),

        }

      ))
      setCount(0)
    }

  }

  return (
    <div>
      <div className='product-details'>
        <h2 className='company-name'>SNEAKER COMPANY</h2><br />

        <h1 className='impotent-detail'>Fall Limited Edition <br /> Sneakers</h1><br />

        <p className='product-para'>These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they'll <br /> withstand everything the weather can offer.</p><br />

        <div>
          <span className='price-span'>$125.00</span>
          <span className='off-span'>50%</span>
        </div>
        <del className='prev-price'>$250.00</del>


        <div className='but-sec'>

          <span className='counter-design'>

            <button className='minus-but' onClick={() => setCount(count === 0 ? 0 : count - 1)}>-</button>

            <b className='count-val'>{count}</b>

            <button className='plus-but' onClick={() => setCount(count + 1)}>+</button>

          </span>
          <button className='add-cart-but' onClick={soppi}><AiOutlineShoppingCart className='shop-ic' />Add to cart</button>
        </div>

      </div>
    </div>
  )
}

export default Details