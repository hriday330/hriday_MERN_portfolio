import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from 'three'; // THREE JS
import { FaStarAndCrescent } from 'react-icons/fa';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../images/moon.jpeg"
import venusImage from "../../images/venus.jpeg"
import spaceImage from "../../images/pexels-philippe-donn-1169754.jpeg"
import { Typography } from "@mui/material"
import TimeLine from '../TimeLine/TimeLine';
import {
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
    SiPython,
    SiJava
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';


const Home = () => {

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();

        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });
        const moonGeometry = new THREE.SphereGeometry(2, 64, 64); // makes a moon
        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);// makes a venus

        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
        const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture })
        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus.position.set(8, 5, 5);
        pointLight.position.set(8, 5, 5);
        pointLight.position.set(-8, -5, -5);


        const controls = new OrbitControls(camera, renderer.domElement)
        const lightHelper = new THREE.PointLightHelper(pointLight);
        renderer.setSize(window.innerWidth, window.innerHeight);
        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX < window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;

            }
            if (e.clientX >= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;

            }
            if (e.clientY < window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;

            }
            if (e.clientY >= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;

            }
        })
        scene.add(moon);
        scene.add(venus);
        scene.add(controls);
        pointLight.position.z = 10;
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.add(lightHelper);
        scene.background = spaceTexture;
        camera.position.set(4, 4, 8);
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.01;
            venus.rotation.y += 0.01;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);

        }

        animate();


    }, [])

    return (
        <div className="home" >
            <canvas className="homeCanvas"> </canvas>
            <div className="homeContainer">
                <Typography variant="h3"> TIMELINE</Typography>
                <TimeLine timelines={[1, 2, 3, 4]} />
            </div>
            <div className="homeSkills">
                <Typography variant="h3">SKILLS</Typography>
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQwMVXxN-yI7fdrLKyFcNajn3LyonNQknAQ&usqp=CAU"
                            alt="Face1">
                        </img>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img
                            src="https://wallpaper.dog/large/5522203.jpg"
                            alt="Face2">
                        </img>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img
                            src="https://wallpaper.dog/large/5554827.jpg"
                            alt="Face3">
                        </img>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img
                            src="https://i.pinimg.com/736x/6b/c8/27/6bc827e27fa52b3fa1e417069014835e.jpg"
                            alt="Face4">
                        </img>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img
                            src="https://i.pinimg.com/564x/0b/77/54/0b77542cb8e86bf0e62009f58553e085.jpg"
                            alt="Face5">
                        </img>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img
                            src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8&w=1000&q=80"
                            alt="Face6">
                        </img>
                    </div>

                </div>
                <div className="cubeShadow">
                </div>
                <div className="homeSkillsBox">
                    <SiJavascript />
                    <SiNodedotjs />
                    <SiReact />
                    <SiMongodb />
                    <SiJava />
                    <SiPython />
                    <SiExpress />
                    <SiHtml5 />
                    <SiThreedotjs />
                    <SiCss3 />
                </div>
            </div>

            <div className="homeYoutube">
                <Typography variant="h3"> VIDEOS </Typography>
                <div className="homeYoutubeWrapper">
                    <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        title="Sample Video" />
                    <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        title="Sample Video" />
                    <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        title="Sample Video" />
                    <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        title="Sample Video" />
                    <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        title="Sample Video" />
                    <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&uspq=CAU"
                        title="Sample Video" />

                </div>

            </div>


        </div>
    );
};


export default Home;
