
btnCustomer.onclick=function(){
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage.value = "There are no customers in the database."
        else {        
           for (i = 0; i < results.length; i++)
             selCustomers.addItem(results[i][0])
    }
  }
}


btnDelete.onclick=function(){
  let companyDelete = ""
  companyDelete = selCustomers.value 
  query = "DELETE FROM customer WHERE  name = '" + companyDelete + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}

btnRefresh.onclick=function(){
  location.reload()
}

