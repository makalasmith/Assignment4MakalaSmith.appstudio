
btnCustomer.onclick=function(){
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage.value = "There are no customers in the database."
        else {        
           for (i = 0; i < results.length; i++)
             lgCustomer.addItem(results[i][0])
    }
  }
}


lgCustomer.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
  let textChoice = NSB.$("lgCustomer_" + s).textcontent
  }
}

btnDelete.onclick=function(){
  let custNameDel = lgCustomer.value
    let found = false
    for (i = 0; i < results.length; i++) {
        if (custNameDel == results[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE petName = '" + custNameDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=clc90595&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage.value = `You have successfully deleted the pet named ${petNameDel}`
            else
                lblMessage.value = `There was a problem deleting ${petNameDel} from the database.`
      else
        lblMessage.value = `Error: ${req.status}`
    }
}
