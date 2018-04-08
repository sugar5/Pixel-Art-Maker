// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(nwidth, nheight) {
    var table = "";
    for (var y = 1; y <= nheight; y++) {
      let table_width = "";
      for (var x = 1; x <= nwidth; x++) {
        table_width += "<td></td>";
      }
      table += "<tr>" + table_width + "</tr>";
    }
    return table;
}

$("[type='submit']").click(function(event){
    event.preventDefault();
    var nwidth = $("#input_Width").val();
    var nheight = $("#input_Height").val();
    var pixel = makeGrid(nwidth,nheight);
    $("#pixel_Canvas").empty();
    $("#pixel_Canvas").append(pixel);
})

$("table").on("click", "td", function() {
    var color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });
