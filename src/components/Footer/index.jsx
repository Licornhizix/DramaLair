import React from "react";
import Counter from '../Counter';
import "../../styles/footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="copyright">© 2023 Doomdrama. All rights reserved</div>
            <div className="counter">
                <Counter />
            </div>
        </div>
    )
}

export default Footer;