var timer = null;
var countDownNumber = 5;

var changeState = function (state){
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countDownNumber = 5;
	document.getElementById('countDown')
		.innerHTML = countDownNumber;
	
	if (state == 2){
		timer = setInterval(function(){
		countDownNumber = countDownNumber-1;
		document.getElementById('countDown')
		.innerHTML = countDownNumber;
		if (countDownNumber <=0) {
			changeState(3);
	    };
    }, 500);
    } else if (state == 3) {
		var success = setTimeout(function ()
		{
			var randomNumber = Math.round
			(Math.random()*10);

			console.log('randomNumber:',
				randomNumber)
			
			if (randomNumber = 1){
				changeState(4);
			} else (randomNumber = 2){
				changeState(5);
			}else (randomNumber = 3){
				changeState(6);
			}else (randomNumber = 4){
				changeState(7);
			}else (randomNumber = 5){
				changeState(8);
			}else (randomNumber = 6){
				changeState(9);
			}else (randomNumber = 7){
				changeState(10);
			}else (randomNumber = 8){
				changeState(11);
			}else (randomNumber = 9){
				changeState(12);
			}else (randomNumber = 10){
				changeState(13);
			}else (randomNumber = 11){
				changeState(14);
			}else (randomNumber = 12){
				changeState(15);
			}

		}, 2000);
	};
}