function createGrid(numRows) 
{
    var rowHeight = $("#sketchpad").height() / numRows;
    
    for(var i = 0; i < numRows; i++)
    {
        $("#sketchpad").append($("<div class=row height=" + rowHeight + "/>"));
    }
}

$(document).ready(function () {
    createGrid(16);
});