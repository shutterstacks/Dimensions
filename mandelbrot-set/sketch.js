let side = 800;
let scale = 1.5;
let scaling = scale / (side/2);
let rad = 2; 
let color;
let iterations = 100;
let k = 0;
let h = -0.5;

function setup() {
createCanvas(side, side);
    fill('#000');
    stroke("#000");
    rect(0, 0, width, height);
    for(let x = -side/2; x < side/2; x++){
        for(let y = side/2; y > -side/2; y--){
            
            const c = [(x * scaling) + h, y * scaling];
            let z = [(x * scaling) + h, y * scaling];

            for(let int = 0; int < iterations; int = int + 2) {
              

                z[int+2] = ( z[int] * z[int] ) - ( z[int + 1] * z[int + 1] ) + c[0];
                z[int+3] = ( 2 * z[int] * z[int + 1] ) + c[1];

            }
            //console.log(`${x}, ${y} iterations : ${iterations} \n ${z} \n ${Math.sqrt(z[0]**2 + z[1]**2)}`)
            if(Math.sqrt(z[iterations - 2]**2 + z[iterations - 1]**2) < rad) {
               // console.log(Math.sqrt(z[0]**2 + z[1]**2), z[0], z[1]);
                color = "#fff";
            } else {
                color = "#000";
            }
            stroke(color);
            rect(x + side/2, y + side/2, 1, 1);
        }
    }
  }
  function draw() {
    
  }