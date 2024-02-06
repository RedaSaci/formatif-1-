function save(){
    let name = document.getElementById("prenom").value;
    let famille= document.getElementById("nom").value;
    
    localStorage.setItem("famille", famille);
    localStorage.setItem("name", name);

}
function enleve(){

    localStorage.removeItem("name");
    localStorage.removeItem("famille");
}

function vachercher(){
    let name = localStorage.getItem("name");
    let famille = localStorage.getItem("famille");
    document.getElementById("nom").value = famille;
    document.getElementById("prenom").value = name;
}