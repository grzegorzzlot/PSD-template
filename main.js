// Obsługa menu
function navMenu(){
    $('.menu-button button').on('click', function(){
        $('.navbar-nav li').slideToggle();
    });
    $(window).on('resize', function(){
        if(this.innerWidth<=768) {
            $('.navbar-nav li').css('display', 'none');
        } else {
            $('.navbar-nav li').css('display', 'inline-block');
        }
    })
};
navMenu();
// obsługa formularza
function validate () {
    const mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    const nameReg = /^[a-zA-Z]{2,}/;
    const inputName = $('.form .name');
    const inputEmail = $('.form .email');
    let inputVal = function(input, reg, ev) {
        if(input.val().match(reg)){
            input.css('border', '1px #111111 solid'); 
        } else {        
            input.css('border', '1px red solid');
            ev.preventDefault();
        }
    }
    $('.form input[type="submit"]').on('click', function(e){     
        inputVal(inputName, nameReg, e);//dla input type text
        inputVal(inputEmail, mailReg, e);//dla input type text
        
    });
}
validate();