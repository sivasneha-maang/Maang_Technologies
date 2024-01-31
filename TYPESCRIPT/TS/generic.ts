function greek<S,T>(a:S,b:T) :[S,T]
{
    return [a,b];
}
console.log(greek<String,Number>("Hi",20));
interface res<T>{
    name:String;
    age:Number;
    data:T;
}
const example: res<object>=
{
    name:'Anusha',
    age: 20,
    data: {greeting: 'hi'}
}
console.log(example);

//keyof
interface Person {
    name: string;
    age: number;
  }

  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person = {
    name: "Max",
    age: 27
  };
  
  printPersonProperty(person, "name");  
  const a:Number|String|null=null;
  console.log(typeof a);

  interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
  
  let home: House = {
    sqft: 500,
    yard:{
        sqft:200
    }
  };
  
  printYardSize(home);
  
  function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
  }
              
  printMileage(null); 
  
  printMileage(0);
  printMileage(undefined);


