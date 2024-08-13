import React from 'react';
import './App.css';

function App() {

  const [newComment, setNewComment] = React.useState('');
  const [comments, setComments] = React.useState([]);
  
  const handleChange = (event) => {
    setNewComment(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }




  return (
      <div className="App">
        {/* <header className="App-header">
          <img src="profile.jpg" alt="profile"></img>
        </header> */}

      <div className="profile-details">
        <h1>Makuro</h1>
        <p>Just playing Around</p>


        <div className="contact-info">
          <p>Email: tangmk1026@gmail.com</p>

          <div className="media"> 

            <div className="social-media-icon">
            <img src="ig.svg" alt="instagram"></img>
            </div>

            <div className="Link">
            <p><a href="https://www.instagram.com/tmk_marco/">tmk_marco</a></p>
            </div>

          </div>

          <div className="comment-section">
            <h2>Comments</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>

            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;