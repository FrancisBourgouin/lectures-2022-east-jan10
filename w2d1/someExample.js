const greetings = ["Bonjour", "Hello", "Guten tag", "Privet", { a: 1 }];

// "! =" => !=
// "! = =" => !==

// Take in greetings and a name as parameters
const sayHiInMultipleLanguages = (greetings, name) => {
  // Prepare a variable with a string type, parsedGreetings
  let parsedGreetings = "";
  // If greetings is not an array
  if (!Array.isArray(greetings)) {
    //  throw an error with message, bad value type
    throw new Error("OMG NOT AN ARRAY");
  }
  // Iterate over greetings
  // for (const greeting of greetings) {
  //   //  if greeting is not a string
  //   if (typeof greeting !== "string") {
  //     //    throw an error with message, bad value type
  //     throw new Error("GREETING NOT A STRING");
  //   }
  //   //  append the value of the greetings at a specific position + the name
  //   parsedGreetings += `${greeting} ${name} \n`;
  // }

  greetings.forEach((greeting) => {
    //  if greeting is not a string
    if (typeof greeting !== "string") {
      //    throw an error with message, bad value type
      throw new Error("GREETING NOT A STRING");
    }
    //  append the value of the greetings at a specific position + the name
    parsedGreetings += `${greeting} ${name} \n`;
  });
  // Return the parsedGreetings value
  return parsedGreetings;
};

// If the data in the array is bad or not there
// If the data is not an array
// If the name input is not there

// Should output multiple lines with a value each

const result = sayHiInMultipleLanguages(greetings, "Olga");
console.log(result);
