
let btn = document.querySelector(".button");

btn.addEventListener("click", async()=>{
    // chrome object gives us information about all the active open tabs in our chrome browser,
    //  and by quering we can get the currently active tab
    let [tabs] = await chrome.tabs.query({ active:true, currentWindow: true});
    
    if(tabs){
        const title = tabs.title;
        const url = tabs.url;
        let titleText = document.querySelector(".title");

        if(!titleText.innerHTML){
            titleText.innerHTML = title;
            copyUrl(url);
        }
        
    }
})


function copyUrl(titleText){
    let newElem = document.createElement("button");
    newElem.className = "copyElement"
    newElem.innerHTML = `<img src="./Icons/copy.png" alt="none" width="30px"/>`
    
    let result = document.querySelector(".result");
    result.appendChild(newElem)
    
    let copyBtn = document.querySelector(".copyElement").addEventListener('click', ()=>{
        console.log("Copied", titleText)
        navigator.clipboard.writeText(titleText).then(()=>{
            newElem.innerHTML = `<img src="./Icons/copy (1).png" alt="none" width="30px" />`
        })
        .catch((error) => {
            newElem.innerHTML = `<img src="./Icons/failed-message.png" alt="none" width="30px" />`
        })
    })
}