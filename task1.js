function createNewNote() {
  const container = document.getElementById('container');

  const note = document.createElement('div');
  note.classList.add('note');
  note.style.backgroundColor = '#fff8dc'; 

  const titleInput = document.createElement('input');
  titleInput.placeholder = 'Enter title...';
  titleInput.classList.add('note-title');
  titleInput.style.backgroundColor = '#e0f7fa';


  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Enter your note here...';
  textarea.style.width = '180px';
  textarea.style.height = '120px';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.style.boxSizing='2px';
  deleteBtn.onclick = () => {
    container.removeChild(note);
  };
note.appendChild(titleInput);
  note.appendChild(textarea);
  note.appendChild(deleteBtn);
  container.appendChild(note);
}