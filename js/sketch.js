function createGrid(numRows) 
{
    var rowHeight = $("#sketchpad").height() / numRows;
    var columnWidth = $("#sketchpad").width() / numRows;
    
    $("#sketchpad").empty();
    
    var myHtml = "";
    var myBoxes = "";
    for(var i = 0; i < numRows; i++)
    {
        myHtml += "<div class=row/>";
        myBoxes += "<div class=square/>";
    }
    
    $("#sketchpad").html(myHtml);
    $(".row").height(rowHeight);
    $(".row").html(myBoxes);
    $(".square").width(columnWidth);
    
}

function buttonClick()
{
    var numRows = prompt("How many rows/columns do you want?");
    createGrid(numRows);
}

$(document).ready(function () {
    createGrid(16);
    $("#sketchpad").on("mouseenter", ".square", function(){
        $(this).addClass("colored");
    });
});