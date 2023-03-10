import React from "react";
import { Link } from "react-router-dom";
import "../../styles/whispergate.css"



function Error () {
    return (
        <div className="content">
        <div className="p404">
            <div className="page404">
                <h1>404</h1>
                    <p>
                        <span>Oups! La page que </span>vous demandez n'existe pas.
                    </p>
            </div>
            <Link to ="/" className="lin">
                Retournez sur la page d'accueil
            </Link>
        </div>
        </div>
    )
}

export default Error;