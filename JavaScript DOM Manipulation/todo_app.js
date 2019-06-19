// Todo Application:
// All Credit Goes to : HM Nayem (Twincle Cats)

// QuerySelectors
var ul = document.querySelector('.todoList');
var input = document.querySelector('.input');

// Event when we prass Enter key on input
input.addEventListener('keypress',(e) => {
	if(e.keyCode === 13) {
		var data = e.target.value;
		createLi(ul,data);
		e.target.value = "";
	}
})

function createLi(ul, data){
	var li = document.createElement('li');
	li.innerHTML = data;
	li.className = 'list-group-item d-flex';
	li.style.textAlign = 'left'

	// To close the 'li' item
	let span = document.createElement('span')
	span.innerHTML = 'X'
	span.setAttribute('style','color:red;text-align:right;cursor:pointer');
	span.className = 'ml-auto'
	span.addEventListener('click',(e) => {
		ul.removeChild(li)
	});


	li.appendChild(span)
	ul.appendChild(li)
}
