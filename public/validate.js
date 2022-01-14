Validator({
    form: '#form-1',
    errorselect: '.form-message',
    rules:
        [

            Validator.isRequied('#fullname'),
            // Validator.isRequied('#email'),
            Validator.isEmail('#email'),
            Validator.minlenght('#password', 6),
            Validator.checkpass('#password_confirmation', function () {
                return document.querySelector('#form-1 #password').value;
            }, 'nhập không khớp mk'),
            Validator.isRequied('#password_confirmation'),

        ],
    onSubmit: function (data) {


    }
});
