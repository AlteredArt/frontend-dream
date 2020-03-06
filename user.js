console.log('your dream journal page')
const dreamURL = "http://localhost:3000/dreams"

fetch(dreamURL)
  .then(response => response.json())
  .then(result => renderDream(result))


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

function renderDream(dreamData){
  dreamData.map(dream => {
    console.log(dream)
    const p = document.createElement('p')
    p.innerText = dream.description
   
    const h1 = document.createElement('h1')
    h1.innerText = dream.date
    
    const li = document.createElement('li')
    li.innerText = dream.mood

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    

    const card = document.createElement('div')
    const cardContainer = document.querySelector(`#card-container`)
    card.append(p, h1, li, deleteButton)
    card.setAttribute("class", "card")
    cardContainer.append(card)
    
 
    deleteButton.addEventListener('click', () => deleteDream(dream.id))
    
    function deleteDream(id){
      console.log("card note", card)
      event.target.parentNode.remove()
      fetch(`http://localhost:3000/dreams/${id}`, {method:'DELETE'})
   
    }
  }) 
}

    function postDream(descriptionInput, dateInput, moodInput){
      fetch(dreamURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date: dateInput, description: descriptionInput, mood: moodInput, user_id: 7 })
        }).then(dreamForm.reset())
    }
