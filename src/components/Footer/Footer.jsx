import React from 'react';
import "./Footer.css";
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import {
    BsYoutube,
    BsGithub,
    BsInstagram,
    BsLinkedin
} from "react-icons/bs"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Typography variant="h5">ABOUT ME</Typography>
                <Typography>Hey! My name is Hriday Buddhdev. I am a Computer Science Student at UBC and junior software developer.
                    I also play Tabla and Sarod. And yes, I built this website.
                </Typography>
                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Me</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6"> Social Media </Typography>
                <a href="https://www.youtube.com/channel/UClcyEdGTJdPMohIF6mL9t2w" target="black">
                    <BsYoutube />
                </a>
                <a href="https://www.instagram.com/hriday.007/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://github.com/hriday330" target="black">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/hriday-buddhdev-127a74202/" target="black">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
