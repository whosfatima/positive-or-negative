let input = document.getElementById("numinput");
let button = document.getElementById("button");
let para = document.getElementById("Para");

button.onclick = () => {
  if (input.value === "") para.innerText = " لطفا عدد درست را وارد کنید ";
  else {
    let numberr = Number(input.value);

    if (numberr > 0) para.innerText = "عدد مثبت است";
   else if(numberr < 0) para.innerText = "عدد منفی است";
    else para.innerText = "عدد صفر است";
  }
};
