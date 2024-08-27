//2.2.2 Assignment: Forms by Eileen
/** GENERAL FEEDBACK:
 *
 */

//QUESTION 9-11: attaching a submit event listener to the form, ensuring the default behavior is prevented. then updating the text content of the #results section with the form values submitted and resetting form at the end
// method 1: using FormData API
const handleSubmit = (e) => {
  e.preventDefault(); //prevent forms default behavior of reloading
  const form = e.target;
  const formValues = Object.fromEntries(new FormData(form)); //getting an obj from the form with key-value pairs of the form's name fields and their corresponding input values
  document.getElementById('results-username').textContent = formValues.username;
  document.getElementById('results-coding-level').textContent = formValues.codingLevel;
  document.getElementById('results-location').textContent = formValues.location;
  document.getElementById('results-did-like-assignment').textContent = formValues.didLikeAssignment ? 'Yes' : 'No'; //converting default 'on' or 'off' checkbox states to 'Yes' or 'No'
  // debugger; //pauses code + enables debugging directly in the dev tools console as one would console.log here
  form.reset(); //clearing form at the end
};

// //method 2: using just the form obj
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const form = e.target;
//   document.getElementById('results-username').textContent = form.username.value;
//   document.getElementById('results-coding-level').textContent = form.codingLevel.value;
//   document.getElementById('results-location').textContent = form.location.value;
//   document.getElementById('results-did-like-assignment').textContent = form.didLikeAssignment.checked ? 'Yes' : 'No';
//   form.reset();
// };

const main = () => { //runner func for readability + maintainability
  const form = document.querySelector('#new-user-form');
  form.addEventListener('submit', handleSubmit);
};

main();