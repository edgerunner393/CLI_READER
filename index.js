import { program } from 'commander';
import fs from 'fs';

program
  .option ('-c , --count <text>', 'This is count')
  .option ('-r , --read <text>' , 'This is show')

program.parse();

function reader(given){
  return new Promise((resolve, reject) =>{
    fs.readFile(given, 'utf-8', (err, data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    })
  })
}

if(program.opts().count){
    reader(`${program.opts().count}`).then((data)=>{
    const nums = data.split(" ").length;
    console.log(nums);
  })
}

if(program.opts().read){
  reader(`${program.opts().read}`).then((data)=>{
    console.log(data);
  })
}
