import React, { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import AddPost from './components/AddPost';
import './App.css'; // Import the CSS file

function App() {
  const [posts, setPosts] = useState([
    { 
      title: 'First Post', 
      content: 'This is the first blog post.', 
      image: 'paris.png' 
    },
    { 
      title: 'Second Post', 
      content: 'This is the second blog post.', 
      image: 'tajmahal.png' 
    },
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="App">
      <Header postCount={posts.length} />
      <AddPost onAdd={addPost} />
      <BlogList posts={posts} />
    </div>
  );
}

export default App;
