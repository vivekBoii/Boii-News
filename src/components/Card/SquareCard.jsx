import React, { useState , useEffect } from 'react';

const SquareCard = () => {
    
    const [data, setData] = useState({ articles: [] });
    const [city, setCity] = useState("Delhi");
    const [country, setcountry] = useState("");
    const [mainClimate, setmainClimate] = useState("");
    const [maxTemp, setmaxTemp] = useState(0);
    const [minTemp, setminTemp] = useState(0);
    const [wind, setwind] = useState(0);
    
    useEffect(() => {
        updateCity();
    }, [])

    const updateCity = async() =>{
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00bf16181789032352f9c67ac6731269`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            setcountry(jsonData.sys.country)
            setwind(jsonData.wind.speed)
            setmainClimate(jsonData.weather[0].main)
            setmaxTemp((jsonData.main.temp_max-273.15).toFixed(2))
            setminTemp((jsonData.main.temp_min-273.15).toFixed(2))
            setData(jsonData);

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

  return (
    <>
        <div className="mx-auto max-w-sm bg-white border border-gray-200 my-5 rounded-lg shadow ">
            <a href="#">
                <img className="rounded-t-lg" src="./findWeather.jpg" alt="" />
            </a>
            <div className="p-5">
            <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 ">Know Weather</h5>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 outline-none " value={city} onChange={(event)=>{setCity(event.target.value)}} placeholder="Enter City Name" />
                    <button type="submit" onClick={updateCity} className="text-white absolute right-2.5 bottom-[5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
                <h5 className="my-4  text-center text-2xl font-bold tracking-tight text-gray-900 ">{data.name} , {country}</h5>
                <div className='flex items-center gap-1 justify-between'>
                    <img className='w-20 h-20' src="./sun.png" alt="" />
                    <div className=''>
                        <p className="font-bold text-gray-700 ">{mainClimate}</p>
                        <p className="text-gray-700 "><b>Wind :</b> {wind} Km/h</p>
                    </div>
                    <div className=''>
                        <p className="font-normal text-gray-700 "><b>Max :</b> {maxTemp}&deg;C</p>
                        <p className="font-normal text-gray-700 "><b>Min :</b> {minTemp}&deg;C</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default SquareCard