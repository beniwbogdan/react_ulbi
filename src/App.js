import { useMemo, useState } from 'react';
import '.././src/styles/App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';


function App() {


  const [posts, setPosts] = useState(
    [{ id: 1, title: "JavaScript", body: "JS - Programming language ..." },
    { id: 2, title: "React", body: "Rreact is a library ..." },
    { id: 3, title: "aypeScript", body: "What about typization of the JS " }]
  )
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    } return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));

  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);

  }

  return (
    <div className="App">
      <PostForm
        create={createPost}
      />
      <hr style={{ margin: "15px 5px 15px 5px" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <MySelect
          onChange={sortPosts}
          value={selectedSort}
          defaultOption={"Sort of"}
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
          ]}
        />

      </div>

      {posts.length !== 0
        ? <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Posts list 1"
        />
        : <h2 style={{ textAlign: "center" }}>The post list is empty</h2>}
    </div>
  );
}

export default App;
