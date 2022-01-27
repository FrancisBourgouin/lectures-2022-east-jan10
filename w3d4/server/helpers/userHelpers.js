const generateUserHelpers = (userDatabaseIsh, bcrypt, salt) => {
  const authenticateUser = (email, password) => {
    // Sadness! email doesn't exist (eject clauses)

    if (!userDatabaseIsh.hasOwnProperty(email)) {
      return { error: "Email doesn't exist", data: null };
    }
    // Darkness! password doesn't match (eject clauses)
    if (!bcrypt.compareSync(password, userDatabaseIsh[email].password)) {
      // if (userDatabaseIsh[email].password !== password) {
      return { error: "Password doesn't match", data: null };
    }

    return { error: null, data: userDatabaseIsh[email] };
  };

  const addUser = (user) => {
    const { name, email, password, secret } = user;
    // Sadness: one of the fields is empty
    if (!name || !email || !password || !secret) {
      return { error: "Empty fields", data: null };
    }
    // Sadness: email already exists
    if (userDatabaseIsh.hasOwnProperty(email)) {
      return { error: "Email already exists", data: null };
    }

    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword, salt);
    const newUser = { name, email, password: hashedPassword, secret };
    userDatabaseIsh[email] = newUser;

    return { error: null, data: newUser };
  };

  return { authenticateUser, addUser };
};

module.exports = generateUserHelpers;
