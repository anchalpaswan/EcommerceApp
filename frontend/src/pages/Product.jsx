/* eslint-disable react/prop-types */
// import { Stack, Card, CardBody, Image, Heading, Text, CardFooter, Button, Input, Container, Box } from '@chakra-ui/react'
// import Tractor from '../assets/tractor.jpg'
import { Link, } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
// const products = [{
//     "id": 1,
//     "title": "Farming equipment",
//     "price": 109.95, 
//     "description": "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
//     "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": { "rate": 3.9, "count": 120 }
// },
// {
//     "id": 2,
//     "title": "Tractor ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": { "rate": 4.1, "count": 259 }
// }]

const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    acitveColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 2.5,
    isHalf: true,

}
function Product({ product }) {
    return (

        <Link className='productCard' to={product._id}>
            <img src={product.images[0].url} alt="" />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /> 
                </div>
                <div>

                <span>(256 Reviews)</span>
            </div>
            <span>{product.price}</span>
        </Link>
    );
}

export default Product;