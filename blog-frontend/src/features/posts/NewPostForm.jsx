import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../constants.js";

/line 38: you dont need the curly brackets they just add themselves for some reason/
/*explanation of line 25 to 27 if we get a good response aka we created a new POST and we got a status 200 from API
redirect us to show page of the post*/
function NewPostForm(){
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()
    async function handleSubmit(e) {
        /we dont want our function to redirect us/
        e.preventDefault();
        /changed postData to post to allow it to pass post_params of API/
        const postData = {title, body};
        /we are passing this to RAILS API so it needs to be in a JSON format/
        const respone = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if (response.ok){
            const{ id } = await response.json();
            navigate(`/posts/${id}`);
        }
        else{
            console.log("an error occured ")
        }
    }
    return(
    <div>
        <h2>Create a new Post</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"titleInput"}>Title</label>

                <input id="titleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>

            <div>
                <label htmlFor={"bodyInput"}>Body:</label>
                <textarea id={"bodyInput"} value={body} onChange={(e) => setBody(e.target.value)} required/>
            </div>
            <div>
                <button type={"submit"}>Create Post</button>
            </div>
        </form>
    </div>
    )
}
export default NewPostForm;