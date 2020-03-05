console.log('your dream journal page')
const dreamURL = "http://localhost:3000/dreams"

fetch("http://localhost:3000/dreams")
  .then(response => response.json())

const dreamForm = document.querySelector(`#dream-form`)
const dreamText = document.querySelector(`#dream_input`)
dreamForm.addEventListener('submit', addDream)

function addDream(event){
	event.preventDefault()
  	const formData = new FormData(dreamForm)
  	const descriptionInput = formData.get("description")
  	const dateInput = formData.get("date")
  	const moodInput = formData.get("mood")

  	const dreamDescription = document.querySelector('#descriptionTag')
  	dreamDescription.innerText = descriptionInput

  	const dreamDate = document.querySelector(`.date`)
  	dreamDate.innerText = dateInput
  	
  	const dreamMood = document.querySelector(`#moodTag`)
  	dreamMood.innerText = moodInput

  	const card = document.querySelector(`.card`)
    
  	postDream(descriptionInput, dateInput, moodInput)
}
    function postDream(descriptionInput, dateInput, moodInput){
      fetch(dreamURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date: dateInput, description: descriptionInput, mood: moodInput })
        }).then(dreamForm.reset())
    }

