import Header from "./COMPONENTS/Header";
import Cards from "./COMPONENTS/Cards";
import "./CSS/app.css"
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((responsive) => {
        //console.log(responsive)
        return responsive.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);
  
  
  return (
    <div className="main-container">
      <Header />
      {data.map((dataList, index) => (
        <Cards dataList={dataList} key={index} AllData={data}/>
      ))}
    </div>
  );
};

export default App;
