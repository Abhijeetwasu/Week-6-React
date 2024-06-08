import React, { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import AddPost from './components/AddPost';
import './styles/styles.css';// Import the CSS file

function App() {
  const [posts, setPosts] = useState([
    { 
      title: 'Paris', 
      content: 'This is the first blog post.', 
      image: 'paris.png' 
    },
    { 
      title: 'Taj Mahal', 
      content: 'This is the second blog post.', 
      image: 'tajmahal.png' 
    },
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  
  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'lightblue',
    minHeight: '100vh',
    padding: '20px',
  };

  const headerStyle = {
    backgroundColor: 'black',
    padding: '20px',
    color: 'white',
  };

  const mainStyle = {
    fontSize: 'large',
    margin: '20px auto',
    maxWidth: '800px',
    color: '#333',
    lineHeight: '1.5',
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <Header postCount={posts.length} />
      </header>
      <main style={mainStyle}>
        <AddPost onAdd={addPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
};



export default App;
