
import React from 'react';
import { useEffect, useState} from 'react';
const RCP_form = () => {

   const [data, setData] = useState();


      const handlechange=(e)=>{
          const [name,value]=e.target;
          setData({...data,[name]:value}) 
      }

      const sendData=(e)=>{  
      e.preventDefault();
    //   console.log(data);
        
        const payload={
           Title:data.name,
           ingredient:data.ingredient,
           coocking_time:data.t,
        }
                 
          fetch('http://localhost:3001/recipe',{
              method:'POST',
              body: JSON.stringify([payload]),
              headers:{
                  'content-type':'json/applications'
              }
          })
      }


    return (
        <div>
            <form onSubmit={sendData}>
                <h3>Add Recipe</h3>
                <label htmlFor="">Title</label>
                <input type="text" name="Title" id="" placeholder='add recipe' onChange={handlechange}/> <br />
                <label htmlFor="ingredient">ingred</label>
                <input type="text" name='ingredient' placeholder='add ingredient'  onChange={handlechange}/> <br />
                <label htmlFor="CoockTime">C_time</label>
                <input type="text" name='coocking_time' placeholder='enter time to cook'  onChange={handlechange}/><br />
                <input type="file" /> 
                <input type="submit" />

            </form>
        </div>
    );
};

export default RCP_form;