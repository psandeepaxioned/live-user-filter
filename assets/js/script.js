/* Author: 

*/
const users = document.querySelector('ul')
const filter = document.querySelector('.filter')
const userList = []

getUsers()

filter.addEventListener('input', (e) => filterData(e.target.value))

function getUsers() {
  fetch(`https://randomuser.me/api?results=20`)
    .then((res) => res.json())
    .then((data) => {

			data.results.forEach(user => {

				const li = document.createElement('li');
				const image = user.picture.medium;
				const firstName = user.name.first;
				const lastName = user.name.last;
				const state = user.location.state;
				const country = user.location.country;

				userList.push(li)

				const usersInnerHTML = `
					<figure><img src="${image}" alt="User Profile"></figure>
					<div class="info">
				    <span class="name">${firstName} ${lastName}</span>
				    <span class="location">${state}, ${country}</span>
				  </div>
				`;

			li.innerHTML = usersInnerHTML;
			users.appendChild(li);

			});
  });
}

function filterData(searchTerm) {
	userList.forEach(item => {
		if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
			item.classList.remove('hide')
		}else{
			item.classList.add("hide")
		}
	})
}

// function fetchUsers(){
// 		for(let i=1; i<=20;i++){
// 			getUsers(i);
// 		}
// }

// fetchusers()

//  function createUsers(user) {
// 	const li = document.createElement('li');
// 	const image = user.picture.medium;
// 	const firstName = user.name.first;
// 	const lastName = user.name.last;
// 	const state = user.location.state;
// 	const country = user.location.country;


// 	const usersInnerHTML = `
// 	<figure><img src="${image}" alt="User Profile"></figure>
// 	<div class="info">
//     <span class="name">${firstName} ${lastName}</span>
//     <span class="location">${state} ${country}</span>
//   </div>
// 	`;

// 	li.innerHTML = usersInnerHTML;
// 	users.appendChild(li);
// }




















