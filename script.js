const canvas=document.querySelector(".pad")
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
function getRandomColor(){
    const letters='0123456789ABCDEF';
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
        
    }
    return color;
}
let p=+prompt("What is the grid size you want?","");
function drawGrid(x,y)
{
    const gridSize=p;
    const gridWidth=1;
    const gridHeight=1;
    for(let i=0;i<gridWidth;i++){
        for(let j=0;j<gridHeight;j++){
        ctx.fillStyle=getRandomColor();
        ctx.fillRect(x+i*gridSize,y+j*gridSize,gridSize,gridSize);
    }
    }

};
canvas.addEventListener("mousedown", (event) => {
    const x=event.clientX;
    const y=event.clientY;
    isDrawing = true;
  });
canvas.addEventListener('mousemove',(event)=>{
    if(isDrawing){
    x=event.clientX;
 y=event.clientY;
    drawGrid(x,y);
    }
});
canvas.addEventListener('mouseup',(event)=>{
    if(isDrawing){
        drawGrid(x,y);
        x=0;
        y=0;
        isDrawing=false;
    }
})
window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});