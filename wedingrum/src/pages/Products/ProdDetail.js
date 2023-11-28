import React, { useState, useEffect } from "react";
import './Products.scss';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import { useParams } from 'react-router-dom';

const ProdDetail = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const [detailDescription, setDetailDescription] = useState([]); 
  const [detailPrice, setDetailPrice] = useState([]);
  const [detailType, setDetailType] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const { id } = useParams();

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/detail/${id}`);
        if (!response.data || response.data.error) {
          console.error('확실히 문제가 있어.');
          return;
        }
        setProductDetails(response.data);
        setSelectedImage(response.data.imageUrl);
        setDetailDescription(JSON.parse(response.data.detailDescription));
        setDetailPrice(JSON.parse(response.data.detailPrice));
        setDetailType(JSON.parse(response.data.detailType));
        setGalleryImages(JSON.parse(response.data.galleryImages));
        console.log("response.data: ", response.data);
        console.log("detailDescription: ", detailDescription);
        console.log("detailPrice: ", detailPrice);
        console.log("detailType: ", detailType);
        console.log("galleryImages: ", galleryImages);
      } catch (error) {
        console.error('에러:', error);
      }
    };


    fetchData();
  }, [id]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  // if (!productDetails) {
  //   return <p>제발 되게 해주세요..</p>;
  // }

  return (
    <div className="detail-container">
      <div className="image-container">
        <img src={selectedImage} alt="Product" />
        <div className="image-overlay">
          {Array.isArray(galleryImages) &&
            galleryImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(image)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="description-container">
        <div className="header">
          <p>PRODUCTS {'>'} {productDetails.category}</p>
          <button className="list-button" onClick={goBack}>
            <ListIcon /> 
            <span>목록으로</span>
          </button>
        </div>
        <h1>
          <span style={{ color: '#ad5656' }}>{productDetails.title} </span> 
          {productDetails.name}
        </h1>
        <p>{productDetails.description}</p>
        <div className="details">
          {productDetails && 
            (detailType.map((val, index) => {
              return(
                <div className="detail" key={index}>
                  <p>{detailType[index]}</p>
                  <span className="description">{detailDescription[index]}</span>
                  <span className="price">{detailPrice[index]}원</span>
                </div>
              )
              // console.log(`반복테스크`, detailType[index]);
            }))
          }
        </div>
      </div>
    </div>
  );
};

export default ProdDetail;
