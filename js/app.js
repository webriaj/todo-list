function getTask(){
    var task = document.getElementById("task").value;
    var taskList = document.getElementById("task-ul");
    var li = document.createElement ("li");
    var text = document.createTextNode(task);
    li.appendChild(text);
    
    document.getElementById("task").value = "";
    if(task == ""){
        alert("Please Eneter Your Task Name");
    }else{
        taskList.appendChild(li);
    }
};
