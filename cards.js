let cards = [{
        image: "https://i.pinimg.com/736x/6c/c6/9c/6cc69c74f7ffba280efb285b3db69f2d.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/736x/6c/c6/9c/6cc69c74f7ffba280efb285b3db69f2d.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://4kwallpapers.com/images/wallpapers/anime-girl-alone-fantasy-5k-1242x2208-3.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://4kwallpapers.com/images/wallpapers/anime-girl-alone-fantasy-5k-1242x2208-3.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://www.boredart.com/wp-content/uploads/2016/07/Peaceful-Lotus-Flower-Painting-Ideas-9.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://www.boredart.com/wp-content/uploads/2016/07/Peaceful-Lotus-Flower-Painting-Ideas-9.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/b5/75/c6/b575c6e1e4a461c7e286b5f11470dc3b.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/b5/75/c6/b575c6e1e4a461c7e286b5f11470dc3b.jpg",
        value: 4,
        status: "closed"
    },

    {
        image: "https://www.debate.org/photos/members/1/494/493390-drn55-a.jpg",
        value: 5,
        status: "closed"
    },
    {
        image: "https://www.debate.org/photos/members/1/494/493390-drn55-a.jpg",
        value: 5,
        status: "closed"
    },
]


for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}
    displaycards=(cards)=> {
    let cardsString = "";
    for(let i=0;i<cards.length;i++) {
        cardsString += `<div class="card" style= "background-image:url('${cards[i].image}')">
    <div class="overlay ${cards[i].status}" onclick="opencard(${i});"></div>
    </div>\n`;
  };

    document.getElementById('cards').innerHTML = cardsString;

}
displaycards(cards);
let cardcount=0;
let val1=null,val2=null;
let score=0;
opencard=(index)=>
{
   cards[index].status="opened";
   displaycards(cards);
   if(cardcount===0){
     val1=cards[index].value;
     cardcount=1;
   }
   else if(cardcount===1){
     val2=cards[index].value;
     if(val1===val2)
     {
       score++;
       document.getElementById('score').innerText=score;
       val1=null;
       val2=null;
       cardcount=0;
     }else{
       alert("Game Over!!");
       location.reload();
     }

}
}
