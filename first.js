$(document).ready(function(){
    console.log("let's get the party ready with jQuery")
    
    let img = $("article img");
    img.addClass("image-center");
    
    let lastP = $("article p:last-child")
    lastP.remove()

    let hTitle = $("h1#title")
    hTitle.css("font-size","89px")

    let newList = $("<li>")
    newList.text("I hate Dogs") 
    $("ol").append(newList);

    let orderList = $("aside");
    orderList.empty();

    let newP = $("<p>");
    newP.text("The List was a mistake")
    orderList.append(newP)

    $(".form-control").on("keyup blur change", function(){
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
         $("body").css("background", "rgb("+ red +","+ blue +","+ green +")")
    })
        
    $("img").on("click",function(){
        $("img").remove()
    })
    
 })