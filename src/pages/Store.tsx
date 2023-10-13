import React from 'react'
import items from '../data/items.json'
import {Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
export default function Store() {
  return (
    <div>
      <Row md ={2} xs={1} lg={3} className='g-3'>
        {items.map((item)=>(
        <Col key={item.id}>
          <StoreItem {...item}></StoreItem>  
        </Col>
      ))} 
      </Row>
     
    </div>
  )
}
