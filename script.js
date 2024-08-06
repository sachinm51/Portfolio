    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-content");
    var sidemenu = document.querySelector("#sidemenu");
    var changetheame = document.querySelector("#changetheame");
    var body = document.querySelector("body");
    var mode = dark;
    var lists = document.querySelectorAll("#list")


    changetheame.addEventListener("click", ()=>{
        if(mode == "light")
        {
            mode = "dark";
            body.classList.add("dark");
            body.classList.remove("light")
        }
        else{
            mode = "light"
            body.classList.add("light")
            body.classList.remove("dark");
        }
    })
    var changemode = document.querySelector("#changetheame")
    function opentab(tabname) {
        for (tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for (tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }
    
    function openmenu(){
        sidemenu.style.right = "0" ;
    }
    function closemenu() {
        sidemenu.style.right = "";
    }



 
  
    
   
   

   
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwoYCFsAxeHHk-y7iOupt-fPwsBU69PGXLps-oxi4cwP_KJIHYgLrMMjDcMQSI8z0WJ/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })