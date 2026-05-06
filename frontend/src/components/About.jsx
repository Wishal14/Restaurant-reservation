import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about food.</p>
                    </div>
                    <p className='mid'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus atque magni eum alias, reiciendis dolores
                        nobis corporis reprehenderit eius, voluptate officiis, dolore at facere quisquam odit quas ab odio fugit unde
                        ipsum eaque possimus minima dolorem non! Saepe eaque obcaecati modi consequatur.
                        Possimus, cum voluptates modi eveniet suscipit ullam. Neque?
                    </p>
                    <Link to={"/"}>Explore Menu <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    );
};

export default About