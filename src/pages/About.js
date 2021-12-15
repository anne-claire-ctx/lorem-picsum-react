import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="about">
                <h1>A propos</h1>
                <br/>
                <p>Bienvenue sur Lorem Picsum, une plateforme vous permettant de récupérer facilement des images sans droit pour vos projets.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolores nostrum id eius quibusdam pariatur quod! Voluptates aut minima facilis quis error accusamus cumque cum provident repellat id sapiente illo dolore optio ea obcaecati saepe quae molestias, iste aspernatur dolor dignissimos culpa fugit voluptatibus? Sed ullam labore rem aut quod? Exercitationem ducimus expedita provident commodi voluptatum, temporibus modi fugit. Ipsam saepe sequi quod et repudiandae repellendus mollitia temporibus minus. Necessitatibus in doloribus minima repudiandae nihil libero numquam totam deserunt sint deleniti, odio accusamus sed velit dolorum magni. Quam, aliquam dolore possimus quo dolorem asperiores harum dolores cumque? Non, hic, assumenda animi dolore ut reprehenderit cupiditate cumque, id neque enim deleniti impedit iste! Ipsam corporis expedita fuga culpa quidem esse est rem dignissimos neque iure minus animi eos, odio in omnis ex impedit eius, mollitia fugit, illum non perspiciatis. Voluptatibus, assumenda.</p>
            </div>
        </div>
    );
};

export default About;