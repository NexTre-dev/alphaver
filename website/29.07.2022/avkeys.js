// Here it is, the (mostly) original unobfuscated code.
// This originally ran off PHP.

let EndBytes = [39, 86, 26, 72, 13, 91, 23];

function GenerateKeyForName(name){
    
    var ret = "";
    name = name.toUpperCase();
    var nameRecalc = name;
    
    if (name.length >= 15){
        console.log("Name too long");
        return "#";
    }
    for (var i = 0; i < name.length; i++){
        var a = name.charAt(i);
        if ((a < 'A' || a > 'Z') && a != "_" && (a < '0' || a > '9')){
            console.log("Invalid character, use only A to Z uppercase");
            return "#";
        }
    }
    
    var encName = "";
    var writtenBytes = 0;
    for (var i = 0; i < name.length; i++){
        encName += (70 - (26 - (name.charCodeAt(i) - 'A'.charCodeAt(0)))).toString();
        writtenBytes++;
    }
    encName += (EndBytes[Math.floor(Math.random() * EndBytes.length)]).toString();
    writtenBytes++;
    console.log("Encoded name as: " + encName);
    
    var fullNameStr = encName;
    
    while (writtenBytes != 15){
        fullNameStr += (10+Math.floor(Math.random() * 89)).toString();
        writtenBytes++;
    }
    
    var checksumFullName = 0;
    for (var i = 0; i < fullNameStr.length; i++){
        checksumFullName += (fullNameStr.charCodeAt(i) - '0'.charCodeAt(0));
    }
    var checksumName = 0;
    for (var i = 0; i < encName.length; i++){
        checksumName += (encName.charCodeAt(i) - '0'.charCodeAt(0));
    }
    checksumName %= 100;
    
    console.log("checksum of full name: " + checksumFullName);
    var checkSumPart1 = checksumFullName + Math.floor(Math.random() * (999-checksumFullName));
    var checkSumPart2 = checkSumPart1 - checksumFullName;
    
    var retStr = "";
    retStr += ('000'+checkSumPart1).slice(-3);
    retStr = retStr.split("").reverse().join("");
    retStr += fullNameStr;
    retStr += ('000'+checkSumPart2).slice(-3);
    retStr += ('00'+checksumName).slice(-2);

    retStr = retStr.slice(0, 6) + "-" + retStr.slice(6);
    retStr = retStr.slice(0, 15) + "-" + retStr.slice(15);
    retStr = retStr.slice(0, 23) + "-" + retStr.slice(23);
    retStr = retStr.slice(0, 31) + "-" + retStr.slice(31);
    retStr = retStr.slice(0, 36) + "-" + retStr.slice(36);

    return retStr;
}

function genKeyAfterTime(){

    document.getElementById("key").innerHTML = "Please wait...";
    setTimeout(function(){
        generateKey();
    }, 1000)
}

function generateKey(){
    var name = document.getElementById("name").value;
    if (name == ""){
        document.getElementById("key").innerHTML = "Errors occurred during key generation:<br> * name cannot be empty";
        return;
    }
    var key = GenerateKeyForName(name);
    if (name.startsWith("dev")){
        document.getElementById("key").innerHTML = "Errors occurred during key generation:<br> * this username format is reserved for internal use";
    } 
    else if (name.length >= 15){
        document.getElementById("key").innerHTML = "Errors occurred during key generation:<br> * username too long";
    }
    else if (key == "#"){
        document.getElementById("key").innerHTML = "Errors occurred during key generation:<br> * invalid character in username";
    }
    else {
        document.getElementById("key").innerHTML = "Success! Your key is: <br>" + key + "<br>Copied to clipboard.";
				navigator.clipboard.writeText(key);
    }
}