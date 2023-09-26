const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
    isHunter: false,
    nonHunter: false
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
    isHunter: false,
    nonHunter: false
}
]

function drawPeople() {
    locations.forEach(location => {

        const peopleAtLocation = people.filter(people => people.location == location)

        console.log('people at location', peopleAtLocation);

        let stringOfPictures = ''

        peopleAtLocation.forEach(people => stringOfPictures += people.picture)

        console.log(location, stringOfPictures);

        const locationElement = document.getElementById(location)
        locationElement.innerText = stringOfPictures
    })
}

function changePeopleLocation() {

    people.forEach(people => {

        const randomLocationIndex = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationIndex]
        people.location = randomLocation
    })

    drawPeople()
}



function makeAHunter() {
    const randomPeopleIndex = Math.floor(Math.random() * people.length)
    const randomPeople = people[randomPeopleIndex]
    randomPeople.isHunter = true
    randomPeople.nonHunter = false
}



function attack() {
    changePeopleLocation()

}









makeAHunter()
drawPeople()