import frontpagenotebook from './img/frontpagenotebook.webp'

export default function HomepageJumbotron (){
    return (
        <div class="homepage-jumbotron">
            <div class="text">
                <h3>We bring</h3>
                <h2>The beauty</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="jumboimg">

            <div class="polaroid">
            <img src={frontpagenotebook}></img>
            </div>
            </div>
        </div>
    )
}