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
        success: function (response) {
            if(response.status === 401){
                alert("Wrong email or password.. :(");
            }
            else{
                // window.location.href = "http://localhost:3000/";

                console.log(response['user']['id']);
                // let date = new Date(Date.now() + 86400e3);
                // document.cookie = "user_id="+response['user']['id']+"; path=/; expires="+ date + "; samesite=lax; secure";
                setCookie("user_id", response['user']['id'], 1)
                window.location.href = "http://localhost:3000/";
            }
        }
    });
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; samesite=lax; secure";
}
