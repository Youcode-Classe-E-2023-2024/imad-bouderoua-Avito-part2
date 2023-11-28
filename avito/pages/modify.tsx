import React, { useState, useEffect } from 'react';

export default function Modify() {
  const [dataf, changeData] = useState([]);

  useEffect(() => {
    const owner = localStorage.getItem('owner');

    if (owner) {
      // Make the fetch request
      fetch(`http://localhost:8000/api/useranonces/${owner}`, {
        method: 'GET',
      })
        .then(response => {
          if (!response.ok) {
            console.log('Network response was not ok');
            return [];
          }
          return response.json();
        })
        .then(data => {
          // Process the data received from the API
          console.log(data);
          changeData(data[1]); // Use data[1] since the data array is in the second element
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);

  return (
    <div>
      {dataf.map(element => (
        <div key={element.id} className="border divs shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2 hover:rotate-0 hover:cursor-pointer">
          <div className="border-b-2 gap-3 border-gray-300 h-16 w-full px-2 pr-10 flex justify-between items-center">
            <img src={`http://localhost:8000/api/images/${element.product_photo}`} alt="Image" className="w-1/6 rounded-full" />
            <div className="w-full">
              <div className="w-full font-serif font-bold text">{`${element.product_name}`}</div>
              <h5 className="text">{element.created_at} ago</h5>
            </div>
          </div>
          <div className="my-4 card overflow-hidden">
            <div className="textBox absolute">
              <p className="text head">{`${element.description}`}</p>
            </div>
            <img className="apa" src={`http://localhost:8000/api/images/${element.product_photo}`} alt="Image" />
          </div>
          <div className="h-20 w-full pr-4 flex justify-between items-center">
            <div className="p-2 flex flex-col">
              <span className="text-lg font-bold text-app--dark">{element.city}</span>
              <span className="text-base font-semibold text-gray-400">{element.product_price} DH</span>
            </div>
            <div className="p-2">
              <img src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
