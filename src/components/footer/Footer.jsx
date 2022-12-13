import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Parag</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>


                <li>
                    <a href="#portfolio" className="footer_link">Portfolio</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://www.snapchat.com/add/parag315?share_id=a6HFLZP8EAQ&locale=en-IN" className="footer_social-link" target="_blank">
           <i class="bx bxl-snapchat"></i>
            </a>

           

            <a href="https://www.instagram.com/parag3195?r=nametag" className="footer_social-link" target="_blank">
           <i class="bx bxl-instagram-alt"></i>
           </a>
            </div>

            <span className="footer_copy">&#169; Parag. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer