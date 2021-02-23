import React, { useState } from "react";
import Comment from "./Comment"



function VideoPage({video: {embedUrl, title, views, upvotes, downvotes, comments, createdAt}}) {

    // console.log(commentCards)

    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)
    const [showComments, setShowComments] = useState(true)
    const [search, setSearch] = useState("")
    const [stateComments, setStateComments] = useState((comments))

    const filteredComments = stateComments.filter((comment) => comment.user.includes(search))
    const commentCards = filteredComments.map(comment => < Comment key={comment.id} user ={comment.user} comment ={comment.comment} updateComments ={updateCommentsArray} />)

    function updateCommentsArray(comment){
        debugger
        const newCommentsArray = comments.filter((comment)=> comment.comment !== comment)
        console.log(newCommentsArray)
        setStateComments(newCommentsArray)

    }

    function handleClick(event){
        if (event.target.id === "like"){
            setLikes(likes => likes + 1)
        } else if (event.target.id === "dislike") {
            setDislikes(dislikes => dislikes + 1)
        } else if (event.target.id === "hide") {
            setShowComments(showComments => !showComments)
        }
    }

    function handleSearch(event){
        setSearch(event.target.value)
    }

    return(
  <div className="App">
  <iframe
    width="919"
    height="525"
    src= {embedUrl}
    frameBorder="0"
    allowFullScreen
    title= {title}
  />
  <h2>{title}</h2>
  <p>{views} Views | Uploaded {createdAt}</p>
  <div id="liking-buttons">
    <button onClick={handleClick} id="like"> {likes} 👍</button>
    <button onClick={handleClick} id="dislike">{dislikes} 👎</button>
  </div>
  <br></br>
  <input onChange={handleSearch} type="text" placeholder="Search"/>
  <br></br>
     <button onClick={handleClick} id="hide">{showComments ? "Hide" : "Show"} Comments</button>
  <hr></hr>

  {showComments ? (
  <div>
  <h3>{commentCards.length} Comments</h3>
  {commentCards}
  </div>
  ) : null }
</div>
  )

}

export default VideoPage;