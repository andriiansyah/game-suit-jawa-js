var ulang = true;
while(ulang === true) {
    // menangkap pilihan player
    var p = prompt("Pilih : gajah, semut, orang");

    // menangkap pilihan komputer
    // membandingkan bilangan random
    var comp = Math.random();
    // console.log(comp)

    if(comp < 0.34) {
        comp = "gajah";
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }

    // console.log(comp);

    // menentukan rules
    if(p == 'semut' && comp == 'gajah' || p == 'orang' && comp == 'semut' || p ==  'gajah' && comp == 'orang') {
        alert("User memilih = " + p + "\n" + "Komputer memilih = " + comp + "\n" + "USER MENANG");
    } else if(comp == 'semut' && p == 'gajah' || comp == 'orang' && p == 'semut' || comp ==  'gajah' && p == 'orang') {
        alert("User memilih = " + p + "\n" + "Komputer memilih = " + comp + "\n" + "KOMPUTER MENANG");
    } else if(comp == 'semut' && p == 'semut' || comp == 'orang' && p == 'orang' || comp ==  'gajah' && p == 'gajah') {
        alert("User memilih = " + p + "\n" + "Komputer memilih = " + comp + "\n" + "SERI");
    } else {
        alert("Cuma punya 3 opsi");
    }
    ulang = confirm("Main lagi?");
}