const BASE_URL = `https://unstats.un.org/SDGAPI`

const bodyElem = document.querySelector('body')

async function getGoals() {
    const response = await fetch(`${BASE_URL}/v1/sdg/Goal/List`);  
    const data = await response.json()

    return data;
}


function displayDescription(descriptionArray) {
    descriptionArray.forEach((description) => {
                console.log(description);
        const descriptionElem =
        `
        <p>${goal.description}</p>
    
        `
        bodyElem.insertAdjacentHTML('beforeend',descriptionElem)
    });
    }



function displayGoals(goalsArray) {
goalsArray.forEach((goal) => {
    console.log("detta är goal" + goal);
    const goalElem =
    `
    <p>${goal.title}</p>
    <button onclick="displayDescription()">Click me</button>


    `
        bodyElem.insertAdjacentHTML('beforeend',goalElem)
});
}



function displayDescription(){
    
}



async function syncGoals(){ 
const goals = await getGoals()
displayGoals(goals)
console.log(goals)
}
 


syncGoals()


