function gameOver() {
	document.getElementById("scene").innerHTML = "<h2>A snake taking a sunbath, just about where you wanted to fetch water, felt offended by you blocking her sun.</h2> <img src= 'http://clipart-library.com/img1/909000.png'> <button class='button btn-lg' onclick='location.reload()'>Go back in time to save your ass!</button>";
}
function sceneTwo() {
	document.getElementById("scene").innerHTML = "<h2>Good Idea, you could remember that there are no poisonous cactus species out there. You got stung many times, but at least you feel refreshed!</h2><p>Now you are hungry. What to do?</p> <img src= 'https://www.tellwut.com/uploads/media/image/97670e1472604934o5993.jpg'> <br> <button class='button btn-lg' onclick='sceneThree()'>Fight a Shark!</button> <button class='button btn-lg' onclick='gameOverTwo()'>Eat a Coconut!</button>";
}
function gameOverTwo() {
	document.getElementById("scene").innerHTML = "<h2>When you shook the tree the coconut hit you on the head. It was the last coconut in your life!</h2> <img src= 'https://affirmpress.com.au/wp-content/uploads/2016/03/BOOK.Death-By-Coconut.jpg'> <button class='button btn-lg' onclick='location.reload()'>Go back in time to save your ass!</button>";
}
function sceneThree() {
	document.getElementById("scene").innerHTML = "<h2>You made the right choice! The Shark turned out to be easy target, as it was busy trying to crack a turtle's shell. So you could creep up on it and throw a heavy stone on its head. You will have enough shark meat for a whole week. Make sure to slice it up with a sharp object and let it dry in the sun, so it won't go bad</h2> <p>The moon has already risen and it's time to have some rest. Where will you sleep tonight?</p> <img src= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4e4196b-7b0e-4785-8af8-b2e1a08532a4/dfti0w-4cb7e30d-0ca1-4b39-9f30-f1078d99406a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0ZTQxOTZiLTdiMGUtNDc4NS04YWY4LWIyZTFhMDg1MzJhNFwvZGZ0aTB3LTRjYjdlMzBkLTBjYTEtNGIzOS05ZjMwLWYxMDc4ZDk5NDA2YS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.B0EkM1W2jy2aPwsUjQ2zvNax8khUXb2j9vHjo_ecRkQ'> <br> <button class='button btn-lg' onclick='gameOverThree()'>On the beach</button> <button class='button btn-lg' onclick='sceneFour()'>Up the mountain</button>";
}
function gameOverThree() {
	document.getElementById("scene").innerHTML = "<h2>A monster wave washed you away while you were asleep!</h2> <img src= 'https://thumbs-prod.si-cdn.com/lL80AvfaovdENkyo1NSHcQajVqM=/800x600/filters:no_upscale():focal(1230x870:1231x871)/https://public-media.si-cdn.com/filer/1a/28/1a2857f1-8082-43eb-8e63-d41304d04e2f/sep14_k02_phenom.jpg'> <button class='button btn-lg' onclick='location.reload()'>Go back in time to save your ass!</button>";
}
function sceneFour() {
	document.getElementById("scene").innerHTML = "<h2>Tonight, a monster wave hit the island, and washed everything away close to the shore. Luckily you had sought shelter at a safe altitude.</h2> <p>You are really proud of your survival skills, will you try to get rescued or stay on the island forever?</p> <img src= 'http://www.simplyb.com.au/wp-content/uploads/2016/11/SOS-in-sand_Shutterstock.jpg'> <br> <button class='button btn-lg' onclick='gameOverFour()'>Seek for rescue</button> <button class='button btn-lg' onclick='sceneFive()'>Stay forever</button>";
}
function gameOverFour() {
	document.getElementById("scene").innerHTML = "<h2>A ship took you on board. Untfortunately, the crew turned out to be pirates. They threw you overbord again on the deep ocean, where the sharks took revenge on you.</h2> <img src= 'https://www.toonpool.com/user/1172/files/formschoen_906575.jpg'> <button class='button btn-lg' onclick='location.reload()'>Go back in time to save your ass!</button>";
}
function sceneFive() {
	document.getElementById("scene").innerHTML = "<h2>Nothing lasts forever</h2><img src= 'https://i1.wp.com/www.southernfriedscience.com/wp-content/uploads/2017/08/desertisland.jpg'> <button class='button btn-lg' onclick='location.reload()'>Get stranded again</button>";
}	