console.log('helelere')
const userURL = `http://localhost:3000/users`
const showUserURL = `http://localhost:3000/users/${userId}`
const signupForm = document.querySelector(`#signup-form`)
const signupButton = document.querySelector(`#createButton`)
const loginForm = document.querySelector(`#login-form`)
const loginButton = document.querySelector(`#enterButton`)
	  

fetch(userURL)
    .then(response => response.json())
    .then(user => console.log(user))


    function create(user){
    	
    }
          fetch(userURL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user})
    })

const name = document.querySelector('h3')
name.innerText = user.username

	function login(user){   
    	const existingUser = users.find(user => {
        return user.username == textField.value})
    	if (existingUser) {
        window.location = `showuser.html?id=${existingUser.id}`
    	} else {
        alert("Oh no! Wrong User!");
    	}
	}
     

    