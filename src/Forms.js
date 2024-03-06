import React, {useState} from "react"

export const Forms = () => {
    const [FormData, setFormData] = useState({
        name: "",
        age: "",
        city: "",
        mark:"",
    })
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData({...FormData, [name]:value})
        console.log(name,value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(FormData);
    }

    
    return (

      <form onSubmit={handleSubmit}>
          <table>
              <tr>
                  <td><label>Name</label></td>
                  <td><input type="text" name="name"value={FormData.name} onChange={handleChange}></input></td><br></br>
              </tr>
              <tr>
                  <td><label>Age</label></td> 
                  <td><input type="number" name="age"value={FormData.age} onChange={handleChange}></input></td><br></br>
              </tr>
              <tr>
                  <td><label>City</label></td>
                  <td><input type="text" name="city"value={FormData.city} onChange={handleChange}></input></td><br></br>
              </tr>
              <tr>
                  <td><label>Marks</label></td>
                  <td><input type="text" name="mark"value={FormData.mark} onChange={handleChange}></input></td><br></br>
              </tr>
              <tr>
                  <td><button>Submit</button></td>
              </tr>
          </table>
      </form>
    )
  }
  export default Forms;