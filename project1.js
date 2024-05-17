const buttons = document.querySelectorAll('.button'); // Changed 'button' to '.button' to target elements with class 'button'
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
                case  'green':
                body.style.backgroundColor = 'green';
                break;
                case 'red':
                body.style.backgroundColor = 'red';
                break;
                case  'white':
                body.style.backgroundColor = 'white';
                break;
        
            default:
                break;
        
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = 'grey';
        // } else if (e.target.id === 'red') {
        //     body.style.backgroundColor = 'red';
        // } else if (e.target.id === 'green') {
        //     body.style.backgroundColor = 'green';
        // } else if (e.target.id === 'blue') {
        //     body.style.backgroundColor = 'blue';
        // }
        // else if 
        // (e.target.id === 'white') {
        //     body.style.backgroundColor = 'white';
    }});
});
