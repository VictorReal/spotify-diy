import React from "react";

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <ul> 
                    <li><a href="https://victorreal.github.io/cv_dev/">CV</a></li>
                    <li><a href="https://victorreal.github.io/list-of-projects/">Projects list</a></li>
                    <li><a href="https://www.linkedin.com/in/victor-nastoyashchiy-a78781201/">LinkedIn</a></li>
                    <li><a href="https://t.me/victors_reality">Telegram</a></li>
                    <li><a href="https://github.com/VictorReal/">GitHub</a></li>
                </ul>
            </div>
        )

    }
} 

export default Footer;