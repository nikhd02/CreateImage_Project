import React, { useContext, useEffect, useState } from 'react';
import './ImageGenerator.css';
import Navbar from '../Navbar/Navbar';
import PointsContext from '../../context/pointsContext';

const ImageGenerator = () => {
  const [data, setData] = useState("");
  const points = useContext(PointsContext);
  const [query, setQuery] = useState("");

  const getData = async () => {
    const queryValue = document.getElementById('txtQuery').value;
    if (!queryValue) return;
    try {
      const BACKEND_URL= process.env.BACKEND_URL
      const res = await fetch(`${BACKEND_URL}/api/v1/images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem('authToken')
        },
        body: JSON.stringify({ searchText: queryValue }),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const d = await res.json();
      console.log(d);
      if (d?.status === 'success') {
        console.log('Image URL:', d.data.url); // Add this log statement
        setData(d.data.url);
        points.setUserPoints(points.userPoints - 1);
      }
      // if (d?.status === 'success') {
      //   setData(d.data.url);
      //   points.setUserPoints(points.userPoints - 1);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar page="image" />
      <div className='image-generator-main-container'>
        <h2>Image Generator</h2>
        <div>
          <input id='txtQuery' type='text'></input>
          <button onClick={getData}>Go</button>
        </div>
        {/* If data, display */}
        {data && <img src={data} alt="Generated Image" />}
      </div>
    </>
  );
};

export default ImageGenerator;