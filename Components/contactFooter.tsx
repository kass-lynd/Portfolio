"use client";
import "./contactFooter.css";

export default function ContactFooter() {
    return (
        <div className='footer'>
            <div
                className='footer-container'
                style={{ backgroundImage: "url('/contactBackground.svg')" }}>
                <div className='footer-content'></div>
            </div>
        </div>
    );
}
