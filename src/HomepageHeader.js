import logo from './img/logo.png'

export default function HomepageHeader(){
    return (
        <header class="homepage-header">
            <img src={logo}></img>
            <nav class="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}