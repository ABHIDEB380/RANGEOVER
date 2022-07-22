import '../style/Store.css'
import image1 from '../../Assets/shoe2.png'
import Product from './Product'
export default function Store(){
    return (
        <>
        <div className='store'>
         <div className="store-card card1 filter" >
            <div className="card-header">
            <div style={{marginRight:'71%'}}>

            FILTERS
            </div>
            <ion-icon name="filter-outline"></ion-icon>
            </div>
            <div className="filter-items">

            <div >
                Cost 
                <div className='filter-cost'>
                <label className='cost-price'><input type="radio" className='radio' square/> Rs. 1500 - 4000</label>
                <label className='cost-price'><input type="radio" className='radio' square/> Rs. 1500 - 4000</label>
                <label className='cost-price'><input type="radio" className='radio' square/> Rs. 1500 - 4000</label>
                </div>
            </div>
            <div className='filter-cost'>
                Design Tamplete
                <label className='cost-price'><input type="radio" className='radio' square/> 2</label>
                <label className='cost-price'><input type="radio" className='radio' square/> 3</label>
                <label className='cost-price'><input type="radio" className='radio' square/> 3+</label>
            </div>
            <div >
                Color
                <div className='filter-color'>
                <div className='color-div' style={{backgroundColor: "#FF0000"}}></div>
                <div className='color-div' style={{backgroundColor: "blue"}}></div>
                <div className='color-div' style={{backgroundColor: "green"}}></div>
                <div className='color-div' style={{backgroundColor: "grey"}}></div>
            </div>
                Type 
            <div >
                <div className='filter-cost'>
                <label className='cost-price'><input type="radio" className='radio' square/> loafers</label>
                <label className='cost-price'><input type="radio" className='radio' square/> sneakers</label>
                </div>
            </div>
            </div>
            </div>
        </div>
         <div className="store-card card2">
            <div className='card-header'>
                <div style={{marginRight:'77%'}}>
                 SHOES
                </div>
                <ion-icon name="search-outline"></ion-icon>
                <button style={{backgroundColor: "white", marginLeft:'2%'}}>shot by</button>
            </div>
            <div className='shoes-item'>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                {/* <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/>
                <Product id={1} title={'KSL 01'} image={image1} price={2000} rating={4}/> */}
            </div>
            
         </div>
         <div className="store-card card3">
            <div className='card-header'>
                <div style={{marginRight:'76%'}}>
                  CART
                </div>
                <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
            <div style={{width:'100%', height:'100%', textAlign:'center', marginTop:'50%'}}>
                What's stopping you, designer?
            </div>
            <div style={{display:'flex'}}>
            <ion-icon name="location-outline"></ion-icon> <div style={{marginRight:10}}>home</div>
            <ion-icon name="calendar-outline"></ion-icon> <div>select date</div> 
            </div>
            <button className='card3-button' style={{backgroundColor: "grey"}}>Order Now</button>
         </div>
        </div>

        </>
    )
}