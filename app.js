console.log('helelere')
const userURL = `http://localhost:3000/users`
const signupForm = document.getElementById(`signup-form`)
const createButton = document.querySelector(`#createButton`)
signupForm.addEventListener('submit', () => createUser(event))
        
function createUser(event){
        event.preventDefault()
        console.log(event)
        const formData = new FormData(signupForm)
        const nameInput = formData.get("name")
        const usernameInput = formData.get("username")
        const passwordInput = formData.get("password")
        const userObject = {user: {name: nameInput, username: usernameInput, password: passwordInput}
} 
          console.log(userObject)
          fetch(userURL, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify(userObject)
    }).then(signupForm.reset())
}



const loginForm = document.querySelector(`#login-form`)
const loginButton = document.querySelector(`#enterButton`)
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      loginForm.addEventListener("submit",() => login(users))
    })

	function login(users){ 
  event.preventDefault()  
      const usernameInput = document.querySelector("#username")
    	const existingUser = users.find(user => {
        return user.username == usernameInput.value})
    	if (existingUser) {
        window.location = `user.html?id=${existingUser.id}`
    	} else {
        alert("Oh no! Wrong User!");
    	}
	}






// const textField = document.querySelector('#username')
// const textname = document.querySelector('#name')
// const form = document.querySelector('.sign-in')

// fetch('http://localhost:3000/users')
//     .then(response => response.json())
//     .then(users => {
//         const submitButton = document.querySelector('#createButton')
//         submitButton.addEventListener("click", () => testtrial(users))
//     })

// function testtrial(users) {
//     const existingUser = users.find(user => {
//         return user.username == textField.value
//     })
//     console.log(existingUser)
//     if (existingUser) {
//         window.location = `showuser.html?id=${existingUser.id}`
//     } else {
//         alert("Oh no! It looks like that input was incorrect!");
//     }
// }



    