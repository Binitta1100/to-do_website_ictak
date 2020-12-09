$(document).ready(function(){
    $("form").submit(function(e){
        if($("#name").val() != "admin" || $("#pwd").val() != "12345") {
            alert("Wrong Username or Password");
            return false;
        }
    })
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
        var todo_data = '';
        $.each(data, function(key, value){
            todo_data += '<tr class="table-light">';
            todo_data += '<td>' + value.userId + '</td>';
            todo_data += '<td>' + value.id + '</td>';
            todo_data += '<td>' + value.title + '</td>';
            if(value.completed == true){
                todo_data += "<td><input type='checkbox'checked disabled='disabled' name='chk1'/></td>";
            }
            else{
                todo_data += "<td><input type='checkbox' name='chk2'/></td>";
            }
            todo_data += '</tr>';
        });
        $('#todo_table').append(todo_data);
        $("input[name=chk2]").change(function(){
            var promise = new Promise(function(resolve,reject){
                if( $("input[name=chk2]:checked").length == 5 ){
                    resolve();
                }
                else{
                    reject();
                }
            });
            promise
            .then(function(){
                $("input[name=chk2]").attr('disabled', 'disabled');
                $("input[name=chk2]:checked").removeAttr('disabled');
                alert("Congrats. 5 Tasks have been Successfully Completed");
            })
            .catch(function(){
                $("input[name=chk2]").removeAttr('disabled');
            })
        })
    })
});