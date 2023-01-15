function MemeInputForm(){
    return (
        <form action="" method="get" className="meme-form">
            <div className="meme-inputs">
                <label for="first-line"><input name='first-line' type='text' placeholder="Enter text for the top!"></input></label>
                <label for="second-line"><input name='second-line' type='text' placeholder="Enter text for the bottom!"></input></label>
            </div>
            <button type="submit" className="submit-meme-form">Make A MEME!</button>
        </form>
    )
}

export default MemeInputForm