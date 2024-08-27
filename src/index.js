//2.2.2 Assignment: Forms by Eileen
/** GENERAL FEEDBACK:
 *
 */

//QUESTION 9: attaching a submit event listener to the form, ensuring the default behavior is prevented
const handleSubmit = (e) => {
  e.preventDefault();
};

const main = () => { //runner func for readability + maintainability
  const form = document.querySelector('#new-user-form');
  form.addEventListener('submit', handleSubmit);
};

main();