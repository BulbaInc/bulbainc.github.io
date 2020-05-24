function rand_splash() {
	var b=[];
	b[0]='Finally fuck even the door is open';
	b[1]='Herobrine deleted';
    b[2]="Pram! Children!";
	b[3]="Egor enters the water park, and he just";
	b[4]="Kuhnik";
    b[5]="Fucking allah akbar";
    b[6]="Tolya, we lived from the same factory"
	var i=Math.floor(Math.random()*b.length);
	document.getElementById('d_p').textContent = b[i]
}

rand_splash();