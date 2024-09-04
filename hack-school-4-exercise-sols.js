// Exercise 1
/*
1. Scenario A: GET
Reason: You are retrieving information about a specific book without modifying any data.
2. Scenario B: PUT
Reason: You are updating existing data (the user's address) or creating it if it does not already exist.
3. Scenario C: DELETE
Reason: You are removing a resource (the user's account) from the server.
4. Scenario D: POST
Reason: You are creating a new resource (a product) in the online store's catalog.
*/

// Exercise 2

app.get('/greet', (req, res) => {
    const name = req.query.name;
    res.json({ message: `We are going to ${name}.` });
  });
  