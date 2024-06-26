
$(document).ready(function() {
    var obj = { foo: 1,    bar: 2}
    var sum = 0;
     $.each( obj, function( key, value ) {
        alert(key +"="+value)
        sum += value;
    });
     console.log( sum ); 
    });

    