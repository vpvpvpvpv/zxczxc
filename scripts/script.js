var buyf = false;

function buy(){
	if(!buyf)
{
	document.getElementById('button').style.background = 'lime';
	document.getElementById('button').innerHTML="в корзине";
	buyf = true;
}
  else 
  {
  	document.getElementById('button').style.background = 'Silver';
	document.getElementById('button').innerHTML="Купить";
	buyf = false;
  }
}
