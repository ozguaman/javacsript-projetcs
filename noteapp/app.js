const addNoteButton = document.querySelector('.add-note-button');
const addNoteArea = document.querySelector('.button-event-box');
const closeBox = document.querySelector('.close-box');
const addNoteButtonInBox = document.querySelector('.add-note-button-box');

addNoteButton.addEventListener('click', addTaskButtonEvent = () => {

    addNoteArea.style.display = 'block';

    closeBox.addEventListener('click', closeBoxEvent = () => {

        addNoteArea.style.display = 'none';
    });

    addNoteButtonInBox.addEventListener('click', () => {

        closeBoxEvent();
    });
});

const addTitleBox = document.querySelector('.add-title');
const addTextBox = document.querySelector('.add-text');

addNoteButtonInBox.addEventListener('click', addNoteEvent = () => {
    
    const mainForNoteBox = document.querySelector('main');
    const mainNoteBox = document.createElement('div');
    const mainHeaderForNoteBox = document.createElement('header');
    const headerForNoteBoxHeader = document.createElement('div');
    const deleteButtonForNoteBox = document.createElement('i');
    const textForNoteBox = document.createElement('div');

    mainForNoteBox.appendChild(mainNoteBox);
    mainNoteBox.classList.add('note-box');
    mainNoteBox.appendChild(mainHeaderForNoteBox);
    mainHeaderForNoteBox.classList.add('note-box-main-header');
    mainHeaderForNoteBox.appendChild(headerForNoteBoxHeader);
    headerForNoteBoxHeader.classList.add('note-box-header');
    headerForNoteBoxHeader.textContent = addTitleBox.value;
    mainHeaderForNoteBox.appendChild(deleteButtonForNoteBox);
    deleteButtonForNoteBox.classList.add('fas', 'fa-trash-alt');
    mainNoteBox.appendChild(textForNoteBox);
    textForNoteBox.classList.add('note-box-text');
    textForNoteBox.innerHTML = addTextBox.value;
    addTitleBox.value = '';
    addTextBox.value = '';
        
    var emptyValue = 0;
    const alert = document.querySelector('.alert');
    
    if(headerForNoteBoxHeader.textContent.length == emptyValue || textForNoteBox.innerHTML.length == emptyValue) {
        
        alert.style.opacity = '1';

        setTimeout(function alertTimeout() {
            
            alert.style.opacity = '0';
        }, 1500);

        mainForNoteBox.removeChild(mainNoteBox);
    }

    deleteButtonForNoteBox.addEventListener('click', deleteNoteEvent = () => {

        mainForNoteBox.removeChild(mainNoteBox);
    });
});