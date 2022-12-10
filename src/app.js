
window.onload = () => {
  //write your code here

  function generateExcuse () {

  let who = ['The cat','My husband','His dog','My bird'];
  let action = ['ate','run','jumped','broke', 'hypnotized'];
  let what = ['my nugget', 'the fish', 'his iguana'];
  let when = ['after party','at brunch time','when I slept','during the hike','before zumba class'];
  let time = ['at five', 'at four', 'at one'];
    
  function randomIndex (arr) {

    let arrIndex = Math.floor(Math.random()* arr.length);
    return arr [arrIndex];
  }
 
  let excuse = randomIndex (who) +' '+ randomIndex (action) +' '+ randomIndex (what) +' '+ randomIndex (when) +' '+ randomIndex (time) + '.';
    
  return excuse;
  };

  document.querySelector ('#the-excuse').innerHTML = generateExcuse();
}
