import { Link } from 'react-router-dom'
import { Stack, Button,  Avatar , Text} from '@chakra-ui/react'
import logo from '../assets/logo.png'
function Header() {
    return (
    
        <Stack direction='row'  boxShadow={ 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'} justifyContent="space-between" alignItems={'center'}>
            <Stack direction='row' alignItems={'center'}>
                <Avatar src={logo} />
                <span><strong>AGRO</strong>TRADER</span>
            </Stack>
           <Stack direction='row' alignItems={'center'}>
           <Stack direction="row" justifyContent={'space-between'} spacing="6">
                <Text sx={{color:"#1E483E", fontWeight: '600', fontSize:'12px', lineHeight: '13px', }}>
                    <Link to={'/'} >HOME</Link>
                </Text>
                <Text sx={{color:"#30534D", fontWeight: '600', fontSize:'12px', lineHeight: '13px'}}>

                <Link to={"/products"}>PRODUCTS</Link>
                </Text>
                <Text sx={{color:"#30534D", fontWeight: '600', fontSize:'12px', lineHeight: '13px'}}>

                <Link to={"/contact"}>CONTACT</Link>
                </Text>
                <Text sx={{color:"#30534D", fontWeight: '600', fontSize:'12px', lineHeight: '13px'}}>

                <Link to={"/about"}>ABOUT</Link>
                </Text>
            </Stack>
           </Stack>
            <Button colorScheme='green' size="sm">
                <Link to={"/login"}>LOGIN</Link>
            </Button>
        </Stack>

    );
}

export default Header;