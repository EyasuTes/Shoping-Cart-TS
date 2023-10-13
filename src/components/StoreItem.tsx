import React from 'react'
import {Card, Button} from "react-bootstrap"
import { formatCurrency } from '../utilities/formatPrice'
import { useShoppingCart } from '../context/ShoppingCartContext'

type itemProps = {
    id: number,
    name: string,
    price: number,
    imgurl: string,
}

export default function StoreItem( {id, name, price, imgurl}:

    itemProps) {
      const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(id)
  return (
    <div>
      <Card>
        <Card.Img
        variant='top'
        src={imgurl}
        height='200px'
        style={{objectFit: 'cover'}}
        />
        <Card.Body className=' d-flex flex-column'>
            <Card.Title className=' d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='text-muted'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
            {quantity===0?
                <Button className='w-100' onClick={()=>{increaseCartQuantity(id)}}>+ADD</Button>

                        :
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
                                <Button onClick={()=>{decreaseCartQuantity(id)}}>-</Button>
                                <div><span className='fs-2'>{quantity}</span> in cart</div>
                                <Button onClick={()=>{increaseCartQuantity(id)}}>+</Button>
                            </div>
                            <Button className='bg-danger ' variant='danger' size='sm' onClick={()=>{removeFromCart(id)}}>Remove</Button>
                        </div>
                        }
            </div>
            
        </Card.Body>
      </Card>
    </div>
  )
}
