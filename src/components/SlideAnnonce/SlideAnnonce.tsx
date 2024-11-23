import React from "react";
import "./SlideAnnonce.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useSlideAnnonce , SlideAnnonceProps } from "./useSlideAnnonce";

export const SlideAnnonce :React.FC<SlideAnnonceProps> =(props:SlideAnnonceProps)=>{
  

    const { sliderTitle ,reactIcon=<></> , currentPage, totalPages, visibleProducts , prevPage ,nextPage} =useSlideAnnonce(props)
    
 

    return (
        <div className="slide-annonce">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center  h1">
                    {reactIcon}
                    <p className="">{sliderTitle}</p>
                </div>
                <div className="slider-controls">
                    {/* Navigation buttons */}
                    <button className="prev-button" onClick={prevPage} disabled={currentPage === 0}>
                        {"<"}
                    </button>
                    <button className="next-button" onClick={nextPage} disabled={currentPage === totalPages - 1}>
                        {">"}
                    </button>
                </div>
            </div>

            {/* Product Grid Section */}
            <div className="product-grid">
                {visibleProducts.map((item, index) => (
                    <div className="product-item" key={index}>
                        <ProductCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};
