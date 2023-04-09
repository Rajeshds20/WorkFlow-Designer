import React from "react";

import "../css/contact.css"
import Header from "../components/Header"

export default function Contact() {
    return (
        <>
            <Header />
            <div class="about-section">
                <h1>About </h1>
                <p>I ama a React and Web Developer. I love Coding and Development</p>
                <p>I am studying in 3rd Year B.Tech in Computer Science and Engineering from Jawaharlal Nehru Technological University, Anantapur.</p>
            </div>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="https://github.com/Rajeshds20.png" alt="Jane" style={{ width: "100%" }}></img>
                        <div class="container">
                            <h2>Devangam Sajja Rajesh</h2>
                            <p class="title">Student Developer</p>
                            <a href="https://www.github.com/rajeshds20">Github</a>
                            <p></p>
                            <p>dsrajesh71@gmail.com</p>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/devangamsajjarajesh"><button class="button">Contact</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}