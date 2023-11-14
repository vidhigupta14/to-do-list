document.querySelector("button").addEventListener("click", function(){
    var inputText=document.getElementById("task").value;
    var task=document.createElement("li");
    task.id="strikeit";
    task.textContent=inputText;
    document.getElementById("list").appendChild(task);
    document.getElementById("myform").reset();
});


var newTask = document.getElementById("strikeit");
  newTask.onclick = function() {
    toggleDone("strikeit");
  };

  function toggleDone(taskid) {
    var task = document.getElementById = taskid 
    task.style.textDecoration = task.style.textDecoration === "line-through" ? "none" : "line-through";
  }

 

// document.getElementById("strikeit").onclick(function(){
//     this.style.textDecoration = this.style.textDecoration === "line-through" ? "none" : "line-through";
// });


// var newTask = document.getElementById("strikeit");
//   newTask.onclick = function() {
//     toggleDone(this);
//   };

//   function toggleDone(task) {
//     task.style.textDecoration = task.style.textDecoration === "line-through" ? "none" : "line-through";
//   }


// function strike(){
//     var check=document.querySelector("#strikeit");
//     check.classList.toggle("done");
// }

// var list=document.getElementsByClassName("item");
// console.log(list.length);
// for(var i=0;i<list.length;i++){
//     list[i].addEventListener("click", function(){
//         this.classList.toggle("done");
//     });
// };

