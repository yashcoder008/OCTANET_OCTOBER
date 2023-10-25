const inputText=document.getElementById("inputText");

const listContainer= document.getElementById("listContainer");


function addTask()
    {

        if(inputText.value === '')
        {
            alert("you must write someting for Task!");
        }

        else
        {
            let li = document.createElement("li");
            li.innerHTML=inputText.value;
            listContainer.append(li);
            let span =document.createElement("span");
            span.innerHTML="\u00d7"
            li.appendChild(span);
        }
        inputText.value="";
        saveToLocal();
    }



function press(event)
    {
        if(event.key=="Enter")
        {
            addTask();
        }
    }



listContainer.addEventListener('click',function(action){
    if(action.target.tagName== "LI")
    {
        action.target.classList.toggle("checked");
        saveToLocal();

    }
    else if(action.target.tagName === "SPAN")
    {
        action.target.parentElement.remove();
        saveToLocal();
    }

},false);



function saveToLocal()
    {
        localStorage.setItem("data",listContainer.innerHTML)
    }



function showTask()
    {
        listContainer.innerHTML=localStorage.getItem("data");
    }

showTask();
