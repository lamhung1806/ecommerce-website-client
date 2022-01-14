
// đối ttuowngj validator
function Validator(option) {
    var selectorRules = {};
    //ham thuc hien validate
    function validate(imputElement, rule) {
        var errormessae = rule.test(imputElement.value)
        var erroElement = imputElement.parentElement.querySelector(option.errorselect);
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; ++i) {
            errormessae = rules[i](imputElement.value);
            if (errormessae) break;

        }


        //lấy giá trị imputElement.
        // lấy funcition test qua rule.test

        if (errormessae) {
            erroElement.innerText = errormessae;
            imputElement.parentElement.classList.add('invalid')
        }
        else {
            erroElement.innerText = '';
            imputElement.parentElement.classList.remove('invalid')

        }
        return !errormessae;
    }

    var formElement = document.querySelector(option.form); // lay form can validate

    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true
            option.rules.forEach(function (rule) {
                var imputElement = formElement.querySelector(rule.selector);
                var isValid = validate(imputElement, rule);
                if (!isValid) {
                    isFormValid = false
                }
            })
            if (isFormValid) {
                if (typeof option.onSubmit === 'function') {
                    var enableInput = document.querySelectorAll('[name]');

                    // chhuyen tu nodelist sang mang
                    var fromvalue = Array.from(enableInput).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {})
                    option.onSubmit(fromvalue)

                }
            }
        }

        option.rules.forEach(function (rule) {

            var imputElement = formElement.querySelector(rule.selector);
            var erroElement = imputElement.parentElement.querySelector(option.errorselect);

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test]
            }


            if (imputElement) {
                // xu ly truong hop blur khoi input
                imputElement.onblur = function () {

                    validate(imputElement, rule)
                }
                imputElement.oninput = function () {
                    erroElement.innerText = '';
                    imputElement.parentElement.classList.remove('invalid')
                }

            }

        });

    }




}
// ddinbhj nghĩa các rule  
// nhuyên tắc của các rule:
// 1.khicos lỗi => hiển thị messae
//2. khi không có lỗi => ko hiển thị gì (undefines)
Validator.isRequied = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : ' xin mời nhập giá trị'

        }
    }

}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Vui long nhap dung thong tin'

        }
    }

}
Validator.minlenght = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `vui long nhap toi thieu ${min} ki tu`



        }
    }

}

Validator.checkpass = function (selector, checkpasss, messae) {
    return {
        selector: selector,
        test: function (value) {
            return value == checkpasss() ? undefined :
                messae
        }
    }
}