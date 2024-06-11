

// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import './HistoryPage.css';
// import HistoryCard from './HistoryCard';
// require('dotenv').config();

// function HistoryPage() {
//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState('');

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = async () => {
//         try {
//             const BACKEND_URL= process.env.BACKEND_URL;
//             const response = await fetch(`${BACKEND_URL}/api/v1/images`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + localStorage.getItem('authToken')
//                 },
//             });
//             const obj = await response.json();
//             console.log(obj);
//             const sortedData = obj.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//             setData(sortedData);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     return (
//         <div>
//             <Navbar page="history" />
//             <div className='history-main-container'>
//                 <div className='history-search-bar'>
//                     <input
//                         type='text'
//                         placeholder='Search history...'
//                         onChange={(e) => setSearch(e.target.value)} />
//                 </div>
//                 <div className='history-items'>
//                     {
//                         data && data.filter(item => {
//                             return item.query.toLowerCase().includes(search.toLowerCase());
//                         }).map(item => {
//                             return <HistoryCard key={item._id} item={item} />;
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HistoryPage;


import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './HistoryPage.css';
import HistoryCard from './HistoryCard';
require('dotenv').config();

function HistoryPage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const BACKEND_URL= process.env.BACKEND_URL;
            const response = await fetch(`${BACKEND_URL}/api/v1/images`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                },
            });
            const obj = await response.json();
            console.log(obj);
            const sortedData = obj.data.sort((b,a) => new Date(a.createdAt) - new Date(b.createdAt));
            setData(sortedData);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Navbar page="history" />
            <div className='history-main-container'>
                <div className='history-search-bar'>
                    <input
                        type='text'
                        placeholder='Search history...'
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='history-items'>
                    {
                        data && data.filter(item => {
                            return item.query.toLowerCase().includes(search.toLowerCase());
                        }).map(item => {
                            return <HistoryCard key={item._id} item={item} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default HistoryPage;
