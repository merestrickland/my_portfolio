
export default function sketch(p){

    p.setup = () => {
        p.createCanvas(1000, 500);
        p.background(245, 296, 243)
    }
    
      
    p.draw = () => {
      
//Wall Drawing #17 (1969)
// Four-part drawing with a different line direction in each part.

//VERTICAL LINES
for(let x=0; x<250; x+=5) {
    // strokeWeight(3)
    p.line(x, 0, x, 500)
  }
  
  //HORIZONTAL LINES
  for(let i = 0; i <= 500; i+=5){
    p.line(250, i, 500, i)
    }
  
  //DIAGONAL LINES (#1)
  for (let i = 5; i <= 250; i += 5){
    p.line(500, i, 500+i, 0);
    p.line(750, 250+i, 500+i, 500)
    p.line(500, 250+i, 500+i, 250)
    p.line(500+i, 250, 750, i)
  }
  
  //DIAGONAL LINES (#2)
  
  for (let i=0; i<=250; i+=5) {
    p.line(750, i, 1000-i, 250)
    p.line(1000-i, 0, 1000, i)
    p.line(750, 250+i, 1000-i, 500)
    p.line(1000, 250+i, 1000-i, 250)
  }

  }
      
}
