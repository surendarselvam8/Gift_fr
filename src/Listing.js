import React ,{useState} from "react";

const Listing = () =>{
    const [person,setPerson] = useState([
        {name:"batman",id:1},
        {name:"iron man",id:2},
        {name:"wonder women",id:3},
        {name:"aquman",id:4}
    ]);
    return(
        <div>
            {person.map((person) =>(
                <div key={person.id}>
                    <h2>{person.name} - {person.id}</h2>
                    </div>
            ))};
      </div>
    );

}
export default Listing;