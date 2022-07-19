// TODO Check to see if a state is already selected by checking the color of the SVG (if not grey)


function clearMap () {
    document.getElementById('IN').style.fill = '#aaaaaa';
    document.getElementById('OH').style.fill = '#aaaaaa';
    document.getElementById('IL').style.fill = '#aaaaaa';
    document.getElementById('MI').style.fill = '#aaaaaa';
    document.getElementById('MN').style.fill = '#aaaaaa';
    document.getElementById('ND').style.fill = '#aaaaaa';
    document.getElementById('SD').style.fill = '#aaaaaa';
    document.getElementById('MO').style.fill = '#aaaaaa';
    document.getElementById('KS').style.fill = '#aaaaaa';
    document.getElementById('IA').style.fill = '#aaaaaa';
    document.getElementById('NE').style.fill = '#aaaaaa';
    document.getElementById('WI').style.fill = '#aaaaaa';
}



function ohioClick () {

    clearMap();

    document.getElementById('OH').style.fill = '#432771';


//     if (document.getElementById('OH').style.fill == '#aaaaaa') {
    
//         document.getElementById('OH').style.fill = '#432771';
// } else (document.getElementById('OH').style.fill == '#aaaaaa')

if (document.getElementById('OH').style.fill === '#432771') {
    document.getElementById('OH').style.fill = '#aaaaaa';
}


}



function indianaClick () {
    clearMap();

    document.getElementById('IN').style.fill = '#f7bc17';
    

//     if (document.getElementById('OH').style.fill == '#aaaaaa') {
    
//         document.getElementById('OH').style.fill = '#432771';
// } else (document.getElementById('OH').style.fill == '#aaaaaa')

if (document.getElementById('OH').style.fill === '#432771') {
    document.getElementById('OH').style.fill = '#aaaaaa';
}


}