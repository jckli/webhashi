function randomBackground(){
    var backgrounds = [
        "src/backgrounds/bg1.jpg", 
        "src/backgrounds/bg2.jpg", 
        "src/backgrounds/bg3.jpg", 
        "src/backgrounds/bg4.jpg", 
        "src/backgrounds/bg5.jpg", 
        "src/backgrounds/bg6.jpg", 
        "src/backgrounds/bg7.jpg", 
        "src/backgrounds/bg8.jpg", 
        "src/backgrounds/bg9.png", 
        "src/backgrounds/bg10.jpg"
    ];
    document.getElementsByTagName('body')[0].style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), " + 'url(' + backgrounds[Math.floor(Math.random() * backgrounds.length)] + ')';
}

function menu(x){
    switch(x){
        case "home":
            var div = `
            <div id="menu">
            <h1>ohashi</h1>
            <h3>オオハシ</h3>
            <p>developer | editor | anime enthusiast</p>
            <p>
                <a href="https://twitter.com/notjackli" target="_blank">twitter - </a> 
                <a href="https://github.com/ohashizu" target="_blank">github - </a>
                <a href="https://myanimelist.net/profile/toucane" target="_blank"> mal </a>
            </p>
        </div>
        `
            $("#menu").replaceWith(div)
            break;
        case "about":
            var div = `
            <div id = "menu">
            <h1>hey! my name is ohashi</h1>
            <p>thanks for visiting my website. currently,<br>
            im not doing anything.
            </p>
        </div>
        `
            $("#menu").replaceWith(div)
            break;
        case "contacts":
            var div = 
            `
            <div id = "menu">
            <p>discord: ohashi#0001</p>
            <p>mail: notjackhli@gmail.com</p>
        </div>
            `
            $("#menu").replaceWith(div)
            break;
        case "projects":
            var div = `
            <div id = "menu">
            <h1>no projects right now</h1>
        </div>
        `
            $("#menu").replaceWith(div)
            break;
    }
}