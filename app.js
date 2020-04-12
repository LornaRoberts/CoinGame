//collision function if avatar and coin meet
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

//get the avatar and coin from the html
const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');


//add event listener
window.addEventListener('keyup', function(e){
	//if arrow down button pressed
	if(e.key === 'ArrowDown'|| e.key === 'Down'){
		//get horizontal position
  const currTop = extractPos(avatar.style.top);
  //convert horizontal position to pixels
  avatar.style.top = `${currTop + 50}px`;
	}
	else if(e.key === 'ArrowUp'|| e.key === 'Up'){
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = `${currTop - 50}px`;
	}
	else if(e.key === 'ArrowRight'|| e.key === 'Right'){
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft + 50}px`;
		avatar.style.transform = 'scale(1,1)';
	}
	else if(e.key === 'ArrowLeft'|| e.key === 'Left'){
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft - 50}px`;
		avatar.style.transform = 'scale(-1,1)';
	}
	//if the avatar and coin touch, change coin position
	if(isTouching(avatar, coin)) moveCoin();
});

//get the avatar position
const extractPos = (pos) => {
	//if no position, put the avatar at 100px x 100px
		if (!pos) return 100;
		//return the position as a whole number
return parseInt(pos.slice(0, -2));
}

//move the coin's position
const moveCoin = () => {
	//get the x coordinate
	const x = Math.floor(Math.random() * window.innerWidth);
	//get the y coordinate
	const y = Math.floor(Math.random() * window.innerHeight);
	//convert to a pixel
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
	}

	//call the moveCoin function
	moveCoin();