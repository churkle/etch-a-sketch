function createGrid(numRows) 
{
    var rowHeight = $("#sketchpad").height() / numRows;
    var columnWidth = $("#sketchpad").width() / numRows;
    
    $("#sketchpad").empty();
    
    for(var i = 0; i < numRows; i++)
    {
        $("#sketchpad").append($("<div class=row/>").height(rowHeight));
        
        for(var j = 0; j < numRows; j++)
        {
            $(".row:last-child").append($("<div class=square/>").width(columnWidth));
        }
    }
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