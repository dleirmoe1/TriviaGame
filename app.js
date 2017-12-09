var userPicks;
var correctAnswer=0;
var incorrectAnswer=0;
var unAnswer=0;
var question=0;
var images;
var count=30

var disneyQuestion=[
{
question:"In Alladin, what is the name of Jasmine's pet tiger?"
choices:{"Rajah", "Bo", "Iago","Jack"},
},
correctAnswer:0
}
{
question:"In the Lion King, where does Mufasa and his family live?"
choices:{"Rocky Mountain", "Forest","Desert","Pride Rock"},
}
correctAnswer:3
}
{
question:"During the ballroom scene of Beauty & The Beast, what color is Belle's Gown?"
choices:{"Yellow", "Blue", "Gold", "White"},
}
correctAnswer:2
}
{
question:"In Alice in Wonderland, what is the name of Alice's kitten?"
choices:{"Dinah", "Sammie", "Kat","Luna"},
}
correctAnswer:0
}
{

$("#button").click(function(){
$(this).hide();
counter=setInterval(timer,1000);
displayTrivia();
});

function timer(){
	count--;
	if (count <=0){
		return;
}
$("#timer").html("Time remaining" + "00" + "secs");
}

function displayTrivia(){
	$("#quiz").html(disneyQuestion[0].question);
	question++

var choicesArr=disneyQuestion[0].choices;
var buttonArr=[];

for (let i=0; i< choicesArr.length; i++){
	var button=$('<button>');
	button.text(choicesArr[i]);
	button.attr('quiz', i);
	$('#mc').append(button);
}





















// function check(){
	// $("#button").hide();
	// $("#quiz").show();
	// $("#demo").show();
// }

// $("#quiz").hide();
// $("#demo").hide();





