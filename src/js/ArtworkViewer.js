window.onload = function () {
    const artwork = document.getElementById("artwork-viewer");
    const sensitivity = 30;

    document.addEventListener('mousemove', function(event) {
        var mouse_x = 0.5 - (event.clientX / window.innerWidth);
        var mouse_y = 0.5 - (event.clientY / window.innerHeight);

        artwork.style.transform = `translate(-50%, -50%) perspective(50cm) rotateX(${mouse_y * sensitivity}deg) rotateY(${-mouse_x * sensitivity}deg) `
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
    left_arrow.addEventListener("mouseover",function(){
        this.src = this.src.replace('fill', 'line')
    });
    left_arrow.addEventListener("mouseout",function(){
        this.src = this.src.replace('line', 'fill')
    });
    
}




