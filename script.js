
function generateMessage (verse) {
    var verse = ['For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. Romans 8:18',
'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. John 3:16',
'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. Matthew 6:33'];
    return verse[Math.floor(Math.random()*verse.length)];
}

var verse = ['For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. Romans 8:18',
'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. John 3:16',
'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. Matthew 6:33'];

console.log(generateMessage(verse)); 

 const clickHandler = function () {
  let outputDiv = document.getElementById('message-output');
  outputDiv.style.visibility = "visible";
  outputDiv.innerHTML=`<p>${generateMessage()}</p>`;
  let buttonText = document.querySelector('button');
  buttonText.innerHTML="want another verse?";
} 



