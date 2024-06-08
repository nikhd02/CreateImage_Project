
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './HistoryPage.css';
import HistoryCard from './HistoryCard';

const HistoryPage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:1010/api/v1/images`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                },
            });
            const obj = await response.json();
            setData(obj.data);
            setFilteredData(obj.data); // Initialize filteredData with all data
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter(item => 
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, data]);

    return (
        <div>
            <Navbar page="history" />
            <div className='history-main-container'>
                <div className='history-search-bar'>
                    <input
                        type='text'
                        placeholder='Search history...'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className='history-items'>
                    {filteredData.map(item => (
                        <HistoryCard key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
