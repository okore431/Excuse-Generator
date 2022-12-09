window.onload = () => {
  //write your code here

  function generateExcuse() {

  let who = ['The cat','My husband','His dog','My bird'];
  let action = ['ate','run','jumped','broke', 'hypnotized'];
  let what = ['my nugget', 'the fish', 'his iguana'];
  let when = ['after party','at brunch time','when I slept','during the hike','before zumba class'];
    
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random()  * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
 
  let excuse = who[whoIndex] +' '+ action[actionIndex] +' '+ what[whatIndex] +' '+ when[whenIndex] +'.';
    
  return excuse;
  };

  document.querySelector ('#the-excuse').innerHTML = generateExcuse();
}