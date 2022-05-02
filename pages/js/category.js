cat_url = "http://localhost:3000/categories"
get_all_cats();
function add_cat(){
    let json_cat = {
        "user_id" : getCookie("user_id").toString(),
        "title": document.getElementById('cat_title').value.toString()
    }
    post(cat_url, json_cat)
    get_all_cats();
}

function get_all_cats(){
    get(cat_url, 'result_cat')
}

function get_cat(id){
   // get(cat_url+"/"+id, 'result_book')
    var d = [];
    $.ajax({
        type: 'get',
        cache: false,
        url: cat_url+"/"+id,
        dataType: 'json',
        error: function (request, error) {
            error_alert(error)
        },
        success: function (data) {
            d.push(data['title'])

        }
    });
    alert(d[id]);
}
function delete_cat() {
    alert($(this).id);
    // let genre_id = document.getElementById('genre_id').value.toString();
    // delete_instance(cat_url+"/"+id);
}

// function update_cat(){
//     let json_genre = {
//         "genre": document.getElementById('genre_name').value.toString()
//     }
//     let genre_id = document.getElementById('genre_id').value.toString();
//     put(form_instance_url(cat_url, genre_id),json_genre);
// }

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}