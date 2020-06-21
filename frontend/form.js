
function form()
{
    var data={
        name:document.getElementById('firstName').value+document.getElementById('lastName').value,
        company:document.getElementById('companyName').value,
        github:document.getElementById('githuburl').value,
        linkedin:document.getElementById('linkedinurl').value
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