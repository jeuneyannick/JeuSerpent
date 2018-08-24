window.onload = function()
{
   var canvasWidth = 900; 
   var canvasHeight = 600; 
   var blocksize = 30; 
   var ctx; 
   var delay = 100; 
   var snakee; 
   init(); 

    function init()
    {
    var canvas = document.createElement('canvas'); // creation de l'élément canvas
    canvas.width = canvasWidth; //Largeur
    canvas.height = canvasHeight; //hauteur
    canvas.style.border = "1px solid"; // style des bordures
    document.body.appendChild(canvas);//Insertion du canvas dans le body
    ctx = canvas.getContext('2d');// creation du contexte necessaire pour pouvoir dessiner
    snakee = new Snake([6,4],[5,4],[4,4]); 
    refreshCanvas(); 

    }
     
    function refreshCanvas()
    {   
       
        ctx.clearRect(0,0, canvasWidth, canvasHeight); 
        snakee.draw(); 
        setTimeout(refreshCanvas,delay); 

    }

    function drawBlock(ctx,position)
    {
            var x = position[0] * blocksize; 
            var y = position[1] * blocksize; 
            ctx.fillRect(x,y, blocksize, blocksize); 
    }

    function Snake(body)
    {
       this.body = body; 
       this.draw = function()
       {
           ctx.save(); 
           ctx.fillStyle = "#ff0000"; 
           for (var i = 0; i< this.body.length; i++)
           {
                 drawBlock(ctx,this.body[i]); 
           }
           ctx.restore();
       };
    }
    
};