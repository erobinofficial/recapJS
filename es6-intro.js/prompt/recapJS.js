function fullName (first, second) {
  const name = first +' Islam '+ second;
  return name;
}
const first = window.prompt('Enter your first name');
const second = window.prompt('Enter your second name');
const person = fullName(first, second);
document.write(person);
