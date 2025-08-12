
let inputVal=document.querySelector('#inputVal');
let outputVal=document.querySelector('#outputVal');
let btn=document.querySelector('#btnShort')
let btnCopy=document.querySelector('#copy')



btn.addEventListener('click', ()=>{
       let op = inputVal.value;

    if (!op) return alert("Enter a URL first");

    let code = Math.random().toString(36).substring(2, 8); 
    let fakeShortURL = "https://saint69.ly/" + code;

    outputVal.value = fakeShortURL;
    console.log(`Original: ${op}, Shortened: ${fakeShortURL}`);


})

btnCopy.addEventListener('click', ()=>{
  let textToCopy = outputVal.value;

  if (!textToCopy) return alert("Nothing to copy!");

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy");
      console.error(err);
    });

})