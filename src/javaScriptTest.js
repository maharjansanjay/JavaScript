$("#block1").show();

var interval1 = setInterval(function(){moveFirstBlock(1);}),10);


function randomNumberFromRange(min,max)
{
    var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
return randomNumber
}


function startOfInterval(blockNumber)
{
intervalArray[blockNumber -1];
}


function moveFirstBlock(blockNumber){
	var top = $("#block" + blockNumber).position().top;
	$("#block" + blockNumber).css("top",(top + 1) + "px");
	if(top>500)
	{
		clearInterval(intervalArray[blockNumber - 1]);
	}

};

var interval = setInterval(function(){startOfInterval(randomNumberFromRange(1, 4)
)},5000);