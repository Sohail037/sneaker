import { Modal } from 'antd';
import focusimg from '../assets/image-product-1.jpg'
import firs from '../assets/image-product-2.jpg'
import second from '../assets/image-product-3.jpg'
import third from '../assets/image-product-4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';




const ImageModal = ({ isModalOpen, handleOk, handleCancel }: any) => {

    return (
        <div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Carousel>

                    <div>
                        <img src={focusimg} alt="" />
                    </div>
                    <div>
                        <img src={firs} alt=""  />
                    </div>
                    <div>
                        <img src={second} alt="" />
                    </div>
                    <div>
                        <img src={third} alt="" />
                    </div>
                </Carousel>
                <span className='prev-arr-span'>
                    <button className='arr-but-prev'><MdArrowForwardIos className='prev-arr-ic'/></button>
                </span>
                <span className='next-arr-span'>
                    <button className='next-arr-but'><MdArrowBackIos className='next-arr-ic'/></button>
                </span>
            </Modal>

        </div>
    )
}

export default ImageModal