let req = ""
let query = ""
let results = ""
let pw = "Alakam11!"
let netID = "mms96354"
let database = "mms96354"
let allCustomerData = []
var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
program1.onshow = function() {
  statesDrop.clear()
  for (i = 0; i < states.length; i++)
    statesDrop.addItem(states[i])
}
statesDrop.onclick = function(s) { 
    if (typeof(s) == "object"){
    return
  } else {
    statesDrop.value = s
    }
    query = "SELECT * FROM customer WHERE state ='" + s + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           Label1.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
              Textarea1.value = message
        }
    } else
        Label1.textContent = "Error code: " + req.status
}
