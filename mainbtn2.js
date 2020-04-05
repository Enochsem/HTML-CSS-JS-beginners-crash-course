const myform = document.querySelector('#myform');
const nameinput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#programmers');

const from =document.querySelector('#from');
const to =document.querySelector('#to');



// to select the submit button
myform.addEventListener('submit', onsubmit);
// function the submit button will pefrom 
function onsubmit(e){
	e.preventDefault();

// validation of the input filled
	if(nameinput.value === ''){
		msg.classList.add('err_msg');
		msg.innerHTML = 'Message can not be empty';

		setTimeout(() => msg.remove(), 3000);
	} 
	else{ 

		const li = document.createElement('li');
		li.className='li';
		li.appendChild(document.createTextNode(`${nameinput.value}`));

		var span = document.createElement('span');

		span.appendChild(document.createTextNode(`from: ${from.value}`));
		span.appendChild(document.createTextNode(`    to: ${to.value}`));

		li.appendChild(span);
// appending my li to my userlist
		userList.appendChild(li);

		     	// Delete button
		 var del = document.createElement('button');
		 del.appendChild(document.createTextNode('x'));
		 del.className='del';

		 li.appendChild(del);
		 

		 		// Save button
		 // const save = document.createElement('button');
		 // save.appendChild(document.createTextNode('Save'));
		 // li.appendChild(save);

		if(nameinput.value !== ''){

			msg.innerHTML='Sent';

			setTimeout(() => msg.remove(), 3000);
			
		}else{
			msg.classList.add('err_msg');
			msg.innerHTML='Message ERROR';

			setTimeout(() => msg.remove(), 3000);
		}

// clearing the filled after each input 
		nameinput.value='';
		from.value='';
		to.value='';
	}
}


userList.addEventListener('click', delfun);

function delfun(e) {
	// body...
	if (e.target.classList.contains('del')) {
			var li = e.target.parentElement;
			userList.removeChild(li);
		
	}
};