console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

// create a section tag with an id of middle-earth
// add each land as an article tag
// inside each article tag include an h1 with the name of the land
// append middle-earth to your document body

function makeMiddleEarth () {
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (landName) {
    var land = document.createElement('article')
    var h1 = document.createElement('h1')
    h1.textContent = landName
    land.appendChild(h1)
    middleEarth.appendChild(land)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2

// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit
function makeHobbits () {
  var hobbitsList = document.createElement('ul')

  hobbits.forEach(function (hobbitsName) {
    var nameList = document.createElement('li')
    nameList.className = 'hobbits'
    nameList.textContent = hobbitsName
    hobbitsList.appendChild(nameList)
  })
  var theShire = document.getElementById('middle-earth').querySelector('article')
  theShire.appendChild(hobbitsList)
}
makeHobbits()

// Part 3

// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
// add the ring as a child of Frodo
function keepItSecretKeepItSafe () {
  var ring = document.createElement('div')
  ring.id = 'the-ring'
  ring.className = 'magic-imbued-jewelry'
  ring.addEventListener('click', nazgulScreech)
  var frodo = document.querySelector('.hobbits')
  frodo.appendChild(ring)
}
keepItSecretKeepItSafe()

// Part 4

// create an aside tag aside->ul -> li
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell
function makeBuddies () {
  var aside = document.createElement('aside')
  var buddiesUl = document.createElement('ul')

  buddies.forEach(function (budName) {
    var budList = document.createElement('li')
    budList.textContent = budName
    buddiesUl.appendChild(budList)
  })

  aside.appendChild(buddiesUl)

  var rivendell = document.getElementById('middle-earth').querySelector('article:nth-child(2)')
  rivendell.appendChild(aside)
}
makeBuddies()

// Part 5

// change the 'Strider' textnode to 'Aragorn'
function beautifulStranger () {
  document.querySelectorAll('li')[7].textContent = 'Aragorn'
}
beautifulStranger()

// Part 6

// assemble the hobbits and move them to Rivendell

// function leaveTheShire () {
//   var rivendell = document.getElementsByTagName('aside')
//   var assemb = document.getElementsByClassName('hobbits')
//   rivendell.appendChild(assemb)
// }

function leaveTheShire () {
  var riven = document.querySelector('aside')
  var theShire = document.getElementById('middle-earth').querySelector('article')
  var hobbits = theShire.querySelector('ul')
  riven.appendChild(hobbits)
}
leaveTheShire()

// Part 7

// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party
function forgeTheFellowShip () {
  var fellowship = document.createElement('div')
  fellowship.id = 'the-fellowship'
  var rivendell = document.getElementById('middle-earth').querySelector('article:nth-child(2)')
  rivendell.appendChild(fellowship)

  var allList = document.querySelectorAll('li')
  allList.forEach(function (listItem) {
    var newList = fellowship.appendChild(listItem)
    // alert('Fellowship Forged!')
  })
}
forgeTheFellowShip()

// Part 8

// change the 'Gandalf' textNode to 'Gandalf the White'
// apply style to the element
// make the background 'white', add a grey border
function theBalrog () {
  var gandalf = document.querySelector('#the-fellowship > li')
  gandalf.innerHTML = 'Gandalf the White'
  gandalf.style.backgroundColor = 'white'
  gandalf.style.border = '1.5px solid grey'
}
theBalrog()

// Part 9

// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// put a linethrough on boromir's name
// Remove Boromir from the Fellowship
function hornOfGondor () {
  // alert('The horn of gondor has been blown!')
  // alert('Boromir is dead.')
  var boromir = document.querySelector('#the-fellowship li:nth-child(5)')
  boromir.style.textDecoration = 'line-through'
}
hornOfGondor()

// Part 10

// take Frodo and Sam out of the fellowship and move them to Mordor
// add a div with an id of 'mount-doom' to Mordor
function itsDangerousToGoAlone () {
  var mount = document.createElement('div')
  mount.id = 'mount-doom'
  var mordor = document.getElementById('middle-earth').querySelector('article:last-child')
  mordor.appendChild(mount)
  var frodo = document.querySelector('#the-fellowship li:nth-child(6)')
  var sam = document.querySelector('#the-fellowship li:nth-child(7)')
  mount.appendChild(frodo)
  mount.appendChild(sam)
}
itsDangerousToGoAlone()

// Part 11

// Create a div with an id of 'gollum' and add it to Mordor
// Remove the ring from Frodo and give it to Gollum
// Move Gollum into Mount Doom
function weWantsIt () {
  var gollum = document.createElement('div')
  gollum.id = 'gollum'
  var ring = document.getElementById('the-ring')
  gollum.appendChild(ring)
  var mount = document.getElementById('mount-doom')
  mount.appendChild(gollum)
}
weWantsIt()

// Part 12

// remove Gollum and the Ring from the document
// remove all the buddies from the document
// Move all the hobbits back to the shire
function thereAndBackAgain () {
  var mount = document.getElementById('mount-doom')
  var gollum = document.getElementById('gollum')
  mount.removeChild(gollum)

  var hobbits = document.querySelectorAll('.hobbits')
  var shire = document.querySelector('article')
  for (var i = 0; i < hobbits.length; i++) {
    shire.appendChild(hobbits[i])
  }

  var fellowship = document.querySelector('#the-fellowship')
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.removeChild(fellowship)
}
thereAndBackAgain()
