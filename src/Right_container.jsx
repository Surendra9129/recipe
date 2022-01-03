
import { useEffect, useState } from "react";
const Right_container = () => {
    const [val,setVal]=useState();

    useEffect(() => {
      getData();
    }, [])
    const getData=async()=>{
        let data= await fetch('http://localhost:3001/recipe')
     
        let res= await data.json();
       console.log(res)
        setVal(res)
      }
    return (
        <div >
         {
                   val.map((el)=>{
                    return<>
                    <h3>{el.Title}</h3>
                    <img src={el.image} alt="" />
                    </>
                })
         }
        </div>
    );
};

export default Right_container;