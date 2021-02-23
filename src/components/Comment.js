import React, { useState } from "react";


function Comment({user, comment, updateComments, comments}){

    // console.log(updateComments)
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    function handleClick(event){
        if (event.target.id === "like"){
            setLikes(likes => likes + 1)
        } else if (event.target.id === "dislike") {
            setDislikes(dislikes => dislikes + 1)
        } else if (event.target.id === "delete") {
            updateComments(comment)
        }
        
    }

    // function handleRemoveFood(idToRemove) {
// 		const newFoodArray = foods => foods.filter( (food) => food.id !== idToRemove)
// 		setFoods(newFoodArray) 
// }

return(
<div>
<h4>{user}</h4>
<p>{comment}</p>
<div id="liking-buttons">
    <button onClick={handleClick} id="like"> {likes} 👍</button>
    <button onClick={handleClick} id="dislike">{dislikes} 👎</button>
    <button onClick={handleClick} id="delete">Delete</button>
</div>
</div>
)
}

export default Comment;