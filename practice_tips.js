let integers = [1,2,3,4];
let index = 0;

for (let i = 0; i < integers.length; i ++){
  setTimeout(function(i_local){
    console.log(i_local)
  }, 3000)
}
