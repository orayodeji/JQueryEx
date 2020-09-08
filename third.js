$(document).ready(function(){
    let newArr= JSON.parse(localStorage.getItem("newArr"))
    if(newArr){
        newArr.forEach((val)=>{
            $addBoth(val.col1,val.col2)
        })
     }

    $("#newForm").on("submit",function(e){
        e.preventDefault();
        let titleInput = $("#title").val()
        let ratingInput = $("#ratings").val()
        if(titleInput != "" && ratingInput != "")
        $addBoth(titleInput,ratingInput);
        $("#title").val("");
        $("#ratings").val("");
     })


     function $addBoth(titleInput, ratingInput){
         let desk = $("table tbody");
         let newRow = $("<tr>");
         newRow.addClass("project")
         newRow.html(` <td>${titleInput}</td><td>${ratingInput}</td><td><button id="erase"name="erase">DELETE</button></td>`);
         desk.append(newRow);
         getOut()
         save()
        }

        function save(){
            let newArr = []
            $("table tbody tr").each(function(){
                ;
                let currentRow = $(this);
                let co1Value = currentRow.find("td:eq(0)").text()
                let co2Value = currentRow.find("td:eq(1)").text()

                let obj = {};
                obj.col1 = co1Value;
                obj.col2 = co2Value;

                newArr.push(obj)
            })
            localStorage.setItem("newArr", JSON.stringify(newArr))
        }

        function getOut(){
     $("table tr td").on("click",function(){
        let  burna = $(this).parent()
        burna.remove()
        save()

        })
     }
     function eraseAll(){
         $("tbody tr").remove()
     }
    
     $("#sortUpTitle").on("click", function(){
        let newArr = []
        $("table tbody tr").each(function(){
            ;
            let currentRow = $(this);
            let co1Value = currentRow.find("td:eq(0)").text()
            let co2Value = currentRow.find("td:eq(1)").text()

            let obj = {};
            obj.col1 = co1Value;
            obj.col2 = co2Value;

            newArr.push(obj)
        })
        newArr.sort((a,b) =>{
            if(a.col1 > b.col1){
                return 1;
            } else {
                return -1
            }
        })
        eraseAll()
        newArr.forEach((val)=>{
            $addBoth(val.col1,val.col2)
        })
        save()

    })

    $("#sortDownTitle").on("click", function(){
        let newArr = []
        $("table tbody tr").each(function(){
            ;
            let currentRow = $(this);
            let co1Value = currentRow.find("td:eq(0)").text()
            let co2Value = currentRow.find("td:eq(1)").text()

            let obj = {};
            obj.col1 = co1Value;
            obj.col2 = co2Value;

            newArr.push(obj)
        })
        newArr.sort((a,b) =>{
            if(a.col1 < b.col1){
                return 1;
            } else {
                return -1
            }
        })
        eraseAll()
        newArr.forEach((val)=>{
            $addBoth(val.col1,val.col2)
        })
        save()

    })

    $("#sortUpRatings").on("click", function(){
        let newArr = []
        $("table tbody tr").each(function(){
            ;
            let currentRow = $(this);
            let co1Value = currentRow.find("td:eq(0)").text()
            let co2Value = currentRow.find("td:eq(1)").text()

            let obj = {};
            obj.col1 = co1Value;
            obj.col2 = co2Value;

            newArr.push(obj)
        })
        newArr.sort((a,b) =>{
            if(a.col2 > b.col2){
                return 1;
            } else {
                return -1
            }
        })
        eraseAll()
        newArr.forEach((val)=>{
            $addBoth(val.col1,val.col2)
        })
        save()
    })
  
    $("#sortDownRatings").on("click", function(){
        let newArr = []
        $("table tbody tr").each(function(){
            ;
            let currentRow = $(this);
            let co1Value = currentRow.find("td:eq(0)").text()
            let co2Value = currentRow.find("td:eq(1)").text()

            let obj = {};
            obj.col1 = co1Value;
            obj.col2 = co2Value;

            newArr.push(obj)
        })
        newArr.sort((a,b) =>{
            if(a.col2 < b.col2){
                return 1;
            } else {
                return -1
            }
        })
        eraseAll()
        newArr.forEach((val)=>{
            $addBoth(val.col1,val.col2)
        })
        save()
    })

})