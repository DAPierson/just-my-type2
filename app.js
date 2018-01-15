
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let x = 1;
let c = 0;
let sent = 0;
$(document).ready(function () {

    $("#keyboard-upper-container").hide();
    let start = document.createTextNode(sentences[0]);
    $('#sentence').append(start);


});

document.addEventListener('keydown', function () {

    if (event.keyCode == 16) {
        $('#keyboard-lower-container').toggle();
        $('#keyboard-upper-container').toggle();
    }

});

document.addEventListener('keyup', function () {

    if (event.keyCode == 16) {
        $('#keyboard-lower-container').toggle();
        $('#keyboard-upper-container').toggle();

    }


});



document.addEventListener('keypress', function () {
    let k = event.keyCode;
    console.log(event.keyCode);
    $('#' + k + '').addClass('highlight');

    if (k === 13) {
        $('#feedback').empty();
        $('#sentence').empty();
        $('#sentence').append(sentences[x]);
        x++;
        sent++;
        

    }
    if (event.keyCode != 16) {
        //let current = $('#sentence').val();
        //console.log(current);
        if (event.keyCode === sentences[0].charCodeAt(c)) {
            let good = document.createTextNode('  GOOD! ');

            $('#feedback').append(good);
            c++;
        }
        else {
            if (event.keyCode != 13) {
                let wrong = document.createTextNode('  Wrong  ');
                $('#feedback').append(wrong);
                c++;
            }
        }

    }
    


    document.addEventListener('keyup', function () {
        $('#' + k + '').removeClass('highlight');




    })



});


