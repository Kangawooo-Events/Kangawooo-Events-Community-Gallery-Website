const sensitivity = 30;
var mouse_x = 0;
var mouse_y = 0;

const artwork_map = new Map([
    [0, ["cammie1", "Cammie and Crycatt", "cammiescorner"]],
    [1, ["carrion1", "Gossip Gills", "_c4rri0n"]],
    [2, ["clipz1", "Hundred Hits", "cl1pz."]],
    [3, ["crycatt1", "Barbie", "Crycatt"]],
    [4, ["hoku1", "The Copper Cat", "Overcooked_rock"]],
    [5, ["hoku2", "Hoku the Traveling Musician", "HokuIsAfish"]],
    [6, ["lan1", "Become Memory", "Lan"]],
    [7, ["mirko1", "Final moments", "mirk0oo"]],
    [8, ["nez1", "Royalty of Iskandar", "Nez"]],
    [9, ["rainbells1", "The kingdom of Solaria", "rainbells"]],
    [10, ["staardumb1", "A Voice for All", "_staardumb"]],
    [11, ["tateyamaayano1", "Mayor Luckystreak", "florrarra"]],
    [12, ["teagar1", "Mirko and the Gang", "teagar_"]],
    [13, ["vevibelle1", "SCORP, Excellence & Efficiency", "vevibelle"]],
]);


window.onload = function() {
    const art_params = new URLSearchParams(window.location.search)
    var artwork_key = art_params.get('artwork')

    const artwork_viewer = document.getElementById("artwork-viewer");
    const artwork = document.getElementById("artwork");
    const title = document.getElementById("title");
    const credit = document.getElementById("credit");
    
    
    update_artwork(artwork_key, artwork_viewer)

    
    document.addEventListener('mousemove', function(event) {
        mouse_x = 0.5 - (event.clientX / window.innerWidth);
        mouse_y = 0.5 - (event.clientY / window.innerHeight);

        artwork_viewer.style.transform = `translate(-50%, -50%) perspective(50cm) rotateX(${mouse_y * sensitivity}deg) rotateY(${-mouse_x * sensitivity}deg) `
    });

    const socials = document.querySelectorAll('.social');
    socials.forEach(social => {
        social.addEventListener("mouseover",function(){
            this.src = this.src.replace('fill', 'line')
        });
        social.addEventListener("mouseout",function(){
            this.src = this.src.replace('line', 'fill')
        });
    });

    const left_arrow = document.getElementById('left-arrow');
    left_arrow.addEventListener("click",function(){
        if (parseInt(artwork_key) <= 0) {
            artwork_key = String(artwork_map.size)
        }
        window.location.replace("?artwork=" + String(parseInt(artwork_key) - 1))
    });

    const right_arrow = document.getElementById('right-arrow');
    right_arrow.addEventListener("click",function(){
        if (parseInt(artwork_key) >= artwork_map.size-1) {
            artwork_key = "-1"
        }
        window.location.replace("?artwork=" + String(parseInt(artwork_key) + 1))
    });
}



function update_artwork(artwork_key, artwork_viewer) {
    if (artwork_key == null) {
        window.location.replace("?artwork=0")
    } else {
        if (artwork_map.get(parseInt(artwork_key))) {
            artwork.src = '/assets/images/artwork/' + artwork_map.get(parseInt(artwork_key))[0] + '.png'
            title.innerHTML  = artwork_map.get(parseInt(artwork_key))[1]
            credit.innerHTML  = "Artwork by " + artwork_map.get(parseInt(artwork_key))[2]
        } else {
            window.location.replace("?artwork=0")
        }
    }
}

