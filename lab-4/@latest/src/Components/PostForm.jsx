export default function PostForm({

    post,
    handleOnChange,
    handleSubmit    
}){
    return
(  
     <div>
        <form action="">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value ={title}/>
            <br/>
            <label htmlFor="body">Body: </label>
            <input type="text" name="body" id="body" value={body}/>
            <br/>
            <input type="submit" name="submit" id=""></input>
        </form>
    </div>
    );
}