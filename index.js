
function playsound(eve)
{
    const audio=document.querySelector(`audio[data-key="${eve.keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${eve.keyCode}"]`)
    if(!audio)//{Stop the Function from running all togather}
        return;
    audio.currentTime=0;//Rewind to the start
    audio.play();
    key.classList.add("playing");
}
function removeTransition(eve)
{
    if(eve.propertyName!== 'transform')//Skip it if is Not a Transform
        return;
    this.classList.remove('playing');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend',removeTransition))
window.addEventListener('keydown',playsound);
document.querySelectorAll("button")[0].addEventListener("click",function(e){
    console.log(this.innerHTML);
})

