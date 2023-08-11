const input = document.querySelector('#text');
const btn = document.querySelector('#addTaskBtn');
const result = document.querySelector('#result');
const totalList = document.querySelector('#total');
let taskCount = 0;

btn.addEventListener('click', (e) => {
    if (input.value === '') return;
    createElem(input.value);
    input.value = '';
});
//Create and delete tasks
function createElem(value) {
  
 taskCount++;
    const li = document.createElement('li');
    li.className = 'li';
    li.textContent = value;
    result.appendChild(li);

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'Удалить';
    li.appendChild(deleteBtn);
 //Delete task
    deleteBtn.addEventListener('click', e => {
        result.removeChild(li);
        taskCount--;
        totalList.textContent = taskCount;
    })
        totalList.textContent = taskCount;
    };