import React from 'react'
import { Link } from 'react-router-dom'
import './HistoryPage.css'

const HistoryCard = (props) => {
    const item = props.item
    return (
        <div key={item.id} className='history-item'>
            <img src={item.image} alt={item.query} />
            <h3>{item.query}</h3>
            <p>{item.userId}</p>
            <p>{item.createdAt}</p>
            <p>{item.updatedAt}</p>
            <Link to={`./history/${item.id}`}>more...</Link>
        </div>
    )
}

export default HistoryCard