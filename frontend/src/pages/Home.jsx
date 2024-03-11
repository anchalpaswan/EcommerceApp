import { Button, Stack, Container, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Farmer from '../assets/f023cda5458b7d1799128406c9fdc322.jpg'
import Product from './Product';
import MetaData from '../components/Layout/Metadata';
import tractor from '../assets/tractor.jpg'
const product ={
    name: "Tractor",
    images: [{url:tractor}],
    price: "$330",
    _id: "Spidey",
}

function Home() {
    return (
    <>
        <MetaData title="AgroTrader"/>
        <Stack h='100vh' direction={'row'} justifyContent={'center'} alignItems={'center'} >
            <Container display='flex' flexDirection="column" justifyContent={'center'} alignItems={'center'}>
                <Text>
                    Namaste, welcome to Agro Trader.
                    <Text sx={{ fontSize: 24, fontWeight: 800 }}>
                        Farmer’s Eqipments at reasonable
                        and affordable prices.
                    </Text>
                    <Text fontSize="12px">
                        Start now with just one click.
                    </Text>
                </Text>
                <Link to={'/products'}>
                    <Button colorScheme='green' borderRadius={90} py={2} fontSize={12} variant={'outline'}>SHOP NOW</Button>
                </Link>
            </Container>
            <Container >
                <Image src={Farmer} />
            </Container>
        </Stack>
            <h2 className='homeHeading'>
                Featured Products
            </h2>

            <div className="container" id="container">
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
            </div> 
    </>);
}

export default Home;