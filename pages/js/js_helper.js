function error_alert(error){
    alert(" Can't do because: " + error.toString());
}

function check_data_type(data, result_block) {

    if(Array.isArray(data)){
        draw_table(data, result_block)
    }
    else{
        const arr = [data]
        draw_table(arr, result_block)
    }
}

function draw_table(data, result_block) {
    remove_data_from_table(result_block);
    for (var i = 0; i < data.length; i++) {
        choose_table(data[i], result_block)
    }
}

function remove_data_from_table(result_block) {
    $(form_table_id(result_block) + " tbody").remove();
}

function form_table_id(result_block) {
    return "#"+result_block;
}

function choose_table(data, result_block) {
    switch (result_block) {
        case "result_task":
            draw_row_task(data,form_table_id(result_block));
            break;
        case "result_cat":
            draw_row_cat(data,form_table_id(result_block));
            break;
        default:
            break;
    }
}

function draw_row_cat(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.title + "</td>"));
}

function draw_row_task(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.category_id + "</td>"));
    row.append($("<td>" + rowData.time_start + "</td>"));
    row.append($("<td>" + rowData.time_finish + "</td>"));
}