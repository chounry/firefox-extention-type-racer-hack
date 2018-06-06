(function(){
    // console.log(window.hasRun);
    if(window.hasRun){
        return;
    }
    window.hasRun = true;

    function start(){
        var table_wrapper = $('table .inputPanel div');

        var wrapper = table_wrapper[1];
        var input = document.getElementsByClassName('txtInput')[0];
        var childNodes = wrapper.childNodes;
        var text = "";

        var nodeArr = [];
        childNodes.forEach(function (e) {
            nodeArr.push(e);
        })

        if(nodeArr[0].innerText.split(' ').length > 1){
            nodeArr.splice(0,1);        
        }

        nodeArr.forEach(function(e){
            text += e.innerText;
        })
        // childNodes.forEach(function(e){
        //     text += e.innerText;
        // })
        text = text.split(" ");
        var i = 0;
        document.addEventListener('keyup',function(e){
            console.log(e.key);
            if(e.key != ' ' && input.value.length <= 1 && e.key != "Backspace"){
                if(i > text.length){document.removeEventListener();}
                input.value = text[i];
                i++;   
            }
        })
    }


    browser.runtime.onMessage.addListener((message) =>{
        if(message.command == "start"){            
            start();
        }
    })
})();
