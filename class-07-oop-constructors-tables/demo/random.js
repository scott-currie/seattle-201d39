let rnd = Math.random();

let min = 10;
let max = 20;

console.log( 
  'Random number between ' + min + ' and ' + max + "\n",
  ' Random #', rnd, "\n",
  '  ^ * (max-min)+1', rnd * (max-min)+1,  "\n",
  '  ^ + min', (rnd * (max-min)+1) + min, "\n",
  '  ^ Math.floor()', Math.floor((rnd * (max-min)+1) + min) + "\n",
);

