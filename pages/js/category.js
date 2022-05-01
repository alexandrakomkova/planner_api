cat_url = "http://localhost:3000/categories"
function add_cat(){
    let json_cat = {
        "title": document.getElementById('cat_title').value.toString(),
        "user_id" : sessionStorage.getItem("user_id")
    }
    post(cat_url, json_cat)
}

function get_all_cats(){
    get(cat_url, 'result_cat')
}

function get_cat(id){
    get(cat_url+"/"+id, 'result_book')
}
// function delete_cat() {
//     let genre_id = document.getElementById('genre_id').value.toString();
//     delete_instance(cat_url);
// }

// function update_cat(){
//     let json_genre = {
//         "genre": document.getElementById('genre_name').value.toString()
//     }
//     let genre_id = document.getElementById('genre_id').value.toString();
//     put(form_instance_url(cat_url, genre_id),json_genre);
// }
