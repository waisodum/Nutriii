import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productDetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail } from '../../../Actions/productAction';
import Loading from '../Loading/Loading';
import ReactStars from "react-rating-stars-component";
import Btn from '../Btn';

const ProductDetail = ({}) => {
  // const params = useParams();
  // console.log(params);
  // const dispatch = useDispatch();
  // const { product, loading } = useSelector((state) => state.productDetail);
 
//   const options ={
//     edit:false,
//     activeColor:"tomato",
//     size:window.innerWidth < 600 ? 16 : 18,
//     value:product.rating,
//     isHalf:true,
// }

  // data.product={"product":{"images":[{}]}}

  // console.log(data)
  // useEffect(() => {
  //   dispatch(getProductDetail(params.id));
  // }, [dispatch, params.id]);

  // const [productImage,setProductImage] = useState(product.images[0].url)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="productDetail">
          <div className="productHero">
            <div className="productPreview">
              <div className="previewOptions">
                {/* {product.images &&
                  product.images.map((element, index) => (
                    <img src={element.url} key={element._id} alt={index} />
                  ))} */}

              </div>
              <div className="productImg">
                {product.images &&
                  // product.images.map((element, index) => (
                    <img src={product.images[0].url}  alt="product" />
                }
                  {/* // ))} */}
              </div>
            </div>
            <div className="productInfo">
              <div className="detail-box-1">
                <h1 className='heading'>{product.name}</h1>
                {/* <p>Refernce Number : {product._id}</p> */}
              </div>
              <div className="detail-box-2">
                <h1>({product.numOfReviews} Reviews)</h1>
                {/* <h1 className='heading'>₹{product.price}</h1> */}
              </div>
              <div className="detail-box-3">
                <div className="detail-3-1">
                  <button>-</button>
                  <input type="number" value={1} className='input' />
                  <button>+</button>
                </div>
                <Btn text="Add toCart" color="bg-black text-white"/>
                <p className={product.stock < 1 ? 'redText' : 'greenText'}>
                  Status :{" "}
                  {product.stock < 1 ? 'Out of Stock' : 'InStock'}
                </p>
              </div>
              <div className="detail-box-4">
                <div className="detail-box-4-1">
                <ReactStars {...options}/> 
                </div>
                <p className='subHeading'>Description:</p><p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
