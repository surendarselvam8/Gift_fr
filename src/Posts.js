import   { useState,useEffect } from 'react'

const Posts =() => {
    const[posts, setPosts] = useState();

    useEffect(() =>{
        fetch(" https://jsonplaceholder.typicode.com/Posts")
        method :"post"
        body :"data"
        .then((response) =>{
            if (!response.ok){
                throw new Error("Failed to fetch data");
    }
 
    return response.json();

})
.then((data) =>{
    console.log("fetch data",data);
    setPosts(data);

})
.catch((error)=>{
    console.error("Error",error);
});
},[]);
return(
    <div className="container">
        
            {Array.isArray(posts)&& posts.slice(0,10).map((Post) =>(
                <div className="card" key={Post.id}>
                    <h2>{Post.tittle}</h2>
                    <p>{Post.body}</p>
                </div>

        ))}
    </div>
);

}
export default Posts;