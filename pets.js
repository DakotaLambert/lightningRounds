console.time("Execution Time");

const printPetPreference = (breed) => {
	if (breed) {
		return `My favorite animal is a ${breed}`;
	} else {
		return `
I guess you REALLY like cats

         <MEOW>
       ///____///
      /  o   o  /
     ( ==  ^  == )
      )         (
     (           )        /
    ( (  )   (  ) )       /
   (__(__)___(__)__)_____/
  
 `
	}
};

console.log(printPetPreference("Limzard"));
console.log(printPetPreference(""));
console.log(printPetPreference());

console.timeEnd("Execution Time");
