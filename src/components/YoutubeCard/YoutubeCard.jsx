import React from 'react'
import "./YoutubeCard.css"
import { Typography } from '@mui/material'
const YoutubeCard = ({
    url = "https://www.youtube.com/channel/UClcyEdGTJdPMohIF6mL9t2w",
    title = "Title Here",
    image,
}) => {
    return (
        <div className="youtubeCard">
            <a href = {url} target = "blank">
                <img src = {image} alt = "Video"/>
                <Typography>{title}</Typography>
            </a>
        </div>
    )
}

export default YoutubeCard
