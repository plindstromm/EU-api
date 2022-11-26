const BASE_URL = `https://unstats.un.org/SDGAPI`

const bodyElem = document.querySelector('body')

async function getGoals() {
    const response = await fetch(`${BASE_URL}/v1/sdg/Goal/List`);  
    const data = await response.json()

    return data;
}

function displayGoals(goalsArray) {
goalsArray.forEach((goal) => {
    console.log(goal);
    const goalElem =
    `
    <p>${goal.title}</p>
    `
    bodyElem.insertAdjacentHTML('beforeend',goalElem)
});
}



async function syncGoals(){ 
const goals = await getGoals()
displayGoals(goals)
console.log(goals)
}






syncGoals()
