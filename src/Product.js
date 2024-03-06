import { useState } from "react"

function Product(){
    const [data,setData] = useState({
        valName:"",
        valPrice:"",
        valDescription:""
    });
    const dataGiven = (e) =>{
        const {name,value} =e.target
        setData({... data,[name]:value})
    }
    const Product = () =>{
        alert(data.valName +" " +data.valPrice + data.valDescription)
        const Product ={
            name :data.valName,
            price:data.valPrice,
            description :valDescription
        }
        fetch("httd://localhost:8080/product/set",){

        }
    }
    return(
        <div>
            <h1>Add Product</h1>
            Name:<input type="text" name="valName" /><br></br>
            Description :<input type="text" name="valDesription" /><br></br>
            Price :<input type="text" name="valPrice" /><br></br>
            <input type="button" value="Add Produuct" onClick={submitProduct}/>
        </div>
    )
    
}export default Product
