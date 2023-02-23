import React from 'react';
import avatar from '../assets/image-avatar.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteCart } from './CreateSlice';
import { Avatar, Badge, Space } from 'antd';



const Profile = () => {

    const dispatch = useDispatch()

    const selct: any = useSelector((state: any) => state.allval.value)

    const allDelete = () => {
        dispatch(deleteCart())
    }
    // console.log("ft", selct)

    const text = <span>Cart</span>;

    const content = (
        <div className='cart-title'>
            <div>
                <img src={selct.popimage} alt="" width={"40px"} className='pop-img' />
            </div>

            <div className='data-fill'>
                <p>{selct.mydata}</p>

                <span className='cart-prices'>{`$${selct.pricese}`}</span>

                <span>{` x ${selct.count}`} </span>

                <span className='totalprice-bold'>{`$${selct.totalprice}.00`}</span>

                <span className='cart-dlt-btn'><FaRegTrashAlt onClick={allDelete} /></span>

            </div>
            <button className='checkout-btn'>Checkout</button>
        </div>
    );

    const conten = (

        <div className='cart-title1'>
            <p className='empty-cart'>Your cart is empty</p>
        </div>
    );


    return (
        <div>
            <div className='profile-div'>
                <div className='shopping-ic-div'>
                    <Popover placement="bottom" title={text} content={selct.popimage !== undefined ? content : conten} trigger="click">
                        <Badge count={selct.count}>
                        <AiOutlineShoppingCart className='shop-icon' />
                        </Badge>
                    </Popover>
                </div>
                <div className='profile-img'>
                    <img src={avatar} width={"40px"} />
                </div>
            </div>
        </div>
    )
}

export default Profile