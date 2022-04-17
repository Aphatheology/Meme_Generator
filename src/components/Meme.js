import React from "react"

export default function Meme() {
    let [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            imgUrl: "https://i.imgflip.com/261o3j.jpg"
        })
        
    
    const [allMemes, setAllMemes] = React.useState({})
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            
    }, [])

    function changeImage() {
        let randNo = Math.floor(Math.random() * 100)
        let memeImgUrl = allMemes[randNo].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                imgUrl: memeImgUrl
            }
        })
        
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={changeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            

            <div id="drag" className="meme">
                {/* {meme.imgUrl && <img className="meme-img" src={meme.imgUrl} alt="Meme" />} */}
                <img className="meme-img" src={meme.imgUrl} alt="Meme" />
                <h2 id="dragtop" className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}