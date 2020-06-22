
function form()
{
    
    //refer the docs and then write the object
    var data={
        "firstName": document.getElementById('firstName').value,
        "lastName": document.getElementById('lastName').value,
        "companyName": document.getElementById('companyName').value,
        "githubUrl": document.getElementById('githuburl').value,
        "linkedinUrl": document.getElementById('linkedinurl').value,
        
         
       
    }
    var xh = new XMLHttpRequest();
    xh.open("POST", "https://business-card-api-rs.herokuapp.com/api/users/add", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send(JSON.stringify(data))
    xh.onload=function(){
        if(this.status==200)
        {
            alert('request successful !')
            window.location.replace('display.html')
        }
        else{
            alert('Failed! Try again')
            window.location.replace('form1.html')
        }
}
}

function getall()
{
  
    var xh = new XMLHttpRequest();
    xh.open("GET", "https://business-card-api-rs.herokuapp.com/api/users/one", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.setRequestHeader('userId', "5ee6e773a49a9b0017affa94")
    xh.send()
    xh.onload=function(){
        if(this.status==200)
        {
            var data = JSON.parse(this.responseText)

            
        }
        else {
            alert('Error in getting items')
        }
        
}
}



