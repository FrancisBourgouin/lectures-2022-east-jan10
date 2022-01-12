const someCoolObject = {
  name: "Petit Poulet",
  height: 5,
  description: "It's a little chicken",
  key: "I'm the key called key",
  "super key of destiny": true,
};

someCoolObject["super key of destiny"];

// Loops : for..in, for..of, Object.keys

for (const key in someCoolObject) {
  // console.log(key);
}
// Success, if we wanted the keys
const listOfKeys = Object.keys(someCoolObject);
for (const key of listOfKeys) {
  console.log(key);
}
for (const key of listOfKeys) {
  console.log(someCoolObject[key]);
}

const listOfValues = Object.values(someCoolObject);
for (const value of listOfValues) {
  console.log(value);
}

for (const key in someCoolObject) {
  // console.log(someCoolObject[key]);
  // console.log(someCoolObject.key);
}
