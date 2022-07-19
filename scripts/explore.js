// TODO Check to see if a state is already selected by checking the color of the SVG (if not grey)


// function clearMap () {
//     document.getElementById('IN').style.fill = '#aaaaaa';
//     document.getElementById('OH').style.fill = '#aaaaaa';
//     document.getElementById('IL').style.fill = '#aaaaaa';
//     document.getElementById('MI').style.fill = '#aaaaaa';
//     document.getElementById('MN').style.fill = '#aaaaaa';
//     document.getElementById('ND').style.fill = '#aaaaaa';
//     document.getElementById('SD').style.fill = '#aaaaaa';
//     document.getElementById('MO').style.fill = '#aaaaaa';
//     document.getElementById('KS').style.fill = '#aaaaaa';
//     document.getElementById('IA').style.fill = '#aaaaaa';
//     document.getElementById('NE').style.fill = '#aaaaaa';
//     document.getElementById('WI').style.fill = '#aaaaaa';

    
// }



function clearMap () {
    document.getElementById('IN').style = null;
    document.getElementById('OH').style = null;
    document.getElementById('IL').style = null;
    document.getElementById('MI').style = null;
    document.getElementById('MN').style = null;
    document.getElementById('ND').style = null;
    document.getElementById('SD').style = null;
    document.getElementById('MO').style = null;
    document.getElementById('KS').style = null;
    document.getElementById('IA').style = null;
    document.getElementById('NE').style = null;
    document.getElementById('WI').style = null;

    
}



function ohioClick () {

    clearMap();
    document.getElementById('OH').style.fill = '#432771';

}


function ilClick () {
    clearMap();
    document.getElementById('IL').style.fill = '#53b35a';

}

function miClick () {
    clearMap();
    document.getElementById('MI').style.fill = '#625d59';

}

function mnClick () {
    clearMap();
    document.getElementById('MN').style.fill = '#7f4f99';

}

function ndClick () {
    clearMap();
    document.getElementById('ND').style.fill = '#246cb6';

}

function sdClick () {
    clearMap();
    document.getElementById('SD').style.fill = '#f7bc17';

}

function moClick () {
    clearMap();
    document.getElementById('MO').style.fill = '#1aa9a9';

}

function ksClick () {
    clearMap();
    document.getElementById('KS').style.fill = '#e9565e';

}

function iaClick () {
    clearMap();
    document.getElementById('IA').style.fill = '#8f7d71';

}

function neClick () {
    clearMap();
    document.getElementById('NE').style.fill = '#a3ce65';

}

function wiClick () {
    clearMap();
    document.getElementById('WI').style.fill = '#e3595e';

}

function indianaClick () {
    clearMap();
    document.getElementById('IN').style.fill = '#f7bc17';

}

