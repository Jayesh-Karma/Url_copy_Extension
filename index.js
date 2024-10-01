console.log("Hello ji")

let btn = document.querySelector(".button");

btn.addEventListener("click", async()=>{
    // chrome object gives us information about all the active open tabs in our chrome browser,
    //  and by quering we can get the currently active tab
    let [tabs] = await chrome.tabs.query({ active:true, currentWindow: true});
    
    if(tabs){
        const url = tabs.url;
        let urlText = document.querySelector(".url");

        if(!urlText.querySelector("a")){

            let newElem = document.createElement("a");
            newElem.href = url;
            newElem.className = "webTag";
            newElem.target = "_blank"
            newElem.innerHTML = "Visit website 🌐";
            urlText.appendChild(newElem)
            
            copyUrl(url);
        }
        
    }
})


function copyUrl(urltext){
    let newElem = document.createElement("button");
    newElem.className = "copyElement"
    newElem.innerHTML = `<img src="./Icons/copy.png" alt="none" width="30px"/>`
    
    let result = document.querySelector(".result");
    result.appendChild(newElem)
    
    let copyBtn = document.querySelector(".copyElement").addEventListener('click', ()=>{
        console.log("Copied", urltext)
        navigator.clipboard.writeText(urltext).then(()=>{
            newElem.innerHTML = `<img src="./Icons/copy (1).png" alt="none" width="30px" />`
        })
        .catch((error) => {
            newElem.innerHTML = `<img src="./Icons/failed-message.png" alt="none" width="30px" />`
        })
    })
}