
document.addEventListener("scroll",scrollHeader)

document.getElementsByClassName("container-video")[0].addEventListener("click",()=>{
  document.getElementsByClassName("container-video")[0].style.display="none"
  document.querySelector("html").style.overflow=""
})

function scrollHeader(e) {
    let headerMain = document.getElementById("headerMain")
    if (window.pageYOffset > 1) {
        headerMain.style.background="rgba(0,0,0, 1)"
      } else {
        headerMain.style.background="rgba(0,0,0, 0)"
      }
}

const walletID = document.getElementsByClassName("text-connect");

function openVideo(url){
  document.querySelector("html").style.overflow="hidden"
  console.log(url);
  document.getElementsByClassName("container-video")[0].style.display="block"
  document.getElementById("video-trailer").src=url
}


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

