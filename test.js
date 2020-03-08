const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
  }
  
  let petsWithAge = [];
  petsWithAge = pets.map((number) => {return number.age = getAge(number)})
  /*for (let i = 0; i < pets.length; i++) {
    var pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }*/
  console.log(petsWithAge );
  console.log( "from petswithage");
  
  let dogs = [];
  dogs = pets.filter((number)=>{ return number.type == "dog" })
  /*for (let i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.type === "dog") {
      dogs.push(pet);
    }
  }*/
  console.log(dogs );
  console.log( " from dogs");
  
  const jasper = pets.find((number) =>{return number.name==="Jasper"}) ;
  /*for (let i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  }*/
  console.log("Jasper is " + jasper.age + " years old");