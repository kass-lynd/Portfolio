"use client";
import "./contactFooter.css";

export default function ContactFooter() {
    return (
        <div className='footer'>
            <div
                className='footer-container'
                style={{ backgroundImage: "url('/contactBackground.svg')" }}>
                <div className='footer-content'>
                    <div className='get-in-touch'>
                        <h2 className='footer-subheading'>get in touch</h2>
                        <p className='footer-text'>
                            Have a project in mind? Looking to collaborate? Whether you're launching
                            a brand, designing a website, or elevating your digital presence, I'd
                            love to get in touch.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
