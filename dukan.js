let paltar = prompt("Paltar novu secin:")
let olcu = prompt("Olcu razmeri secin:")
let qiymet = +prompt("Qiymeti secin:")
let reng = prompt("Rengi secin:")

if (paltar == "koynek" && olcu == "L" && qiymet < 20 && reng == "Qara" || reng == "Qara" || olcu == "35" || paltar == "Koynek") {
    document.getElementById("alisVeris").innerHTML ="Almağ Olar";
}else{
    document.getElementById("alisVeris").innerHTML ="Almağ Olmaz";
}