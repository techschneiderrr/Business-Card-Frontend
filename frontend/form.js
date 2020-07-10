
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
    xh.onload=function()
    {
        if(this.status==200)
        {
            alert('request successful !')
            window.location.replace('display.html')
        }
        else
        {
            alert('Failed! Try again')
            window.location.replace('form1.html')
        }
        
    }
}

function getDetails()
{
    var xh = new XMLHttpRequest();
    xh.open("GET","https://business-card-api-rs.herokuapp.com/api/users/one",true)
    
    xhr.responseType = 'json'
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send()
    xh.onload=function()
    {
        if(this.status==200)
        {
            var data = JSON.parse(this.responseText)

          console.log(data)
        }
    }
}