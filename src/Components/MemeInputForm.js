import React from "react"
import defaultMeme from '../Images/girl-walking-past-meme.jpg'

function MemeInputForm(){
    /* adding an object to React state to store topText, bottomTExt and memeImages given by the user. Initailly set to a default value of empty strings and an meme image */
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: defaultMeme
    })

    /* state variable that contains data for all memes returned from API call, initial state is empty array. */
    const [allMemes, setAllMemes] = React.useState([])

    /* API call to get memes */
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(info => setAllMemes(info.data.memes))
    }, [])

    /* this function will randomly select a meme image from meme API data to set as the current image to be displayed on screen. */
    function generateMeme(){
        /* using math.random to select a random index from memesArray. Then I'm using that index to select the url for the meme at that index and passing the url into the image tag to change the meme currently being displayed on the screen by changing state.  */
        const memeIndex = Math.floor(Math.random() * allMemes.length)
        /* changing state object to update to the new image */
        setMeme(prevObject => ({...prevObject,
            randomImage: `${allMemes[memeIndex].url}`}))
    }

    function updateMemeText(event){
        setMeme(prevMemeInfo => (
            { ...prevMemeInfo,
                [event.target.name]: event.target.value
            }
        ))
    }

    return (
        <div className="meme-form">
            <div className="meme-inputs">
                <label for="topText">
                    <input name='topText' type='text' placeholder="Enter text for the top!" value={meme.topText} onChange={updateMemeText}></input>
                </label>
                <label for="bottomText">
                    <input name='bottomText' type='text' placeholder="Enter text for the bottom!" value={meme.bottomText} onChange={updateMemeText}></input>
                </label>
            </div>
            <button type="submit" className="submit-meme-form" onClick={generateMeme}>Give me a new meme!</button>
            <div className="meme-display">
                <img src={meme.randomImage} alt='' className="current-meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeInputForm