$(document).ready(function(){
    let tunji= JSON.parse(localStorage.getItem("tunji"))
    if(tunji){
        tunji.forEach(function(task) {
                $addTodo(task)})
    }

   

    let $form = $("#myForm")
    store()

    $form.on("submit", function(e){
        e.preventDefault();

        let space = $("#input")
        let $input = $("#input").val();
        if($input != "")
        $addTodo($input);
        space.val("")
    })
   
    function $addTodo(task){

        let newTask = $("<li>");
        newTask.html(`<span>${task}</span><button id="delet" name="delete"><i class="fas fa-trash-alt"></i></button>`);
        $("ul").prepend(newTask)
       deleteTask()
        store()
       }

    


   function deleteTask(){
        $("ul li button").click(function(e){
         $(e.target).parent().remove()
        
         store()
        })

    }
    function store(){
             
        let tunji = [];
        $("#todoList").find("li").each(function(){
            let product = $(this).text()
            tunji.push(product)
        })
     //  $("li").each(function(index){
       //    tasks.push($(this).text());
      // })
        localStorage.setItem("tunji", JSON.stringify(tunji))
    }  




  
    /*
    function store(){
        if(localStorage["tasks"]){
            var tasks = JSON.parse(localStorage["tasks"]);
        } else {
            var tasks = []
        }
        for(let i =0; i < tasks.length; i++){
            $addTodo(task)
        }

        let addTask = function(){
            let newVal = $("#input").val();

            tasks.push(newVal);
            
            localStorage["tasks"] = JSON.stringify(tasks);
            $addTodo(newVal)

            $("#input").val("").focus();
        }
    }
    */

})