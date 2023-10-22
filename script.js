let a = []


function signup() {
    let nam = document.getElementById("name").value;
    let em = document.getElementById("ema").value;
    let pss = document.getElementById("passw").value;

    if (nam && em && pss) {
        a.push({
            name: nam,
            email: em,
            password: pss,


        })
        console.log(a)
        alert("User Registered Successfully")
        document.getElementById("name").value = ""
        document.getElementById("ema").value = ""
        document.getElementById("passw").value = ""
    }
    else{
        alert("Please Enter Complete Info")
    }
}
function login(){
    let ema = document.getElementById("email").value;
    let psi = document.getElementById("pass").value;

    for(let i=0; i<a.length; i++){
        if(ema==a[i].email && psi==a[i].password){
            window.alert("login Successful")

        }
        else{
           window. alert("Invalid Email or password")
        }

    }
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";


}


