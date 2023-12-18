import type { IComment } from "@/database/blogSchema"
import React from "react";
import "./comment.css"

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    return new Date(time).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="box">
            <h4 className="font">@{comment.user}</h4>
            <p className="comment">{comment.comment}</p>
            <span>Posted On: {parseCommentTime(comment.time)}</span>
            <br></br>
        </div>
    );
}

export default Comment;