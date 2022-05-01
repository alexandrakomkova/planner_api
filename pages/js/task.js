task_url = "http://localhost:3000/categories"
function add_task(){
    let json_task = {
        "category_id": document.getElementById('task_cat').value.toString(),
        "time_start": document.getElementById('task_time_start').value.toString(),
        "time_finish": document.getElementById('task_time_finish').value.toString(),
        "user_id" : sessionStorage.getItem("user_id")
    }
    post(task_url, json_task)
}

function get_all_tasks(){
    get(task_url, 'result_task')
}