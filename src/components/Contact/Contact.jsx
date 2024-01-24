import React, { useState } from 'react';
import "./Contact.css";
import { Button, Typography } from '@mui/material'
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactFormHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact">
            <div className="contactRightBar"></div>
            <div className="contactContainer">
                <form className="contactContainerForm" onSubmit={contactFormHandler}>
                    <Typography variant="h4">Contact Us</Typography>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target)} />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target)} />
                    <textarea
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        value={message}
                        onChange={(e) => setMessage(e.target)}></textarea>
                    <Button variant="contained" type="submit">Send </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact
