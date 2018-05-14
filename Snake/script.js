window.onload = function(){
   
    var canvas = document.createElement('canvas'); // creation de l'élément canvas
    canvas.width = 1000; //Largeur
    canvas.height = 600; //hauteur
    canvas.style.border = "1px solid"; // style des bordures
    document.body.appendChild(canvas);//Insertion du canvas dans le body
    
    var ctx = canvas.getContext('2d');// creation du contexte necessaire pour pouvoir dessiner
    ctx.fillStyle = "#ff0000";// définition de la couleur avec laquelle on va dessiner
    ctx.fillRect(30,30,  100, 50);// Les deux premières valeurs sont la distance verticale et horizontale à patir de la quelle on place le rectangle. 
    //les deux autres sont sa largeur et sa hauteur
};