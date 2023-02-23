import { useEffect, useState } from 'react'
import main from '../assets/image-product-1.jpg'
import firs from '../assets/image-product-2.jpg'
import second from '../assets/image-product-3.jpg'
import third from '../assets/image-product-4.jpg'
import Details from './Details'
import ImageModal from './ImageModal'

const Images = () => {

    useEffect(() => {
        setImgchange(main)
    }, [])


    const [imgchange, setImgchange] = useState("")

    const changeimg = (e: any) => {
        setImgchange(e.target.src)

    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='down-sec-div'>
            <div>
                <div className='images-div'>
                    <img src={imgchange || main} alt="" width={"400px"} onClick={showModal} />
                </div>

                <div className='my-child-img'>
                    <div className={`${imgchange.includes(main) ? "img-span-border" : "small-img"}`}>
                        <img src={main} alt="" width={"100%"} height={"100%"} onClick={changeimg}
                            className={`${imgchange.includes(main) ? "img-border1" : "my-child-img img"}`} />
                    </div>

                    <div className={`${imgchange.includes(firs) ? "img-span-border" : "small-img"}`}>
                        <img src={firs} alt="" width={"100%"} height={"100%"} onClick={changeimg}
                            className={`${imgchange.includes(firs) ? "img-border1" : "my-child-img img"}`} />
                    </div>

                    <div className={`${imgchange.includes(second) ? "img-span-border" : "small-img"}`}>
                        <img src={second} alt="" width={"100%"} height={"100%"} onClick={changeimg}
                            className={`${imgchange.includes(second) ? "img-border1" : "my-child-img img"}`} />
                    </div>

                    <div className={`${imgchange.includes(third) ? "img-span-border" : "small-img"}`}>
                        <img src={third} alt="" width={"100%"} height={"100%"} onClick={changeimg}
                            className={`${imgchange.includes(third) ? "img-border1" : "my-child-img img"}`} />
                    </div>
                </div>
            </div>

            <div>
                <Details />
                <ImageModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
            </div>
        </div>
    )
}

export default Images