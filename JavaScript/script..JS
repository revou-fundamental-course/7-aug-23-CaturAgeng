function calculateArea() {
   let tinggi = parseFloat(document.getElementById("tinggi-input").value)
   let alas = parseFloat(document.getElementById("alas-input").value)

   if (isNaN(tinggi) || isNaN(alas)) {
      document.getElementById("result-area").innerHTML = "Masukan angka yang dibutuhkan";
      return;
   }
   let area = 0.5 * tinggi * alas
   let formula = "Luas Segitiga = 0.5 x alas x tinggi"
   document.getElementById("result-area").innerHTML = formula + "<br>" + "Luas Segitiga =" + area + "<br>"
}


function calculatePerimeter() {
   let firstside = parseFloat(document.getElementById("sisiPertama-input").value)
   let secondtside = parseFloat(document.getElementById("sisiKedua-input").value)
   let thirdside = parseFloat(document.getElementById("sisiKetiga-input").value)

   if (isNaN(firstside) || isNaN(secondtside) || isNaN(thirdside)) {
      document.getElementById("result-perimeter").innerHTML = "Masukan angka yang dibutuhkan";
      return;
   }

   let perimeter = firstside + secondtside + thirdside
   let formula = "Keliling Segitiga = Side 1 + Side 2 + Side 3"
   document.getElementById("result-perimeter").innerHTML = formula + "<br>" + "Keliling Segitiga =" + perimeter + "<br>"
}

function resetFormPerimeter() {
   document.getElementById("sisiPertama-input").value = "";
   document.getElementById("sisiKedua-input").value = "";
   document.getElementById("sisiKetiga-input").value = "";
   document.getElementById("result-perimeter").innerHTML = "";
}

function resetFormArea() {
   document.getElementById("tinggi-input").value = "";
   document.getElementById("alas-input").value = "";
   document.getElementById("result-area").innerHTML = "";
}