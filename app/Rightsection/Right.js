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
                <div className="about"> I&apos; m a full-stack developer passionate about building seamless, high&#45;performance web applications where design meets functionality. I love transforming ideas into intuitive digital experiences&#45;from crafting responsive, accessible interfaces to developing scalable backend systems. Whether it&apos; s implementing robust APIs, optimizing databases, or bringing a designer&apos; s vision to life, I&apos; m driven by a commitment to clean architecture, usability, and technical excellence.
                </div>
                <div className="study my-[30px]"> I am currently pursuing a B.Tech in Information Technology at CMR Engineering College. With a strong passion for coding, full&#45;stack development, and cloud computing, I am dedicated to continuously expanding my technical expertise. I excel in collaborative environments and take pride in designing and implementing efficient, scalable solutions to complex challenges.
                </div>
                <div className="hobbies mt-[30px]"> Outside of academics, I enjoy dancing, painting, and spending time with friends. I also love exploring new ideas and side projects that keep my creativity and curiosity alive. </div>
            </section>
            <section id="About-Section" className="about-section lg:my-[50px]">
                <div className="edu ">
                    <h1 className="font-cal lg:text-[45px] my-5 max-lg:text-[40px]">Education</h1>
                    <div className="box flex p-4 gap-10 text-[rgb(122,142,179)] my-5 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="left w-1/4">2022&#45;Present</div> <div className="right">
                            <div className="name text-white">B.Tech in Information Technology</div>
                            <div className="clg-name">CMR Engineering College</div>
                        </div>
                    </div>
                    <div className="box flex p-4 gap-10 text-[rgb(122,142,179)] my-5 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="left w-1/4">2020&#45;2022</div> <div className="right">
                            <div className="name text-white">Intermediate</div>
                            <div className="clg-name">TSWRIES-Jagadgirigutta</div>
                        </div>
                    </div>
                    <div className="box flex p-4 gap-10 text-[rgb(122,142,179)] my-5 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="left w-1/4">2019&#45;2020</div> <div className="right">
                            <div className="name text-white">Secondary School</div>
                            <div className="clg-name">St.Ann&apos;s Grammar School</div>
                        </div>
                    </div>
                </div>
                <section id="Project-Section" className="projects md:my-[50px]">
                    <h1 className=" lg:text-[45px] max-lg:text-[40px]">Projects</h1>
                    <div className="project-1 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="title text-[18px]">AI Career Advisory Platform</div>
                        <div className="description text-[rgb(122,142,179)] my-2 ">Built an AI&#45;powered career recommendation platform using a Random Forest Classifier to suggest personalized career paths based on students' skills, interests, and academic background.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 ">Developed 20&#43; REST APIs with JWT authentication, role&#45;based access control, and recommendation dashboards using Node.js, Express.js, and MongoDB.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 ">Built an end&#45;to&#45;end ML pipeline with Scikit&#45;learn and deployed predictions through REST APIs with response time under 1 second.
                        </div>
                        <div className="skills ">
                            <ul className="flex gap-2 flex-wrap text-[15px]">
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">React</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Express.js</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Tailwind CSS</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">REST APIs</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Authentication</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Python</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Machine Learning</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Deep Learning</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-2 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="title text-[18px]">Greenly - Full-Stack Plant Marketplace with AI Features</div>
                        <div className="description text-[rgb(122,142,179)] my-2 "> Built a full&#45;stack plant marketplace for 1,000&#43; users with Buyer, Seller, and Admin roles using Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 ">Developed 30&#43; REST APIs, real&#45;time chat, order management, and dashboards with JWT authentication and Socket.IO.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 ">Improved application performance by 35&#37; using Next.js SSR, code splitting, and database optimization.
                        </div>
                        <div className="skills ">
                            <ul className="flex gap-2 flex-wrap text-[15px]">
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">WebSocket</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">React</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Express</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-2 my-5 p-4 text-white hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                        <div className="title text-[18px]">Real-Time Chat Application</div>
                        <div className="description text-[rgb(122,142,179)] my-2 "> Developed a full&#45;stack real&#45;time chat application supporting group and private messaging using Socket.IO and WebSockets.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 "> Built secure JWT&#45;based authentication with protected routes and authorization middleware.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 "> Designed MongoDB schemas for users, messages, and chat rooms with reliable message persistence.
                        </div>
                        <div className="description text-[rgb(122,142,179)] my-2 "> Developed a responsive React.js interface with online/offline status indicators and message read receipts.
                        </div>

                        <div className="skills ">
                            <ul className="flex gap-2 flex-wrap text-[15px]">
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">WebSocket</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">React</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">JWT</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">Node.js</li>
                                <li className="border-0 bg-[rgb(28,42,70)] text-cyan-300  p-1 px-2 rounded">MongoDB</li>
                            </ul>
                        </div>
                    </div>



                    
                </section>
                {/* <div className="experience lg:my-[50px]">
                    <div >
                        <h1 className="font-cal lg:text-[45px] text-[30px] max-lg:text-[40px]">Experience</h1>
                        <div className="my-2 ">
                            <div className="box flex flex-col p-4 my-2 text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)] ">
                                <div className="my-1 text-white">C A C Innovation 2025</div>
                                <ul>
                                    <li className="">
                                        Developed full-stack MERN applications integrated with Machine Learning and Deep Learning models to
                                        enhance scalability and user experience.</li>
                                    <li> Built responsive React interfaces and optimized performance for faster load times.</li>
                                    <li>
                                        Designed RESTful APIs and implemented real-time features using WebSockets.
                                    </li>
                                    <li>Applied Python-based ML/DL models for data analysis and intelligent feature development. Utilized knowledge of AI algorithms, data analytics, statistics, and visualization tools. Worked with cloud concepts and demonstrated strong problem-solving, teamwork, and communication skills.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="certificated lg:my-[50px]">
                    <div >
                        <h1 className="font-cal lg:text-[45px] text-[30px] max-lg:text-[40px]">Awards &amp; Achievements</h1>
                        <div className="my-2 ">
                            <div className="box flex flex-col p-4 my-2 text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)] ">
                                <div className="my-1 text-white">Runner&#45;up &#45; Full Stack Hackathon 2024</div>
                                <p >
                                    Developed a Task Management Web App using <span className="text-white">MERN Stack</span> with real&#45;time updates via WebSockets.
                                    Recognized for best UI/UX and efficient backend design.
                                </p>
                            </div>
                            <div className="box flex flex-col p-4 my-2 text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                                <div className="my-1 text-white">Paper Presentation &#45; Modern Java Frameworks</div>
                                <p >
                                    Presented a paper on “Optimizing APIs using Spring Boot and Redis” at the National IT Symposium.
                                    Awarded for practical implementation and performance insights.
                                </p>
                            </div>
                            <div className="box flex flex-col p-4  text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                                <div className="my-1 text-white">AWS Academy Cloud Architecting Certification &#45; AWS Academy</div>
                                <p >
                                    Completed the  <span className="text-white">AWS Academy Cloud Architecting</span> certification, gaining hands&#45;on experience in designing scalable cloud solutions, deploying applications on AWS, managing storage and databases, and implementing secure cloud architectures.
                                </p>
                            </div>
                            <div className="box flex flex-col p-4  text-[rgb(122,142,179)] hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                                <div className="my-1 text-white">Best Mini Project Award &#45; IT Department 2023</div>
                                <p >
                                    Designed a <span className="text-white">Smart Helmet</span> for workers and bikers using <span className="text-white">Embedded Systems</span>, awarded for <span className="text-white">innovative design and quality</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills lg:my-[50px]">
                    <h1 className=" font-cal lg:text-[45px] max-lg:text-[40px] text-[30px]">Technical &amp; Soft skills</h1>
                    <div className="grid grid-cols-2 p-4 gap-5 my-5 text-[rgb(122,142,179)] ">
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Frontend</span>
                            <ul>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>TailwindCSS</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Backend</span>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Python</li>
                                <li>Rest API</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Programming</span>
                            <ul>
                                <li>C++</li>
                                <li>C</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Cloud &amp; Tools</span>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Postman</li>
                                <li>GitHub</li>
                                <li>Jupyter Notebook</li>
                                <li>VS Code</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                        <div className="program lg:p-4 hover:shadow-[0px_0px_1px_0px_white]  hover:bg-[rgba(24,58,97,0.2)]">
                            <span className="text-white">Soft Skills</span>
                            <ul>
                                <li>Project Management</li>
                                <li>Communication</li>
                                <li>Leadership</li>
                                <li>Time Management</li>
                                <li>Adaptability</li>
                                <li>Problem Solving</li>
                                <li>Teamwork</li>
                                <li>Creativity</li>
                            </ul>
                        </div>
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
