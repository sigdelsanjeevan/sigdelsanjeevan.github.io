window.onload = pageLoad;

function pageLoad() {

    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    var myCheck = "hehe";

    var emptySpace = { x : "300", y : "300" };
    $("#shufflebutton").click(function (){
        let random = 100 + Math.floor(Math.random() * 100) ;
        for(let i = 0; i<random; i++){
            let movableDivs = [];
            $(".puzzlepiece").wrap(function(){
               if($(this).hasClass("movablepiece")){
                movableDivs.push($(this));
            }
        });
            let random = Math.floor(Math.random()*movableDivs.length);
            if(movableDivs[random]){
               movePieces(movableDivs[random]);
           }
       }
   });

    init();
    updateMovable();
    startPlaying();



    function init() {
        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            // div.style.backgroundImage = 'url("img/mario.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            
            // store x and y for later
            div.x = x;
            div.y = y; 
        }
    }


   function startPlaying() {
    $(document).on('click', '#puzzlearea div.movablepiece', function(){
        movePieces($(this));
    });
}

function movePieces(selectedDiv) {
    var myX = selectedDiv.css("left").slice(0, -2);
    var myY = selectedDiv.css("top").slice(0, -2);
    selectedDiv.css("left", getEmptyX() + 'px');
    selectedDiv.css("top", getEmptyY() + 'px');
    updateEmptySpace(myX, myY);
    updateMovable();
}

function updateEmptySpace(testX, testY) {
    emptySpace.x = testX;
    emptySpace.y = testY;
}

function getEmptyX() {
    return emptySpace.x;
}

function getEmptyY() {
    return emptySpace.y;
}

function updateMovable() {
    var theX = parseInt(getEmptyX());
    var theY = parseInt(getEmptyY());

    $("#puzzlearea div").each(function() {
        cssX = parseInt($(this).css("left"));
        cssY = parseInt($(this).css("top"));

        $(this).removeClass("movablepiece");

        if(cssX == theX || cssY == theY) {
            if(cssX == theX) {
                if(cssY == theY - 100 || cssY == theY + 100) {
                    $(this).addClass("movablepiece");
                }
            } else {
                if(cssX == theX - 100 || cssX == theX + 100) {
                    $(this).addClass("movablepiece");
                }
            }
        } 
    });
}



}