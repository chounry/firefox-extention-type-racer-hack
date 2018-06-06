



function listenForClick(){
    document.addEventListener("click",(e) => {
        function send(message,tabs){
            console.log(tabs,message)
            let tab = tabs[0];
            if(tab.url != "http://play.typeracer.com/"){
                setMessage("Can't be run on this website!");
                return
            }
            setMessage("OK...");
            browser.tabs.sendMessage(tab.id,{
                command:message
            })
        }

        function reportError(error){
            console.log("Can not send: ",error);
        }

        if(e.target.id = "start"){
            browser.tabs.query({active:true, currentWindow: true})
            .then(send.bind(null,"start"))
            .catch(reportError);
        }
        else if(e.target.id = "stop"){
            browser.tabs.query({active: true,currentWindow:true})
            .then(send.bind(null,"stop"))
            .catch(reportError)
        }

    })
}
function setMessage(message){
    document.getElementById('display').innerText = message;
}

function executeError(error){
    console.log("Error :",error);
}

setMessage(' ');
browser.tabs.executeScript({file: "/content_scripts/file.js"})
    .then(listenForClick)
    .catch(executeError);

//KjzLWNGF