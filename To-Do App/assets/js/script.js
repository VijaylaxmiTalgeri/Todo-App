// $("li").click(function(){
// 	//check if its is already gray
// 	if ( $(this).css("color") === "rgb(128, 128, 128)") { // we have to check against rgb(128,128,128) and not gray, that how internally its stored
// 		console.log("in if bloxk");
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else {
// 		$(this).css("color","gray"); // when clicked on a LI it turns Gray
// 		$(this).css("text-decoration", "line-through"); // when clicked on a LI it strikes through
// 		// alternatively we can do this, using object key-value pair, but JS does not accept '-' so text-decoration becomes textDecoration(camelCase)
// 		// $(this).css({
// 		// 	color : "gray",
// 		// 	textDecoration : "lineThrough"
// 		// })
// 	}
// });

// We can do this alternatively, "click" wil work only the existing li element, so we need to use on, click
$("ul").on("click","li", (function(){
	$(this).toggleClass("completed");
}));


// Click on X to delete a to-do item, X is a span inside an LI, li is a parent
$("ul").on("click","span", (function(event){
	// $(this).parent().remove(); // removes the li element from the list
	//Lets fade -out first
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation(); //Prevents event from bubbling, wont trigger events on parent, its a jQuery method
}));

// Adding a new to-do item, adding a keypress event on input with type as Text
$("input[type='text']").keypress(function(event){
	//Check if user pressed on Enter Key( code with 13)
	if(event.which === 13){
		//Get the value entered in the text box
		var newTodo = $(this).val();
		//Clear the text box
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + newTodo + "</li>");
	}
});


$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});