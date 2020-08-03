window.onload = function() {
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 100; // délais 
    var snakee;

    init(); // appelle de init()


    function init() {
        
       

        var canvas = document.createElement('canvas'); // canvas permet de dessiner sur l'HTML
        // document est corps entier du HTML
        canvas.width = canvasWidth; // taille du canvas
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas); //attacher le canvas dans le body HTML

        ctx = canvas.getContext('2d'); //le contexte pour dessiner en 2 dimensions
        snakee = new Snake([[6,4],[5,4],[4,4]]);
        refreshCanvas();


    }

    function refreshCanvas() {


        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // effacer le rectangle
        snakee.draw(); // dessiner le snake
        setTimeout(refreshCanvas, delay); // Appelle de refreshCanvas en fonction de delay passé

    }


    function drawBlock(ctx, position) {
        var x = position[0] * blockSize; //position x
        var y = position[1] * blockSize; //position y
        ctx.fillRect(x, y, blockSize, blockSize);


    }

    function Snake(body) {
        this.body = body;
        this.draw = function() // dessiner le snake
            {
                ctx.save(); //sauvgarder le contexte comme il était
                ctx.fillStyle = "#ff0000"; //couleur 

                for (var i = 0; i < this.body.lenght; i++) //itérer sur les blocs du snake
                {
                    drawBlock(ctx, this.body[i]);

                }
                ctx.restore(); //remettre le snake comme il était


            };
    }




}