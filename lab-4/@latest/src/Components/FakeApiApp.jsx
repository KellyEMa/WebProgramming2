import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({title: "", body: ""});

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            });
    }, []);


// function to handle the change event / new post is added
    const handleOnChange = (e) => {
        const {title, body} = e.target;
        setNewPost((prevPost)=>({
            ...prevPost,
            [title]: "",
            [body]: "",
        }));
    };

// function to handle the submit button being clicked 

    const handleSubmit = (e) =>{
         e.preventDefault();
         setData((prevData) => [newPost, ...prevData]);
         setNewPost({title: "", body: ""});
    }

    if(loading){
        return <div>Loading....</div>;
    }

    return (
        <div>
            <h1>Fake API</h1>
            <PostForm
                post={newPost}
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
            />

            <PostContainer posts={data}/>
        </div>
        
    );
}