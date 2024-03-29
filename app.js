// Define an array to store to-do activities
var Activities = [];

// Get the input element from the DOM
var input = document.getElementById("input");

// Get the <ul> element for displaying to-do activities
var todoList = document.getElementById("todolist");

// Attach a click event listener to the button
document.getElementById("button").onclick = addActivity;

// Function to add a to-do activity
function addActivity() {
  // Push the input value to the list of activities
  Activities.push(input.value);
  
  // Clear the input field
  input.value = "";
  
  // Display the updated list of activities
  displayActivities();
}

// Function to display the list of activities
function displayActivities() {
  // Clear the existing list
  todoList.innerHTML = "";
  
  // Display each activity in the list
  Activities.forEach(function (activity, index) {
    todoList.innerHTML += "<li>" + activity + 
      "<a onclick='editActivity(" + index + ")'>Edit</a>" +
      "<a onclick='deleteActivity(" + index + ")'>&times;</a></li>";
  });
}

// Function to delete an activity
function deleteActivity(index) {
  // Remove the activity at the specified index
  Activities.splice(index, 1);
  
  // Update the displayed list
  displayActivities();
}

// Function to edit an activity
function editActivity(index) {
  // Prompt the user for a new value for the activity
  var newValue = prompt("Please insert your new value");
  
  // Update the activity at the specified index
  Activities.splice(index, 1, newValue);
  
  // Update the displayed list
  displayActivities();
}
