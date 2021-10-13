var bell=document.querySelector('.alertdiv');
var belldiv=document.querySelector('.bell');


bell.addEventListener('mouseover', () => {
	belldiv.classList.remove('invisible');
},false);

bell.addEventListener('mouseout', () =>{ 
	var onbellTab=false;

	belldiv.addEventListener('mouseover',(e) =>{
		if(e){
			onbellTab=true;
			belldiv.classList.remove('invisible');
			belldiv.addEventListener('mouseout',() =>{
				belldiv.classList.add('invisible');
			})
		}
		else{
			belldiv.classList.add('invisible');
		}
	});

	setTimeout(() => {
		if(!onbellTab)
		{
			belldiv.classList.add('invisible');
		}
	}, 1000);

},false);



var announcement=document.querySelector('.mikediv');
var announcementdiv=document.querySelector('.mikehover');


announcement.addEventListener('mouseover', () => {
	announcementdiv.classList.remove('invisible');
});

announcement.addEventListener('mouseout', () =>{ 
	var onmikeTab=false;

	announcementdiv.addEventListener('mouseover',(e) =>{
		if(e){
			onmikeTab=true;
			announcementdiv.classList.remove('invisible');
			announcementdiv.addEventListener('mouseout',() =>{
				announcementdiv.classList.add('invisible');
			})
		}
		else{
			announcementdiv.classList.add('invisible');
		}
	});

	setTimeout(() => {
		if(!onmikeTab)
		{
			announcementdiv.classList.add('invisible');
		}
	}, 1000);

},false);

var ham=document.querySelector('.nav-item-ham');
var hamdiv=document.querySelector('.hamm');


ham.addEventListener('mouseover', () => {
	hamdiv.classList.remove('invisible');
});

ham.addEventListener('mouseout', () =>{ 
	hamdiv.classList.add('invisible');

});