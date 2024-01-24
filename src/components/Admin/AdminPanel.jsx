
import { getSupertypeNames } from 'ast-types'
import React, { useState } from 'react'
import { Button,Typography } from '@mui/material'
import "./AdminPanel.css"
import {FaYoutube} from "react-icons/fa";
import {MdTimeline} from "react-icons/md";
import {AiOutlineProject} from "react-icons/ai";
import {Link} from "react-router-dom";

import "./AdminPanel.css";


const AdminPanel = () => {
    const [about,setAbout] = useState({});
    const [skills,setSkills] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    };
    const logoutHandler = (e) => {
        e.preventDefault()
    };
    const handleImages = (e,val) => {
        const file = e.target.files[0]
        const Reader = new FileReader();

        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if(Reader.readyState ===2){
                if(val ===1){
                    setSkills(...skills, {image1: Reader.result})
                }
                if(val ===2){
                    setSkills(...skills, {image2: Reader.result})
                }
                if(val ===3){
                    setSkills(...skills, {image3: Reader.result})
                }
                if(val ===4){
                    setSkills(...skills, {image4: Reader.result})
                }
                if(val ===5){
                    setSkills(...skills, {image5: Reader.result})
                }
                if(val ===6){
                    setSkills(...skills, {image6: Reader.result})
                }
            }
        };
    };

    const handleAboutImage = (e) => {
        const file = e.target.files[0]
        const Reader = new FileReader();

        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if(Reader.readyState ===2){
                setAbout(...about, {avatar: Reader.result});
            }
        };
    }
    return (
        <div className="adminPanel">
            <div className="adminPanelContainer">
                <Typography variant="h4">
                    <p> A</p>
                    <p> D</p>
                    <p> M</p>
                    <p> I</p>
                    <p style={{ marignRight: "1vmax" }}> N</p>
                    <p> P</p>
                    <p> A</p>
                    <p> N</p>
                    <p> E</p>
                    <p> L</p>
                </Typography>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="adminPanelInputs"
                        value={name}
                        onChange={(e) => setName(e.targetvalue)} />
                    <input
                        type="email"
                        placeholder="Email"
                        className="adminPanelInputs"
                        value={email}
                        onChange={(e) => setEmail(e.targetvalue)} />
                    <input
                        type="password"
                        placeholder="Password"
                        className="adminPanelInputs"
                        value={password}
                        onChange={(e) => setPassword(e.targetvalue)} />
                    <div className="adminPanelSkills">
                        <div>
                            <Typography> SKILL 1</Typography>
                            <input type="file" className="adminPanelFileUpload" onChange={(e) => handleImages(e, 1)}
                                accept="image/*" />

                        </div>
                        <div>
                            <Typography> SKILL 2</Typography>
                            <input type="file" className="adminPanelFileUpload" onChange={(e) => handleImages(e, 2)}
                                accept="image/*" />

                        </div>
                        <div>
                            <Typography> SKILL 3</Typography>
                            <input type="file" className="adminPanelFileUpload" onChange={(e) => handleImages(e, 3)}
                                accept="image/*" />

                        </div><div>
                            <Typography> SKILL 4</Typography>
                            <input type="file" className="adminPanelFileUpload" onChange={(e) => handleImages(e, 4)}
                                accept="image/*" />

                        </div>
                        <div>
                            <Typography> SKILL 5</Typography>
                            <input type="file" className="adminPanelFileUpload" onChange={(e) => handleImages(e, 5)}
                                accept="image/*" />

                        </div>
                        <div>
                            <Typography> SKILL 6</Typography>
                            <input type="file" className="adminPanelFileUpload" onChange={(e) => handleImages(e, 6)}
                                accept="image/*" />

                        </div>
                    </div>

                    <div className="adminPanelAbout">
                        <fieldset>
                            <legend>About</legend>
                            <input
                                type="text"
                                placeholder="name"
                                value={about.name}
                                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                type="text"
                                placeholder="title"
                                value={about.title}
                                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                type="text"
                                placeholder="subtitle"
                                value={about.title}
                                onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                type="text"
                                placeholder="description"
                                value={about.title}
                                onChange={(e) => setAbout({ ...about, description: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                type="text"

                                value={about.title}
                                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                type="file"
                                placeholder="Choose Avatar"
                                accept="image/*"
                                onChange={handleAboutImage}
                                className="adminPanelInputs"
                            />
                        </fieldset>
                    </div>
                    <Link to="/admin/timeline">
                        TIMELINE <MdTimeline />
                    </Link>
                    <Link to="/admin/youtube">
                        YOUTUBE <FaYoutube />
                    </Link>
                    <Link to="/admin/project">
                        PROJECTS <AiOutlineProject />
                    </Link>

                    <Button type="submit" variant="contained">
                        Update
                    </Button>
                </form>
                <Button
                    variant="contained"
                    color="error"
                    style={{ display: "block", margin: "4vmax auto" }}
                    onClick={logoutHandler}
                >
                    LOGOUT
                </Button>
            </div>
        </div>
    )
}

export default AdminPanel
