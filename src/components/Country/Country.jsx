import { useState } from "react";
import './Country.css'

const Country = ({country, handleVisitedcountries}) => {
  // console.log(country);
  const [visited, setVisited] = useState(false)

  const handleVisited = ()=>{
      setVisited(!visited);
  }


  const {name, flags} = country;
  return (
    <div className="country">
      <h3>Name:{name.common}</h3>
      <img src={flags.png} alt="" />
      <button onClick={()=> handleVisitedcountries(country)}>Add</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
      {
        visited ? 'I have visited this country': 'I want to visit'
      }
    </div>
  );
};

export default Country;