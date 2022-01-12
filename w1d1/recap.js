// Objects!

const someObject = {
  someKey: "some value",
  someNumber: 1,
};

// Object is a structural type
// Object is not iterable

// We access values in an object like:

// With a key, using the dot notation
someObject.someKey;
// With a key, using the square bracket notation
someObject["someKey"];

// We change values of an object like:

// With a key, using the dot notation
someObject.someKey = "some other value";
// With a key, using the square bracket notation
someObject["someKey"] = "some other value";

// We can add values to an object like:

// With a key, using the dot notation
someObject.someNewKey = "some new value";
someObject.someMethod = function () {
  console.log("I AM A METHOD");
};
// With a key, using the square bracket notation
someObject["someNewKey"] = "some new value";
someObject["someMethod"] = function () {
  console.log("I AM A METHOD");
};

// We can access the object from methods using *this*

someObject.someMethodThis = function () {
  console.log(this);
  console.log(this.someKey);
};

// We can access all the values of an object using:

// Using the object method Object.values()

listOfValues = Object.values(someObject);

// We can access all the keys of an object using:

// Using the object method Object.keys()

listOfKeys = Object.keys(someObject);

// We can iterate over the keys using

for (const key in someObject) {
  // ...
}

// We can then iterate over the values of the object
// using listOfValues & listOfKeys

for (const value of listOfValues) {
  // ...
}

for (const key of listOfKeys) {
  // ...
}
