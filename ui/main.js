//console.log('Loaded!');

//change the text of the main-text div
//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value Replaces The Original Text';

//image movement
//var img = document.getElementById('madi');

//var marginLeft = 0;
//function moveRight (){
//    marginLeft = marginLeft + 1;
 //   img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function (){
//    var interval = setInterval(moveRight, 50);
//};
// counter code
var button = document.getElementById('counter');
button.onClick = function (){
    //create a request object
    var request = new XMLHttpRequest ();
    //capture the request and store it in a variable
    request.onreadystatechange = function (){
        if (request.readystate === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200){
                var counter = request.response.Text;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //make the request
    request.open('GET', 'http://chandusrinivas.imad.hasura-app.io/counter', true);
    request.send(null);
}