"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";


const Left = ({ activestate }) => {
    const links = [
        { id: "main", label: "HOME" },
        { id: "About-Section", label: "ABOUT" },
        { id: "Project-Section", label: "PROJECT" }
    ]

    return (
        <div className="left-section">
            <h1 className="name lg:text-[50px] max-lg:text-[40px] font-cal text-white">
                Pranaya Dixshetha
            </h1>

            <div className="intro text-[rgb(122,142,179)] mb-5 w-1/2">
                I build full-stack web apps with seamless UI and robust backend.
            </div>

            <div className="list py-20 max-lg:hidden">
                <ul>
                    {links.map((link) => (
                        <li key={link.id} className="list-none py-1 text-[13px]">
                            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            href={`#${link.id}`} className="flex items-center gap-2 group transition-all duration-150 ease-in-out">
                                <span className={`w-8 h-px bg-[rgb(122,142,179)] transition-all duration-150 ease-in-out group-hover:w-16 group-hover:bg-white ${activestate === link.id ? "w-16 bg-white" : ""}`}></span>
                                <h1 className={`home text-[rgb(122,142,179)] transition-all duration-150 ease-in-out group-hover:text-white font-cal ${activestate === link.id ? "text-white" : "group-hover:text-white"}`}>
                                    {link.label}
                                </h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <footer>
                <div className="links flex gap-3 my-80 max-lg:my-5">
                    <a
                        href="https://www.linkedin.com/in/pranaya-dixshetha-kalvala/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin hover:text-white text-[rgb(122,142,179)]"
                    >
                        <img
                            width="30"
                            className="hover:brightness-0 hover:invert"
                            src="linkdin.svg"
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/deekshithaaa_19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta hover:text-white text-[rgb(122,142,179)]"
                    >
                        <img
                            width="30"
                            className="hover:brightness-0 hover:invert"
                            src="insta.svg"
                            alt="Instagram"
                        />
                    </a>
                    <a 
                        href="mailto:pranayadixshetha123@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email hover:text-white text-[rgb(122,142,179)]"
                    >
                        <img
                            width="30"
                            className="hover:brightness-0 hover:invert"
                            src="email.svg"
                            alt="Email"
                        />
                    </a>
                    {/* <a
                        href="tel:+919491814173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile hover:text-white text-[rgb(122,142,179)]"
                    >
                        <img
                            width="30"
                            className="hover:brightness-0 hover:invert"
                            src="mobile.png"
                            alt="Mobile"
                        />
                    </a> */}
                    <a
                        href="https://github.com/Pranayadixshetha19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gitup hover:text-white "
                    >
                        <img
                            width="35"
                            className="hover:brightness-0 hover:invert"
                            src="gitup.svg"
                            alt="Mobile"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );

};

export default Left;


