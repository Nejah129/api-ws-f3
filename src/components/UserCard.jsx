import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div><Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user.email}
      </Card.Text>
      <p>{`the city of ${user.name} is ${user.address.city}`}</p>
     <Link to={`/info/${user.name}`}> <Button variant="primary">Info</Button></Link>
    </Card.Body>
  </Card></div>
  )
}

export default UserCard