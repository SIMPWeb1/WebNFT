
document.addEventListener("scroll",scrollHeader)


function scrollHeader(e) {
    let headerMain = document.getElementById("headerMain")
    if (window.pageYOffset > 1) {
        headerMain.style.background="rgba(16, 26, 60, 1)"
      } else {
        headerMain.style.background="rgba(16, 26, 60, 0)"
      }
}

const walletID = document.getElementsByClassName("text-connect");


document.addEventListener("DOMContentLoaded",()=> {
  let isFirstConnect = localStorage.getItem("isFirstConnect")
  if(isFirstConnect){
    ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      const account = accounts[0];
      let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
      walletID[0].innerText = address;
    })
  }
})


function connect () {
      if (typeof window.ethereum !== "undefined") {
        ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            const account = accounts[0];
            let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
            localStorage.setItem("isFirstConnect",true)
            walletID[0].innerText = address;
          })
          .catch((error) => {
            console.log(error, error.code);
          });
      } else {
          window.open("https://metamask.io/download/", "_blank");
      }
}