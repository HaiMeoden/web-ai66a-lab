async function greet () {
  return "hello world";
  
}
//console.log(greet());
//c1
function getData1() {
  let text = "";
  greet().then((response) => {
    text = response;
  });
  return text;
}
console.log(getData1());

//c2
async function getData2() {
  const text =  await greet();
  return text;
}
console.log(getData2());


function fetchUsers() {
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {return response.json();})
    .then((users) => {
      console.log(users);
    });
}

fetchUsers();