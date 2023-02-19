import { useState, useRef } from 'react';
import '.././src/styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {


  const [posts, setPosts] = useState(
    [{ id: 1, title: "JavaScript", body: "JS - Programming language ..." },
    { id: 2, title: "React", body: "Rreact is a library ..." },
    { id: 3, title: "TypeScript", body: "What about typization of the JS " }]
  )

  const [post, setPost] = useState(
    { title: "", body: "" }
  );
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: Date.now(), title: post.title, body: post.body }]);
    setPost({ title: "", body: "" });
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          type="text"
          placeholder='Post name'
          onChange={e => setPost({ ...post, title: e.target.value })} />
        <MyInput
          value={post.body}
          type="text"
          placeholder='Post description'
          onChange={e => setPost({ ...post, body: e.target.value })}
        />
        <MyButton
          onClick={addNewPost}
        > Create post</MyButton>
      </form>
      <PostList
        posts={posts}
        title="Posts list 1"
      />

    </div>
  );
}

export default App;
