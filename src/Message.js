import { Card, CardContent, Typography } from '@material-ui/core'
import React,{ forwardRef } from 'react';
import './Message.css';

const Message=forwardRef(({username,message},ref) =>{


    const isUser=message.username===username;

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ?"message_userCard" :"message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                    >
                   {!isUser && `${message.username || "Unknown User"}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
