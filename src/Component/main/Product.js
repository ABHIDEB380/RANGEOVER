import React from 'react'
import "../style/Product.css"
// import { useStateValue } from '../utilities/StateProvider'
function Product({ id, title,image, price, rating, }) {
    // const [{basket},dispatch] = useStateValue();
    //         console.log("this is the basket", basket);
    // const addToBasket=()=>{
    //     //dispatch the item in the data layer
    //         dispatch({
    //             type: "ADD_TO_BASKET",
    //             item: {
    //                 id: id,
    //                 title: title,
    //                 image:image,
    //                 price:price,
    //                 rating:rating,
    //             }
    //         })
    // }

    return (
        <div className="product">
            <img src={image} alt="" />
               <div>{title}</div>
            <div className="product_info">
                <div className='product_price'>
                    Rs. {price}
                </div>
                <div className = "product_rating" >
                    {Array(rating).fill().map((_, i)=>(

                    <div className='rating'>⭐</div>
                    ))}
                </div>
            </div>
            
            <button
            //  onClick={addToBasket}
             > Add to Cart </button>
            
        </div>
    )
}

export default Product;
