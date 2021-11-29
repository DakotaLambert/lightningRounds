console.time("Execution Time");

const printPetPreference = (petBoi) => {
	if (petBoi) {
		return `My favorite dog breed is ${petBoi}`;
	} else {
		return `
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
