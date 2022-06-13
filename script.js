window.onload = function() {
    
    document.getElementById("submit-btn").addEventListener("click", function() {
        let text = document.getElementById("text-box").value;
        let li = document.createElement("li");
        li.innerText = text;
        if (text.length > 0) {
        document.getElementById("unordered-list").appendChild(li);
        

        let button = document.createElement("button");
        button.innerText = "X";
        li.appendChild(button);
        button.addEventListener("click", () => li.parentNode.removeChild(li));
        document.getElementById("unordered-list").appendChild(li);
        
        let button2 = document.createElement("button");
        button2.innerText = "Done";
        button2.addEventListener("click", function () {
           li.style = "text-decoration: line-through;"
        });
        
        li.appendChild(button);
        li.appendChild(button2);
        document.getElementById("text-box").value = "";
    }});

    document.getElementById("clear-field-btn").addEventListener("click", function() {
        document.getElementById("text-box").value = "";
        console.log("here");
    });
}

