// Import stylesheets
import './style.css';

// Write Javascript code!
class Deck{
  constructor(){
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset(){
    this.deck = [];
    document.getElementById("app").innerHTML = "";
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        		var card = {Value: values[value], Suit: suits[suit]};
			      this.deck.push(card);
      }
    }
  }

  shuffle(){
    document.getElementById("app").innerHTML = "";
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    return this.deck.pop();
  }

}

 function renderDeck(deck)
{

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
		//document.getElementById("app").appendChild(card);
	}
  
}

const deck1 = new Deck();
console.log(deck1.deck);
renderDeck(deck1.deck);

document.getElementById("shuffleBtn").addEventListener("click", function() {
  shuffleDeck(deck1);
});
document.getElementById("resetBtn").addEventListener("click", function() {
  resetDeck(deck1);
});

function shuffleDeck(deck1)
{
  deck1.shuffle();
  renderDeck(deck1.deck);
}
function resetDeck(deck1)
{
  deck1.reset();
  renderDeck(deck1.deck);
}