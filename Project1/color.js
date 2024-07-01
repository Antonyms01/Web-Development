const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        switch(e.target.id)
        {
            case 'grey':
            body.style.backgroundColor=e.target.id;
            break;

            case 'skyblue':
            body.style.backgroundColor=e.target.id;
            break;

            case 'pink':
            body.style.backgroundColor=e.target.id;
            break;

            case 'orange':
            body.style.backgroundColor=e.target.id;
            break;

        }
    });
});

document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
    
});
