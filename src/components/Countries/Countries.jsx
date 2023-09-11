import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([])

  const [visitedcountries, setVisitedcounries] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  const handleVisitedcountries = (country)=>{
      const newVisitedCountries = [...visitedcountries, country]
      setVisitedcounries(newVisitedCountries)
  }

  return (
    <div>
      <h3>Countries:{countries.length}</h3>
      {/* visited Countries add here */}
      <div>
        <h4>Visited Countries:{visitedcountries.length}</h4>
        <ul>
            {
              visitedcountries.map(country=><li key={country.cca2}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className='countries-container'>
      {
        countries.map(country=><Country
           key={country.cca2}
           handleVisitedcountries = {handleVisitedcountries}
           country={country} ></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;