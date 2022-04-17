import React from "react"
import TrollFace from "./TrollFace.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={TrollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">By <a href="https://github.com/aphatheology" target="_blank">Aphatheology</a></h4>
        </header>
    )
}