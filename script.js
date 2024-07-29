// Function

sendAlert();
sendAlert("Denis", true);
sendAlert("Max", true);
sendAlert("Sasha", false);

function sendAlert(name, isLogin = false){
    alert("Hello, " + name);
    if(isLogin){
        alert("Вы вошли в акаунт")
    } else {
        alert("Вы не вошли в акаунт")
    }

}
