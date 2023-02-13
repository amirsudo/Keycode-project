let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let keyElem = $.querySelector('#key')
let locationElem = $.querySelector('#location')
let whichElem = $.querySelector('#which')
let codeElem = $.querySelector('#code')
let keyCodeElem = $.querySelector('#keyCode')



document.body.addEventListener('keydown', function (event) {
	
	event.preventDefault()
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	console.log(event)

	let eventKey = event.key
	let eventLocation = event.location
	let eventWhich = event.which
	let eventCode = event.code
	let eventKeyCode = event.keyCode

	keyElem.innerHTML = eventKey
	locationElem.innerHTML = eventLocation
	whichElem.innerHTML = eventWhich
	codeElem.innerHTML = eventCode
	keyCodeElem.innerHTML = eventKeyCode


})