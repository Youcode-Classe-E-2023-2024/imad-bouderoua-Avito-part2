import Image from "next/image";
import { useState , useEffect } from 'react';
export default function Body(){
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      // Update the state with the new input value
      setInputValue(event.target.value);
  
      // Call your desired function here
      yourFunction(event.target.value);
    };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getanonce');
        const result = await response.json();

        // Assuming the response contains an array of data
        console.log(result.data[0])
        console.log(result.data[0].product_photo);

        result.data.forEach((element:any) => {
                element.product_photo = element.product_photo.replace("uploads/", "");
        });
        result.data.forEach((element:any) => {
                // time
                const createdAt = element.created_at;

                // Create a Date object from the provided string
                const createdDate = new Date(createdAt);
                
                // Get the current date and time
                const currentDate = new Date();
                
                // Calculate the difference between the two dates in seconds
                const timeDifferenceInSeconds = Math.floor((currentDate - createdDate) / 1000);
                
                // Calculate the individual units
                const days = Math.floor(timeDifferenceInSeconds / (24 * 3600));
                const hours = Math.floor((timeDifferenceInSeconds % (24 * 3600)) / 3600);
                const minutes = Math.floor((timeDifferenceInSeconds % 3600) / 60);
                
                // Create the formatted string
                const formattedTimeDifference = `${days > 0 ? days + ' day' + (days > 1 ? 's' : '') : ''} ${hours > 0 ? hours + 'h' : ''}
                ${minutes > 0 ? minutes + 'min' : ''}`;

            element.created_at = formattedTimeDifference;
    });
        
        console.log(result.data[0].product_photo);
        setData(result.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const yourFunction = (value) => {
    console.log('Input value changed:', value);
    const x = document.querySelectorAll('.divs');
    console.log('length:', x.length);  
    x.forEach(element => {

        var nameElement = element.querySelector('.name');
        console.log(nameElement.textContent);
        var lowercase = nameElement.textContent.toLowerCase();
        if (lowercase.includes(value.toLowerCase())) {
            element.style.display = 'flex'; 
        } else {
            element.style.display = 'none';
        }
    });
};
function filter(){
  console.log('twerekt')
  var filters:any = document.querySelector('.filter');
  if(filters.style.display == 'none')
      filters.style.display = 'flex';
  else
    filters.style.display = 'none'

  
}
function handleSort(typeop: string) {
    const container = document.querySelector('.container');
    const x = Array.from(document.querySelectorAll('.divs'));

    x.forEach((element, index) => {
        if (x[index + 1]) {
            var nameElement: any = element.querySelector('.name');
            var nameElementtwo: any = x[index + 1].querySelector('.name');

            var priceone: any = element.querySelector('.pricee')?.textContent?.replace(' DH','');
            var pricetwo: any = x[index + 1].querySelector('.pricee')?.textContent?.replace(' DH','');

            var lowercase: string = nameElement.textContent.toLowerCase();
            var lowercasetwo: string = nameElementtwo.textContent.toLowerCase();
            

            console.log(priceone + pricetwo)

            if (typeop === 'alphabetical' && lowercase.localeCompare(lowercasetwo) === 1) {
                // Swap the elements in the array
                [x[index], x[index + 1]] = [x[index + 1], x[index]];

                // Remove all elements from the container
                container.innerHTML = '';

                // Append the updated elements back to the container
                x.forEach((el) => container.appendChild(el));

                console.log('swap');
            }else if(typeop === 'price' && priceone.localeCompare(pricetwo) === 1){
              [x[index], x[index + 1]] = [x[index + 1], x[index]];

              // Remove all elements from the container
              container.innerHTML = '';

              // Append the updated elements back to the container
              x.forEach((el) => container.appendChild(el));

              console.log('swap');
            }else {
                console.log('no swap');
            }
        }
    });
}

    return(
        <section className="  m-auto w-full flex flex-col containert p-2 mb-62">
            
            <div className=" mx-auto  w-8/12 select-none  shadow-sm p-5   rounded-2xl bg-app-light py-1  my-12 flex items-center   justify-between">
            <div className="InputContainer ">
  <input type="text"
  value={inputValue}
  onChange={handleInputChange}
  name="text" className="input" id="input" placeholder="Search"/>
  
  <label  className="labelforsearch">
<svg viewBox="0 0 512 512" className="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>
<div className="bordeer"></div>

<button className="micButton"><svg viewBox="0 0 384 512" className="micIcon"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path></svg>
</button>


</div>

<div onClick={filter} className=" h-14 w-3/12 flex flex-wrap justify-center px-3 p-1 rounded-lg  bg-app-primary ">
  <button 
    id="dropdownDefault"
    data-dropdown-toggle="dropdown"
    className="text-white w-full h-full  justify-center  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button" 
  >
    Trier par
    <svg
      className="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <div className="filter  flex w-full    py-3  items-center justify-center">
    <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => handleSort('alphabetical')}
    >
        alpha
    </button>
    <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSort('price')}
    >
        price
    </button>
</div>

</div>

           
            </div>
            <div className="flex pt-6  -z- bg-white border">
            <div className="h-full container w-9/12  border-gray-300 border-r-2 grid grid-cols-3 gap-5 p-4">
                    
                                {data.map((element) => (
                            <div key={element.id}  className="border divs shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2 hover:rotate-0 hover:cursor-pointer">
                            <div className="border-b-2 gap-3 border-gray-300 h-16 w-full px-2 pr-10 flex justify-between items-center">
                                <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full" />
                                <div className="w-full">
                                <div className="w-full name font-serif font-bold text">{`${element.product_name}`}</div>
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
                                <span className="pricee text-base font-semibold text-gray-400">{element.product_price} DH</span>
                                </div>
                                <div className="p-2">
                                <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                                </div>
                            </div>
                            </div>
                        ))}
                    
            </div>
            <div className="h-full w-3/12">
                
                    <div className="mt-[-30px] w-11/12 h-screen mx-auto">
                    <h1 className="text-4xl  font-bold font-sans text-yellow-600 my-3 mb-5 underline">
  Premium
</h1>


{data.map((element) => {
    if (element.premium === "yes") {
        return (
            <div key={element.id} className="border shadow-md bg-app-light border-gray-300 h-fit flex flex-col items-center p-2 hover:rotate-0 hover:cursor-pointer">
                <div className="border-b-2 gap-3 border-gray-300 h-16 w-full px-2 pr-10 flex justify-between items-center">
                    <Image src="/download.jpg" alt="IMAGE" width={500} height={300} className="w-1/6 rounded-full" />
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
                        <Image src="/icons8-favorites-64.png" alt="Favorite Icon" width={32} height={32} />
                    </div>
                </div>
            </div>
        );
    }
})}
</div>

            </div>
            </div>
        </section>
    )
}