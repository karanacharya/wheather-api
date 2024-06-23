

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '75529cd368a049c4922140504241406',
		'x-rapidapi-host': 'openweather43.p.rapidapi.com'
	}
};
 

 const getweather = (city)=>{
	  cityName.innerHTML = city
fetch('https://api.weatherapi.com/v1/current.json?key=75529cd368a049c4922140504241406&q=city='+city,options)
.then(response =>response.json())
.then(response => {
	 if(response.location.region == '')
		{
			alert("Sorry User. We can't fetch the weather for "+city)
			getweather("Mumbai")
		}
	 
	console.log(response)
    
	temp_c.innerHTML = response.current.temp_c
	temp_c2.innerHTML = response.current.temp_c
	temp_f.innerHTML = response.current.temp_f
	feelslike_c.innerHTML = response.current.feelslike_c
	wind_degree.innerHTML = response.current.wind_degree
	wind_kph2.innerHTML = response.current.wind_kph
	wind_kph.innerHTML = response.current.wind_kph
	wind_mph.innerHTML = response.current.wind_mph
	wind_dir.innerHTML = response.current.wind_dir
	humidity.innerHTML = response.current.humidity
	humidity2.innerHTML = response.current.humidity
	heatindex_c.innerHTML=response.current.heatindex_c
	heatindex_f.innerHTML=response.current.heatindex_f


})

 .catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
      getweather(city.value)
})
bihar.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather("Bihar")
})
Haryana.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather("Haryana")
})
Assam.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather("Assam")
})


getweather("Mumbai")
 

 