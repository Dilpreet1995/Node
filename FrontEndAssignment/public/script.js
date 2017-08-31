window.onload=ActivateFunction();
window.onload=CompleteFunction();
window.onload=DeleteFunction();

const RESPONSE_DONE=4;
const STATUS_OK=200;
const  send_todo="todo";
var table=document.createElement("table");
var table2=document.createElement("table");
var table3=document.createElement("table");

function clickedActive(a) {


    var xhr = new XMLHttpRequest();

    xhr.open("PUT", "/api/todos/complete/" + a, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            ActivateFunction();
            CompleteFunction();
            DeleteFunction();
        }


    };


    xhr.send(data = null);
}
function clickedComplete(a) {


    var xhr = new XMLHttpRequest();

    xhr.open("PUT", "/api/todos/active/" + a, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            ActivateFunction();
            CompleteFunction();
            DeleteFunction();
        }


    };


    xhr.send(data = null);
}

function clickedDelete(a) {


     var xhr = new XMLHttpRequest();

            xhr.open("DELETE","/api/todos/"+a,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if(xhr.readyState==4 && xhr.status==200){
                   DeleteFunction();
                   ActivateFunction();
                    CompleteFunction();
                }


            };


            xhr.send(data=null);






}






    function ActivateFunction() {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/todos", true);
        xhr.onreadystatechange = function () {

            if (xhr.readyState == RESPONSE_DONE) {

                if (xhr.status == STATUS_OK) {

                    var box = document.getElementById("active");

                    box.innerHTML = "";
                    table.innerHTML = "";

                    box.setAttribute("overflow", "scroll");



                    var demo = JSON.parse(xhr.responseText);






                    for (var propt in demo) {


                        if (demo[propt].Status == "Active") {
                            var row = table.insertRow();
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);

                            cell2.innerHTML = demo[propt].Title;

                            var cell3 = row.insertCell(2);


                            cell1.innerHTML = '<input type ="checkbox" data-id='+propt+'  onclick = clickedActive('+propt+') >';


                            var image= document.createElement('img');
                            image.style.height="11px";
                            image.style.width="20px";

                            image.setAttribute('src','/images/images.png');
                            image.setAttribute('onclick','clickedDelete('+propt+')');
                            cell3.appendChild(image);

                        }

                }

                box.append(table);


                }

            }

        };
        xhr.send(data = null);
    }



function CompleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("complete");

                box.innerHTML= "";
                table2.innerHTML="";

                box.setAttribute("overflow","scroll");



                var demo = JSON.parse(xhr.responseText);



                for(var propt in demo){


                    if(demo[propt].Status=="Complete") {
                        var row = table2.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = '<input type ="checkbox" data-id='+propt+' checked="true" onclick = "clickedComplete('+propt+')" >';

                        cell2.innerHTML = demo[propt].Title;


                        var cell3 = row.insertCell(2);

                        var image= document.createElement('img');
                        image.style.height="11px";
                        image.style.width="20px";

                        image.setAttribute('src','/images/images.png');
                        image.setAttribute('onclick','clickedDelete('+propt+')');
                        cell3.appendChild(image);

                    }
                }


                box.append(table2);




            }
        }

    };

    xhr.send(data = null)
}




function DeleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("deleted");

                box.innerHTML= "";
                table3.innerHTML="";

                box.setAttribute("overflow","scroll");



                var demo = JSON.parse(xhr.responseText);




                for(var propt in demo){


                    if(demo[propt].Status=="Deleted") {
                        var row = table3.insertRow();
                        var cell1 = row.insertCell(0);

                        cell1.innerText = demo[propt].Title;
                        cell1.style.textDecoration="line-through";
                        cell1.style.textDecorationColor="red";
                        cell1.style.color="red";


                    }
                }
                box.append(table3);




            }
        }

    };

    xhr.send(data = null)
}




function AddTodo() {

        var title = document.getElementById("newtodo").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/todos", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "todo_title=" + encodeURI(title);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                ActivateFunction();
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);


}



function hidecomplete() {
    var completevisibleid=document.getElementById('complete');
    var anchorvisibleid=document.getElementById('visiblecompleteanchor');
    var anchorhiddenid=document.getElementById('hiddencompleteanchor');
    completevisibleid.style.display="none";
    anchorvisibleid.style.display="none";
anchorhiddenid.style.display="table";
}
function showcomplete() {
    var completevisibleid=document.getElementById('complete');
    var anchorvisibleid=document.getElementById('visiblecompleteanchor');
    var anchorhiddenid=document.getElementById('hiddencompleteanchor');
    completevisibleid.style.display="table";
    anchorvisibleid.style.display="table";
    anchorhiddenid.style.display="none";
}
function hidedelete() {
    console.log("ddff");
    var completevisibleid=document.getElementById('deleted');
    var anchorvisibleid=document.getElementById('visibledeleteanchor');
    var anchorhiddenid=document.getElementById('hiddendeleteanchor');
    completevisibleid.style.display="none";
    anchorvisibleid.style.display="none";
    anchorhiddenid.style.display="table";
}
function showdelete() {
    console.log("ddff");
    var completevisibleid=document.getElementById('deleted');
    var anchorvisibleid=document.getElementById('visibledeleteanchor');
    var anchorhiddenid=document.getElementById('hiddendeleteanchor');
    completevisibleid.style.display="table";
    anchorvisibleid.style.display="table";
    anchorhiddenid.style.display="none";
}