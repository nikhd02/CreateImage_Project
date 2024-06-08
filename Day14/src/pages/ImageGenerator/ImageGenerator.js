// import React, { useContext, useEffect, useState } from 'react'
// import './ImageGenerator.css'
// import Navbar from '../Navbar/Navbar';
// import PointsContext from '../../context/pointsContext';

// const ImageGenerator = () => {
//     const [data, setData] = useState("");
//     const points = useContext(PointsContext)
//     // const [query, setQuery] = useState("");

//     /* Can also generate a random query at start */
//     // const queryList = ["Dog", "Cat", "Cute", "Birds", "Scenary"]
//     // const randomQuery = queryList[Math.floor(Math.random() * queryList.length)]
//     // const [query, setQuery] = useState(randomQuery);

//     const getData = async () => {
//         const query = document.getElementById('txtQuery').value
//         if (!query) return
//         // const res = await fetch(`https://source.unsplash.com/random/500x500/?${query}`);


//         // const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         "Authorization": "Bearer " + localStorage.getItem('authToken')
//         //     },
//         //     body: JSON.stringify({ searchText: query }),
//         // });

// try {
//   const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "Authorization": "Bearer " + localStorage.getItem('authToken')
//     },
//     body: JSON.stringify({ searchText: query }),
//   });

//   if (!res.ok) {
//     throw new Error(`Error ${res.status}: ${res.statusText}`);
//   }

//   const data = await res.json();
//   // Process the response data
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

//         const d = await res.json();

//         // console.log(d);
//         // setData(d.data.url)

//         if (d?.status === 'success') {
//             setData(d.data.url)
//             points.setUserPoints(points.userPoints - 1)
//         }
//     }


//     /* Using setQuery and useEffect */
//     // const getData = async () => {
//     //     if (!query) return
//     //     const res = await fetch(`https://source.unsplash.com/random/400x400/?${query}`);
//     //     setData(res.url)
//     // }

//     // useEffect(() => {
//     //     getData()
//     // }, [query])

//     return (
//         <>
//             <Navbar page="image" />
//             <div className='image-generator-main-container'>
//                 <h2>Image Generator</h2>
//                 <div>
//                     <input id='txtQuery' type='text'></input>
//                     <button onClick={getData}>Go</button>
//                     {/* <button onClick={ setQuery(document.getElementById('txtInput').value) }>Go</button> */}
//                 </div>
//                 {/* If data, display */}
//                 {data && <img src={data} alt='' />}

//             </div>
//         </>
//     )
// }

// export default ImageGenerator



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
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
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
      if (d?.status === 'uccess') {
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