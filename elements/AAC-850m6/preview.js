function(instance, properties) {

    document.body.style.height = properties.bubble.height() + 'px';
    document.body.style.width = properties.bubble.width() + 'px';
    document.body.style.backgroundColor = "#FFFFFF";

    let shape = instance.canvas;
    shape.style.height = "100%";
    shape.style.width = "100%";
    switch (properties.bubble.background_style()) {
        case "bgcolor" :
            shape.style.backgroundColor = properties.bubble.bgcolor();
            break;
        case "image" : 
            shape.style.backgroundImage = "url('"+properties.bubble.background_image()+"')";
            break;
        case "gradient" : 
            shape.style.backgroundColor = "#000000";
            break;
        default :
            shape.style.backgroundColor = "#000000";
	}

    switch (properties.type) {
        case "circle" :
            shape.style.clipPath = "circle(40%)";
            break;
        case "ellipse":
            shape.style.clipPath = "ellipse(40% 30%)";
            break;
        case "triangle" :
            shape.style.clipPath = "polygon(50% 0, 0% 100%, 100% 100%)";
            break;
        case "star" :
            shape.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;
        case "pentagon" :
            shape.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
            break;
        case "hexagon" :
            shape.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
            break;
        case "dome" :
            shape.style.clipPath = "circle(50% at 50% 70%)";
            break;
        default :
            shape.style.clipPath = "polygon(" + properties.vertices + ")";        
    }
    
    shape.style.transform = "rotate(" + properties.rotate + "deg)";


}