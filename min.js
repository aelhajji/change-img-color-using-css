var colorr = document.getElementById('color-chager');
    //random color 
    function rundemColor(){
        return Math.floor(Math.random()*255);
    }
    function changeColor(){
        colorr.style.backgroundColor  = 'rgba('+rundemColor()+','+rundemColor()+','+rundemColor()+')'
    }
    // change img
    function changeImg(){
        var items = Array('images/PngItem_1341556.png',
                        'images/watch.png',
                        'images/683510-0-removebg-preview.png',
                        'images/1-removebg-preview (1).png',
                        'images/czm.png',
                        );
        var item = items[Math.floor(Math.random()*items.length)];
        document.getElementById("myImg").src = item;
        // console.log(item)
    }
