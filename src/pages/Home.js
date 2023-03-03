import React from 'react'
import Product from '../components/Product'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const products = [
    {
        id:1,
        title:"Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk",
        price:229,
        image:"https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg",
        ratings:4,
    },{
        id:2,
        title:"Samsung LC49RG90SSUXEN 49 Curve Led Gaming Monitor",

        price:199,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        ,
        ratings:4,
    },{
        id:3,
        title:"The Lean Startup: How Constant Innovation Create Radically Successful Businesses Paperback"
        ,
        price:29,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_B01,204,203,200_.jpg"
        ,
        ratings:4,
    },{
        id:4,
        title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        ,
        price:110,
        image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        ,
        ratings:3,
    },{
        id:5,
        title:"New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Siver (4th Generation)"
        ,
        price:320,
        image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        ,
        ratings:2,
    },
]


const Home = () => {


  return (
    <>

    
    
    <main className='grid grid-cols-1 p-4 md:p-20  sm:grid-cols-2 gap-10 md:grid-cols-3 bg-gray-100'>
        {products.map(item => <Product item={item} key={item.id}/>)}
{/* <Product/> */}


    </main>

    </>
  )
}

export default Home