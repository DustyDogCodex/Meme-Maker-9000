/* simple header component with a logo and some introductory text for the app */
import Pikachu from '../Images/Surprised_Pikachu.jpg'

function Header(){
    return(
        <header>
            <div className="header-left-side">
                <img 
                    src={Pikachu} 
                    alt="confused Pikachu meme" 
                    className="logo-pic"
                />
            </div>

            <div className="header-right-side">
                <h1>MEME MAKER 9000</h1>
                <p>Come get them while they're H O T!</p>
            </div>
        </header>
    )
}

export default Header