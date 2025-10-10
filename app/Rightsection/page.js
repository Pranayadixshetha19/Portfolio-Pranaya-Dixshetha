"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
export default function Home({ setActivestate }) {
    useEffect(() => {
        // Select all main sections
        const sections = document.querySelectorAll("section[id], div[id='main']");

        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSection = null;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSection = entry.target.id;
                    }
                });

                if (visibleSection) {
                    console.log("Visible:", visibleSection);
                    setActivestate(visibleSection);
                }
            },
            {
                threshold: 0.25, // trigger earlier
                root: null, // viewport
                rootMargin: "-10% 0px -20% 0px", // ensures detection while scrolling
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, [setActivestate]);

    return (
        <div className="">
            <section id="main" className="text-[rgb(122,142,179)]">
                <div className="about"> I’m a full-stack developer passionate about building seamless, high-performance web applications where design meets functionality. I love transforming ideas into intuitive digital experiences—from crafting responsive, accessible interfaces to developing scalable backend systems. Whether it’s implementing robust APIs, optimizing databases, or bringing a designer’s vision to life, I’m driven by a commitment to clean architecture, usability, and technical excellence.
                </div>
                <div className="study my-[30px]"> I am currently pursuing a B.Tech in Information Technology at CMR Engineering College. With a strong passion for coding, full-stack development, and cloud computing, I am dedicated to continuously expanding my technical expertise. I excel in collaborative environments and take pride in designing and implementing efficient, scalable solutions to complex challenges.
                </div>
                <div className="hobbies mt-[30px]"> Outside of academics, I enjoy dancing, painting, and spending time with friends. I also love exploring new ideas and side projects that keep my creativity and curiosity alive. </div>
            </section>
            <section id="About-Section" className="about-section lg:my-[50px]">
                <div className="edu ">
                    <h1 className="font-cal lg:text-[45px] max-lg:text-[40px]">Education</h1>
                    <div className="box flex p-4 gap-10 text-[rgb(122,142,179)] my-5 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="left w-1/4">2022-Present</div> <div className="right">
                            <div className="name text-white">B.Tech in Information Technology</div>
                            <div className="clg-name">CMR Engineering College</div>
                        </div>
                    </div>
                    <div className="box flex p-4 gap-10 text-[rgb(122,142,179)] my-5 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="left w-1/4">2020-2022</div> <div className="right">
                            <div className="name text-white">Intermediate</div>
                            <div className="clg-name">TSWRIES-Jagadgirigutta</div>
                        </div>
                    </div>
                    <div className="box flex p-4 gap-10 text-[rgb(122,142,179)] my-5 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="left w-1/4">2019-2020</div> <div className="right">
                            <div className="name text-white">Secondary School</div>
                            <div className="clg-name">St.Ann's Grammar School</div>
                        </div>
                    </div>
                </div>
                <div className="certificated lg:my-[50px]">
                    <div >
                        <h1 className="font-cal lg:text-[45px] max-lg:text-[40px]">Awards & Achievements</h1>
                        <div className="my-2 ">
                            <div className="box flex flex-col p-4 my-2 text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)] ">
                                <div className="my-1 text-white">Runner-up – Full Stack Hackathon 2024</div>
                                <p >
                                    Developed a Task Management Web App using <span className="text-white">MERN Stack</span> with real-time updates via WebSockets.
                                    Recognized for best UI/UX and efficient backend design.
                                </p>
                            </div>
                            <div className="box flex flex-col p-4 my-2 text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                                <div className="my-1 text-white">Paper Presentation – Modern Java Frameworks</div>
                                <p >
                                    Presented a paper on “Optimizing APIs using Spring Boot and Redis” at the National IT Symposium.
                                    Awarded for practical implementation and performance insights.
                                </p>
                            </div>
                            <div className="box flex flex-col p-4  text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                                <div className="my-1 text-white">AWS Academy Cloud Architecting Certification – AWS Academy</div>
                                <p >
                                    Completed the  <span className="text-white">AWS Academy Cloud Architecting</span> certification, gaining hands-on experience in designing scalable cloud solutions, deploying applications on AWS, managing storage and databases, and implementing secure cloud architectures.
                                </p>
                            </div>
                            <div className="box flex flex-col p-4  text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                                <div className="my-1 text-white">Best Mini Project Award – IT Department 2023</div>
                                <p >
                                     Designed a <span className="text-white">Smart Helmet</span> for workers and bikers using <span className="text-white">Embedded Systems</span>, awarded for <span className="text-white">innovative design and quality</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills lg:my-[50px]">
                    <h1 className=" font-cal lg:text-[45px] text-[40px]">Technical & Soft skills</h1>
                    <div className="grid grid-cols-2 p-4 gap-5 my-5 text-[rgb(122,142,179)] ">
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Frontend</span>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Backend</span>
                            <ul>
                                <li>SQL</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Programming</span>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>C</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Cloud & Tools</span>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>AWS(Foundational)</li>
                                <li>VS Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Project-Section" className="projects md:my-[50px]">
                <h1 className=" lg:text-[45px] max-lg:text-[40px]">Projects</h1>
                <div className="project-1 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                    <div className="title text-[18px]">Learn2live</div>
                    <div className="description text-[rgb(122,142,179)] my-2 ">Learn2Lead System is a web-based platform that recommends suitable careers, and roadmaps based on user skills. It bridges the gap between education and industry by offering personalized guide
                    </div>
                    <div className="skills ">
                        <ul className="flex gap-2 flex-wrap text-[15px]">
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Next.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Express</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Tailwind CSS</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">REST APIs</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Authentication</li>
                        </ul>
                    </div>
                </div>
                <div className="project-2 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                    <div className="title text-[18px]">Real-Time Collaboration Tool</div>
                    <div className="description text-[rgb(122,142,179)] my-2 "> Built a **Google Docs-like collaborative editor** with **real-time updates** and live cursors.
                    </div>
                    <div className="skills ">
                        <ul className="flex gap-2 flex-wrap text-[15px]">
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Socket.IO</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">React</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Express</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">TailwindCSS</li>
                        </ul>
                    </div>
                </div>
                <div className="project-2 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                    <div className="title text-[18px]">E-commerce Platform with Microservices</div>
                    <div className="description text-[rgb(122,142,179)] my-2 ">Designed a scalable e-commerce web app with **microservices architecture**, order management, and payment integration.
                    </div>
                    <div className="skills ">
                        <ul className="flex gap-2 flex-wrap text-[15px]">
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">React</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Redis</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Docker</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Express</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">TailwindCSS</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Stripe API</li>
                        </ul>
                    </div>
                </div>
                <div className="project-2 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                    <div className="title text-[18px]">Real-Time Data Dashboard</div>
                    <div className="description text-[rgb(122,142,179)] my-2 ">Created a **real-time analytics dashboard** for monitoring KPIs and live server metrics.
                    </div>
                    <div className="skills ">
                        <ul className="flex gap-2 flex-wrap text-[15px]">
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Next.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">WebSockets</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Chart.js</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                            <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">TailwindCSS</li>
                        </ul>
                    </div>
                </div>

                <div className="text-[rgb(122,142,179)] m-4 mt-[50px] text-[12px]">Crafted in Visual Studio Code using Next.js and Tailwind CSS, deployed on vercel, and set in the Inter typeface.</div>
                <div className="rights p-4 flex gap-1 items-center text-[rgb(122,142,179)] ">
                    <img src="copyrights.svg" className="" width={18} alt="" />
                    <div className="text-[12px]">2025 Pranaya Dixshetha. All rights reserved.</div>
                </div>
            </section>
        </div>
    );
}
