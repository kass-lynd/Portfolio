"use client";
import "./contactButton.css";

export default function ContactButton() {
    return (
        <a href='/contact' className='contact-button'>
            <span className='button-text'>CONTACT</span>
            <span className='plus-icon'>+</span>
        </a>
    );
}
