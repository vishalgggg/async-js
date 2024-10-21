const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);
// const apiUrl = 
function getTodos() {
  // Write your code here
  
  axios.get("https://crudcrud.com/api/4ba15154147f459889ad6cdd3c9de74e/addStudent")
  .then(response => {
    console.log('Todos:', response.data);
  })
  .catch(error => {
    console.error('Error fetching todos:', error);
  });
}

function postTodo() {
  // Write your code here
  
  axios.post("https://crudcrud.com/api/4ba15154147f459889ad6cdd3c9de74e/addStudent", { title: "Learn Axios", completed: false })
    .then(response => {
      console.log('Todo added:', response.data);
    })
    .catch(error => {
      console.error('Error adding todo:', error);
    }  );
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/4ba15154147f459889ad6cdd3c9de74e/addStudent/67116d37a0a8cd03e818ad9a", { title: "Learn Axios", completed: true })
    .then(response => {
      console.log('Todo added:', response.data);
    })
    .catch(error => {
      console.error('Error adding todo:', error);
    }  );
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/4ba15154147f459889ad6cdd3c9de74e/addStudent/67117096a0a8cd03e818ada7")
    .then(response => {
      console.log('Todo added:', response.data);
    })
    .catch(error => {
      console.error('Error adding todo:', error);
    }  );
}
// module.exports = {getTodos,putTodo,deleteTodo,postTodo}
