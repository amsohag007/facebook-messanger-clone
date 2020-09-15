import React,{useState,useEffect} from 'react';
import {InputLabel, Input, Button, FormControl} from '@material-ui/core';
import Message from './Message';
import './App.css'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState(''); 

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>{
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
     <h1>Messanger-Clone</h1>
     <h2>Welcome {username}</h2>

     <FlipMove>
     {
       messages.map(({id,message})=>(
         <Message key={id} username={username} message={message}/>
       ))
     }
     </FlipMove> 

     <form>
     <FormControl>
     <InputLabel>Enter a message...</InputLabel>
     <Input value={input} onChange={e=>setInput(e.target.value)}/>
     <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>send msz</Button>
     </FormControl>
     </form>
   
     
    </div>
  );
}

export default App;
