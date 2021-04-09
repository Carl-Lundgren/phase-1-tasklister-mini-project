document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector('#new-task-description');
    if (input.value) {
      renderTask(input.value);
      event.target.reset();
    }
  });

  function renderTask(task) {
    const list = document.querySelector('#tasks'); 
    const item = document.createElement('li');
    const deleteBtn = document.createElement('span');
    deleteBtn.innerText = ' ❌';
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
    item.innerText = task;
    item.append(deleteBtn);
    list.append(item);
  }
});
