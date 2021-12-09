console.log (
	'%c This project made by Özgür Yaman.',

	 `
		color: #00EAD3;
		font-size: 15px;
		max-width: 100%;
	 `,
);

const todoMain = document.querySelector('.todo-main');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');

todoButton.addEventListener('click', buttonEvent = () => {
	
	let todoCard = document.createElement('div');
	let todoCardContent = document.createElement('p');
	let removeTaskButton = document.createElement('i');
	
	todoMain.appendChild(todoCard);
	todoCard.classList.add('card');
	todoCard.appendChild(todoCardContent);
	todoCardContent.classList.add('card-content');
	todoCard.appendChild(removeTaskButton);
	removeTaskButton.classList.add('fas', 'fa-trash-alt');
	todoCardContent.textContent = todoInput.value;
	todoInput.value = "";
	
	if(todoCardContent.textContent.length == 0) {
			
		todoMain.removeChild(todoCard);
		
		let checkCharacterJson = {
			
			'Status': 'The task could not be added because it was not written.',
		}
		
		console.log(checkCharacterJson);
	} else {
		
		let addTaskJson = {
			
			'Task Added':  todoCardContent.innerText,
		}
		
		console.log(addTaskJson);
	}
	
	todoCardContent.addEventListener('click', finishTask = () => {

	// finished task event 
	// if you click on the task once, the task will be completed. 
	
		todoCardContent.classList.toggle('finish-task');
		
		if(todoCardContent.classList.contains('finish-task')) {
			
			let finishTaskJson = {
				
				'Task Completed': todoCardContent.textContent,
			}
			
			console.log(finishTaskJson);
		} else {
			
			let backFinishedTaskJson = {
				
				'Task take backed': todoCardContent.textContent,
			}
			
			console.log(backFinishedTaskJson);
		}
	});
	
	removeTaskButton.addEventListener('click', removeTask = (eventForRemoveTask) => {
			
		todoMain.removeChild(todoCard);
		
		let removeTaskJson = {
			
			'Task removed': todoCardContent.textContent,
		}
		
		console.log(removeTaskJson);
	});
	
	var maxCharacter = 21;
	
	const todoPopup = document.querySelector('.pop-up');
	const todoPopupClose = document.querySelector('.pop-up-close');
	const todoPopupText = document.querySelector('.pop-up-text');
	
	if(todoCardContent.textContent.length > maxCharacter) {
		
		todoMain.removeChild(todoCard);
				
		todoPopup.style.display = 'block';
		
		todoPopupClose.onclick = (popupCloseEvent) => {
			
			todoPopup.style.display = 'none';
		}
		
		let characterLimitJson = {
			
			'Character limit exceeded': todoCardContent.textContent.length + ' characters entered',
		}
		
		let characterLimitJson2 = {
			
			'Character limit exceeded': todoCardContent.textContent,
		}
		
		console.log(characterLimitJson, characterLimitJson2);
		
	}
});
 
todoInput.addEventListener('keyup', enterEvent = (event) => {
	
	if(event.keyCode == 13) {
		
		buttonEvent();
	}
});
