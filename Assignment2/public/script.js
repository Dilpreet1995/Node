const RESPONSE_DONE=4;
const STATUS_OK=200;
const  send_todo="todo";
var table=document.createElement("table");





function AllFunction() {

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

                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                for(var propt in demo){



                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[propt].Title;
                    cell2.innerHTML = demo[propt].Status;

                }

                box.append(table);




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

                    console.log(demo);
                    var temp=1;
                    table.setAttribute("color","yellow");


                    for(var propt in demo){



                        var row = table.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = demo[propt].Title;
                        cell2.innerHTML = demo[propt].Status;

                    }

                    box.append(table);


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

                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

                table.setAttribute("border","4px solid black");

                var demo = JSON.parse(xhr.responseText);

                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");
                for(var propt in demo){



                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[propt].Title;
                    cell2.innerHTML = demo[propt].Status;

                }

                box.append(table);




            }
        }

    };

    xhr.send(data = null)
}




function DeleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/delete", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

                table.setAttribute("border","4px solid black");

                var demo = JSON.parse(xhr.responseText);

                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                for(var propt in demo){



                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[propt].Title;
                    cell2.innerHTML = demo[propt].Status;

                }
                box.append(table);




            }
        }

    };

    xhr.send(data = null)
}




