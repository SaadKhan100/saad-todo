
var todoList = document.getElementById("todoList")

var items = document.getElementById("items");
var count = 0;
items.innerHTML = count;
function addTodo(){
    var input = document.getElementById("input");

    if(input.value.length >=5 && input.value.length <=20){
        var li = document.createElement("li");
        var liText = document.createTextNode(input.value);
        li.append(liText);

        var delBtn = document.createElement("button");
        delBtn.innerHTML = "DEL";
        li.appendChild(delBtn);
        delBtn.setAttribute("onclick" , "deltodo(this)");
        delBtn.className = "btn btn-danger";


        var editBtn = document.createElement("button");
        editBtn.innerHTML = "EDIT";
        li.appendChild(editBtn);
        editBtn.setAttribute("onclick", "edittodo(this)");
        editBtn.className = "btn btn-primary";


        todoList.appendChild(li);
        input.value = "";
        count++ ;
        items.innerHTML = count

    }else{
        alert("enter correct code")
    }
}


function deltodo(e){
    e.parentNode.remove()

    count--;
    items.innerHTML = count;
}

function edittodo(e){
    var edit = prompt("Enter new todo",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = edit
}

function delAll(){

    todoList.innerHTML = "";
    count = 0;
    items.innerHTML = count;
}



