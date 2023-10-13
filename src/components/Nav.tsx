import React from 'react'
import {ShoppingCart} from 'phosphor-react'
import {Container , Navbar, Nav as Navbs , Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export default function Nav() {
  return (
  
        <Navbar sticky="top" className='bg-white shadow-sm mb-3'>
            <Container>
        
                <Navbs className='me-auto'>
                    <Navbs.Link to='/' as={NavLink}>Home</Navbs.Link>
               
                    <Navbs.Link to='/store' as={NavLink}>Store</Navbs.Link>
               
                    <Navbs.Link to='/about' as={NavLink}>About</Navbs.Link>
                </Navbs>
                <Button 
                    className=' rounded-circle position-relative' 
                    style={{width: '3rem', height:'3rem'}} 
                    variant='outline-primary'
                ><ShoppingCart size={24} />
                 <div 
                 className='bg-danger rounded-circle text-white d-flex 
                 justify-content-center align-items-center'
                 style={{width:'1.5rem', 
                 height:'1.5rem' ,position: 'absolute', 
                 bottom:'50%', right:'50%', transform:'translate(130%,130%)'}}
                 >3</div>
                </Button>
                
            </Container>
        </Navbar>
   
  )
}
