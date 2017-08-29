const RESPONSE_DONE=4;
const STATUS_OK=200;
const  send_todo="todo";
var table=document.createElement("table");

function add_todo_elements(id,todo_data_json){
    var data_put=document.getElementById(id);
    data_put.innerHTML=todo_data_json

}



function AllFunction() {
//    console.log("milo milo")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

               table.setAttribute("border","4px solid black");

                var demo = JSON.parse(xhr.responseText);
           //    JSON.stringify(demo);
                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                while(demo[temp]){
                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[temp].Title;
                    cell2.innerHTML = demo[temp++].Status;

                }

                box.append(table);


              // add_todo_elements(send_todo, xhr.responseText);

        }
            }

        };

        xhr.send(data = null)
    }

    function ActivateFunction() {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/active", true);
        xhr.onreadystatechange = function () {

            if (xhr.readyState == RESPONSE_DONE) {

                if (xhr.status == STATUS_OK) {

                    var box = document.getElementById("todo");

                    box.innerHTML= "";
                    table.innerHTML="";

                    box.setAttribute("overflow","scroll");

                    table.setAttribute("border","1px solid black");

                    var demo = JSON.parse(xhr.responseText);
             //       JSON.stringify(demo);
                    console.log(demo);
                    var temp=1;
                    table.setAttribute("color","yellow");


                    while(demo[temp]){
                        var row = table.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = demo[temp].Title;
                        cell2.innerHTML = demo[temp++].Status;

                    }

                    box.append(table);
                   // add_todo_elements(send_todo, xhr.responseText);

                }

            }

        };
        xhr.send(data = null);
    }


function CompleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/complete", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {
/*
                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

                table.setAttribute("border","1px solid black");

                var demo = JSON.parse(xhr.responseText);
             //   JSON.stringify(demo);
                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                while(demo[temp]){
                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[temp].Title;
                    cell2.innerHTML = demo[temp++].Status;

                }

                box.append(table);
  */
  add_todo_elements(send_todo, xhr.responseText);

            }

        }

    };
    xhr.send(data = null);
}





function DeleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET","/api/delete", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {
/*
                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

               // box.setAttribute("overflow","scroll");

               // table.setAttribute("border","1px solid black");

                var demo = JSON.parse(xhr.responseText);
                //       JSON.stringify(demo);
                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                while(demo[temp]){
                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[temp].Title;
                    cell2.innerHTML = demo[temp++].Status;

                }

                box.append(table);
                */
                 add_todo_elements(send_todo, xhr.responseText);

            }

        }

    };
    xhr.send(data = null);
}










