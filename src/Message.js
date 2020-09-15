import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './Message.css';

function Message({username,message}) {


    const isUser=message.username===username;

    return (
        <div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ?"message_userCard" :"message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                    >
                   {message.username} : {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
