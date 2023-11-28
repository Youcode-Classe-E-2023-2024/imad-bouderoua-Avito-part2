import { useState, useEffect } from 'react';

export default function Body() {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/images/Z3iIwkiIc8HEH1emTPHlWAtJ8EoHB3dvf3swdaMq.jpg');
 // Make sure this returns the correct image path
        const result = await response.json();

        // Assuming the response contains the image path
		console.log(result)
        setImagePath(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
	
    <section className="m-auto w-full flex flex-col container">
		<h1>thethetgdh</h1>
      {/* Use the img tag to display the image */}
	  <img src="http://localhost:8000/api/images/Z3iIwkiIc8HEH1emTPHlWAtJ8EoHB3dvf3swdaMq.jpg" alt="Image" />

    
    </section>
  );
}
