import React from 'react';
import "./About.css";
import { Typography } from '@mui/material';

const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography>This is a sample quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/25058652/?v=4"
                        alt="Avatar"
                        class="aboutAvatar">

                    </img>
                    <Typography variant="h4" style={{ margin: "1vmax 0", color: "black" }}>
                        Hriday</Typography>

                    <Typography style={{ margin: "1vmax 0", color: "black" }}>Software Developer</Typography>

                    <Typography>Musician</Typography>
                </div>
                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "5px",
                            textAlign: "right"
                        }}>This is description Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis, nostrum dolor delectus laudantium rerum voluptatum esse quis accusantium incidunt beatae! </Typography>
                </div>

            </div>

        </div>
    )
}

export default About
