function createGrid(numRows) 
{
    var rowHeight = $("#sketchpad").height() / numRows;
    var columnWidth = $("#sketchpad").width() / numRows;
    
    for(var i = 0; i < numRows; i++)
    {
        $("#sketchpad").append($("<div class=row/>").height(rowHeight));
        
        for(var j = 0; j < numRows; j++)
        {
            $(".row:last-child").append($("<div class=square/>").width(columnWidth));
        }
    }
}



$(document).ready(function () {
    createGrid(16);
    $(".square").on("mouseenter", function(){
        $(this).addClass("colored");
    });
});