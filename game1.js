let character = document.getElementById('character')
document.addEventListener('click',jump);
let counter=0;
function jump(){
    if(character.classList == 'animate'){return}
    character.classList.add('animate')
    setTimeout(function(){
        character.classList.remove("animate");
    },300)
}
let block=document.getElementById('block')
let checkDead=setInterval(function(){
function checkDead(){
    let characterTop=parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation='none'
        alert('game over. Score' +Math.floor(counter/100));
        counter=0;
        block.style.animation='block 1s infinite linear'
    }
    else{
        counter++;
        document.getElementById('score').innerHTML=Math.floor(counter/100)
    }

}},10)
