const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const doesExist = (username)=>{
  let userswithsamename = users.filter((user)=>{
    return user.username === username
  });
  if(userswithsamename.length > 0){
    return true;
  } else {
    return false;
  }
}

public_users.post("/register", (req,res) => {
  //Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!doesExist(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
// public_users.get('/',function (req, res) {
//   //Write your code here
//   // return res.status(300).json({message: "Yet to be implemented"});
//   res.send(JSON.stringify(books,null,4));
// });

public_users.get('/',function (req, res) {
  let myPromise = new Promise((resolve,reject) => {
    resolve();
    reject();
  });

  myPromise.then(
    (value) => { res.send(JSON.stringify(books,null,4)); },
    (error) => { res.send(error); }
  );
});

// Get book details based on ISBN
// public_users.get('/isbn/:isbn',function (req, res) {
//   //Write your code here
//   // return res.status(300).json({message: "Yet to be implemented"});
//   const isbn = req.params.isbn;
//   let filtered_books = [];

//   for (let x in books) {
//       if (books[x].isbn == isbn)
//           filtered_books.push(books[x]);
//   }
//   res.send(filtered_books);
//  });

public_users.get('/isbn/:isbn',function (req, res) {
  let myPromise = new Promise((resolve,reject) => {
    resolve();
    reject();
  });

  myPromise.then(
    (value) => { 
      const isbn = req.params.isbn;
      let filtered_books = [];
    
      for (let x in books) {
          if (books[x].isbn == isbn)
              filtered_books.push(books[x]);
      }
      res.send(filtered_books);
    },
    (error) => { res.send(error); }
  );
 });
  
// Get book details based on author
// public_users.get('/author/:author',function (req, res) {
//   //Write your code here
//   // return res.status(300).json({message: "Yet to be implemented"});
//   const author = req.params.author;
//   let filtered_books = [];

//   for (let x in books) {
//       if (books[x].author == author)
//           filtered_books.push(books[x]);
//   }
//   res.send(filtered_books);
// });

public_users.get('/author/:author',function (req, res) {
  let myPromise = new Promise((resolve,reject) => {
    resolve();
    reject();
  });

  myPromise.then(
    (value) => { 
      const author = req.params.author;
      let filtered_books = [];
    
      for (let x in books) {
          if (books[x].author == author)
              filtered_books.push(books[x]);
      }
      res.send(filtered_books);
    },
    (error) => { res.send(error); }
  );
});

// Get all books based on title
// public_users.get('/title/:title',function (req, res) {
//   //Write your code here
//   // return res.status(300).json({message: "Yet to be implemented"});
//   const title = req.params.title;
//   let filtered_books = [];

//   for (let x in books) {
//       if (books[x].title == title)
//           filtered_books.push(books[x]);
//   }
//   res.send(filtered_books);
// });

public_users.get('/title/:title',function (req, res) {
  let myPromise = new Promise((resolve,reject) => {
    resolve();
    reject();
  });

  myPromise.then(
    (value) => { 
      const title = req.params.title;
      let filtered_books = [];
    
      for (let x in books) {
          if (books[x].title == title)
              filtered_books.push(books[x]);
      }
      res.send(filtered_books);
    },
    (error) => { res.send(error); }
  );
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  const isbn = req.params.isbn;
  let filtered_books = [];

  for (let x in books) {
      if (books[x].isbn == isbn)
          filtered_books.push(books[x]);
  }
  // res.send(filtered_books);
  res.send(filtered_books[0].isbn);
});

module.exports.general = public_users;

// {"username":"user1","password":"pass1"}