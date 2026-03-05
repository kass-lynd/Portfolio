"use client";
import "./homeViewport.css";

export default function HomeViewport() {
    return (
        <div
            className='home-viewport'
            style={{ backgroundImage: `url('/viewportBackground.svg')` }}>
            <div className='home-viewport-content'>
                <div className='title-text'>
                    <h1 className='home-title'>Kassidy</h1>
                    <h2 className='home-description'>Digital・Traditional・Mixed Media Design</h2>
                </div>
                <div className='intro-paragraph'>
                    <p className='intro'>
                        Art is the way I communicate, connect, and solve problems, and I carry that
                        creative spirit into every project I take on. My background brings together
                        art, teaching, and leadership, built through years of creating, coaching,
                        teaching, and managing the organized chaos of a busy bar floor. Each
                        experience has shaped how I design with intention, empathy, and a spark of
                        joy. I look forward to bringing your ideas to life.
                    </p>
                </div>
            </div>
        </div>
    );
}
