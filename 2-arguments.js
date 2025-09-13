const myArgument = process.argv.slice(2);

if (myArgument.length < 1) {
  console.log('No argument');

} else if (myArgument.length ==1){
console.log("Argument found");
}
  
else if (myArgument.length ==3){
  console.log("Arguments found");
}

else
  {
  console.log('Arguments found');
}
