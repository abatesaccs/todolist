function Todolist(){
  this.items = [];
}
function Todoitem(item, finished){
  this.item = item;
  this.finished = finished;
}
Todolist.prototype.addItem = function(item){
  this.items.push(item);
}
var list = new Todolist();



$(document).ready(function() {
  var submitCount = 0;
  $("form#form").submit(function(event) {
    submitCount ++;
    event.preventDefault();
    var input = $("input#input").val();
    // console.log(input);
    var tempObj = new Todoitem(input, false);
    // console.log(tempObj);
    list.addItem(tempObj);
    $("div.form-group").append(`<div class="checkboxes"><input type=\"checkbox\" id=${submitCount}>`
  + `<label for=${submitCount}>` + list.items[list.items.length - 1].item + "</label></div><br>")
    // console.log("<input type=\"checkbox\" id=\"check\">");

  });
  $("button#done").click(function(){
    event.preventDefault();
      });

  // $("input, label").click(function(){
  //   $(this).addClass("strike");
  // });


  $("div.form-group").on("click", "label", function() {
    $(this).addClass("strike");
  });


  // $("div.checkboxes").on("click", this, function() {
  //   $(this.addClass("strike"));
  // })

});
