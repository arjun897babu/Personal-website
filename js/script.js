let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});





function validateform() {
    var name = document.Submission.name.value;
    var email = document.Submission.email.value;
    var number = document.Submission.number.value;
    var message = document.Submission.message.value;
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
    var err = document.getElementById("error");
    var nameRegex = /^[A-Za-z]+$/;
    
    if (!nameRegex.test(name)) {
        err.innerHTML = 'Name should only contain alphabets';
        document.Submission.name.focus(); 
        return false;

    }if (name == "") {
        err.innerHTML = 'The Name is Empty';
        document.Submission.name.focus(); 
        return false;
    }

    if (name.length < 5) {
        err.innerHTML = 'Name Should Contain five Elements Please Include Fullname';
        document.Submission.name.focus();
        return false;
    }

    if (email == "") {
        err.innerHTML = 'Enter Your email ID';
        document.Submission.email.focus();
        return false;
    }

    if (regex.test(email) == false) {
        err.innerHTML = 'Invalid Email';
        document.Submission.email.focus();
        return false;
    }

    if (number == "") {
        err.innerHTML = 'Enter Your Number';
        document.Submission.number.focus();
        return false;
    }

    if (number.length < 10 || number.length > 10) {
        err.innerHTML = 'Invalid Number';
        document.Submission.number.focus();
        return false;
    }

    if (message == "") {
        err.innerHTML = 'Message is Empty';
        document.Submission.message.focus();
        return false;
    }

    if (message.length < 10) {
        err.innerHTML = 'Message Should Contain 10 Words';
        document.Submission.message.focus();
        return false;
    }

    if (message.length > 500) {
        err.innerHTML = 'Message Should not Exceed 500 Words';
        document.Submission.message.focus();
        return false;
    }

   
    return true;
}

$("#submit-form").submit((e) => {
    e.preventDefault();
    if (validateform()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbz3QNpgugR6zekqLicAd7U5g4yBfk-vOQZlaWif-bNOvN2ZJsFtHVHbTD4JCail_P2aLw/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Message send successfully");
                window.location.reload();
            },
            error: function (err) {
                alert("Something Error");
            }
        });
    }
});
