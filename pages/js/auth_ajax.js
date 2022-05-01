function login(){
    let json_user = {
         "user": {
             "email": document.getElementById('email').value.toString(),
             "password": document.getElementById('password').value.toString()
         }
    }

    post_auth("http://localhost:3000/sessions#logged_in", json_user);
}

function registration(){
    let json_user = {
        "user": {
            "email": document.getElementById('email').value.toString(),
            "password": document.getElementById('password').value.toString(),
            "password_confirmation": document.getElementById('password').value.toString()
        }
    }

    post_auth("http://localhost:3000/registrations", json_user);
}

function post_auth(url, json_data) {
    $.ajax({
        type: 'post',
        data: json_data,
        cache: false,
        url: url,
        dataType: 'json',
        error: function (request, error) {
            error_alert(error)
        },
        success: function (jqXHR, response) {
            if(jqXHR.status == 401){
                alert("Wrong email or password.. :(");
            }
            else{
                // window.location.href = "http://localhost:3000/";
                sessionStorage.setItem("user_id", jqXHR.responseText);
                console.log(JSON.parse(jqXHR.responseText)['status']);
                //window.location.href = "http://localhost:3000/";
                // get_auth("http://localhost:3000/", )
                //data.user_id
            }
        }
    });
}

function get_auth(url, user_id) {
    $.ajax({
        type: 'get',
        cache: false,
        url: url,
        dataType: 'json',
        error: function (request, error) {
            error_alert(error)
        },
        success: function () {
            sessionStorage.setItem("user_id", user_id);
        }
    });

}