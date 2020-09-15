import React,{useState,useEffect} from 'react';
import {Input, FormControl, IconButton} from '@material-ui/core';
import Message from './Message';
import './App.css'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState(''); 

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
      //return message obect from firebase messages collecton
      console.log(snapshot.docs.map(doc=>({id:doc.id, data:doc.data()})));
    });
  },)

  useEffect(() => {
    setUsername(prompt('please enter your user name'));
  }, [])

  const sendMessage=(e)=>{
    e.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    //setMessages([...messages, {username:username, message:input}]);//for local state test
    setInput('');
  }

  return (
    <div className="App">
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" 
      alt="facebook-messanger-logo"
    />
     <h1>Messanger-Clone</h1>
     <h2>Welcome {username}</h2>

     <FlipMove>
     {
       messages.map(({id,message})=>(
         <Message key={id} username={username} message={message}/>
       ))
     }
     </FlipMove> 

     <form className="app_form">
        <FormControl className="app_formControl">
          <Input 
          className="app_inputStyle"
          placeholder="Enter a message" 
          value={input} 
          onChange={e=>setInput(e.target.value)}/>          
          <IconButton
          className="app_iconButton"
          disabled={!input} variant="contained" 
          color="primary" type="submit" 
          onClick={sendMessage} 
          >
          <SendIcon />
          </IconButton>
        </FormControl>
      </form>
   
     
    </div>
  );
}

export default App;
