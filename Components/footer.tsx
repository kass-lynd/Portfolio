"use client";
import "./footer.css";

export default function Footer() {
    return (
        <div className='footer'>
            <div
                className='footer-container'
                style={{ backgroundImage: "url('/footerBackground.svg')" }}>
                <div className='footer-content'>
                    <div className='stay-connected'>
                        <h2 className='footer-subheading'>Stay Connected</h2>
                        <h1 className='email'>kass_lynnd@icloud.com</h1>
                        <p className='footer-text'>
                            Design is everywhere. From packaging to digital experiences, design
                            influences how we see and interact with the world.
                            <br />
                            <br />
                            My goal is to create visuals that feel intentional, engaging, and human.
                            Let’s connect and bring ideas to life.
                        </p>
                    </div>
                    <div className='page-links'>
                        <ul className='links-list'>
                            <li className='link-item'>Home</li>
                            <li className='link-item'>About</li>
                            <li className='link-item'>Projects</li>
                            <li className='link-item'>Case Study</li>
                        </ul>
                    </div>
                    <div className='social-links'>
                        <ul className='social-list'>
                            <li className='social-item'>LinkedIn</li>
                            <li className='social-item'>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className='copyright'>
                        © 2026 Kassidy Dreher Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
