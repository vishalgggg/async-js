function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/3d358a353e164510972c99606296e24d/appointmentData",
        userDetails
      )
      .then((response) => 
        {
            displayUserOnScreen(response.data)
            console.log(response);
        })
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
window.addEventListener("DOMContentLoaded",()=>{
    axios
    .get(
        "https://crudcrud.com/api/3d358a353e164510972c99606296e24d/appointmentData")
    .then((response) => {
        console.log("response");
        // displayUserOnScreen(response.data)

        for(let i = 0;i < response.data.length;i++){
            displayUserOnScreen(response.data[i]);
        }
        
    })
    .catch((error) => console.log(error)); 
})
   
  
function displayUserOnScreen(userDetails) {
const userItem = document.createElement("li");
userItem.appendChild(
    document.createTextNode(
    `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
);

const deleteBtn = document.createElement("button");
// deleteBtn.id = userDetails._id;
deleteBtn.appendChild(document.createTextNode("Delete"));
userItem.appendChild(deleteBtn);

const editBtn = document.createElement("button");
editBtn.appendChild(document.createTextNode("Edit"));
userItem.appendChild(editBtn);

const userList = document.querySelector("ul");
userList.appendChild(userItem);
deleteBtn.addEventListener("click", function (event) {
  axios.delete(`https://crudcrud.com/api/3d358a353e164510972c99606296e24d/appointmentData/${userDetails._id}`);
  userList.removeChild(event.target.parentElement);
//   localStorage.removeItem(userDetails.email);
});
editBtn.addEventListener("click", function (event) {
  userList.removeChild(event.target.parentElement);
//   localStorage.removeItem(userDetails.email);
  axios.delete(`https://crudcrud.com/api/3d358a353e164510972c99606296e24d/appointmentData/${userDetails._id}`);
  document.getElementById("username").value = userDetails.username;
  document.getElementById("email").value = userDetails.email;
  document.getElementById("phone").value = userDetails.phone;
});


}



  // Do not touch code below
//   module.exports = handleFormSubmit;
  