import React from "react"
import MemeAPIData from "./MemeAPIData"

function MemeInputForm(){
    /* adding an object to React state to store topText, bottomTExt and memeImages given by the user. Initailly set to a default value of empty strings and an meme image */
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'Images/girl-walking-past-meme.jpg'
    })

    /* state variable that contains data from MemeAPIData */
    const [allMemes, setAllMemes] = React.useState(MemeAPIData)

    /* this function will randomly select a meme image from meme API data to set as the current image to be displayed on screen. */
    function generateMeme(){
        const memeArray = allMemes.data.memes
        /* using math.random to select a random index from memesArray. Then I'm using that index to select the url for the meme at that index and passing the url into the image tag to change the meme currently being displayed on the screen by changing state.  */
        const memeIndex = Math.floor(Math.random() * memeArray.length)
        /* changing state object to update to the new image */
        setMeme(prevObject => ({...prevObject,
            randomImage: `${memeArray[memeIndex].url}`}))
    }

    return (
        <div className="meme-form">
            <div className="meme-inputs">
                <label for="first-line">
                    <input name='first-line' type='text' placeholder="Enter text for the top!"></input>
                </label>
                <label for="second-line">
                    <input name='second-line' type='text' placeholder="Enter text for the bottom!"></input>
                </label>
            </div>
            <button type="submit" className="submit-meme-form" onClick={generateMeme}>Make A MEME!</button>
            <img src={meme.randomImage} alt='' className="current-meme"/>
        </div>
    )
}

export default MemeInputForm