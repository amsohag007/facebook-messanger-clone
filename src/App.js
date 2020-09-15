import React,{useState,useEffect} from 'react';
import {InputLabel, Input, Button, FormControl} from '@material-ui/core';
import Message from './Message';
import './App.css'

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([
    {username:"sunny", text:"hey guys"},
    {username:"sajeeb", text:"hello guys"}
  ]);
  const [username,setUsername]=useState(''); 

  useEffect(() => {
    setUsername(prompt('please enter your user name'));
  }, [])

  const sendMessage=(e)=>{
    e.preventDefault();
    setMessages([...messages, {username:username, text:input}]);
    setInput('');
  }

  return (
    <div className="App">
     <h1>Messanger-Clone</h1>
     <h2>Welcome {username}</h2>
     <FormControl>
     <InputLabel>Enter a message...</InputLabel>
     <Input value={input} onChange={e=>setInput(e.target.value)}/>
     <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>send msz</Button>
     </FormControl>
     {
       messages.map(message=>(
         <Message username={message.username} text={message.text}/>
       ))
     }
    </div>
  );
}

export default App;
