import {useState} from "react";

function NewPostForm(){
    const [title, setTitle] = useState("")
    const [body,setBody] = useState("")
    return(
        <div>
            <h1>New Post Form</h1>
        </div>
    )
}

export default NewPostForm