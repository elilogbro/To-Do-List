window.onload = function() {
    document.getElementById("submit-btn").addEventListener("click", function() {
        console.log('click happened');
            let text = document.getElementById("text-box").value;
            let li = document.createElement("li");
            li.innerText = text;
            document.getElementById("unordered-list").appendChild(li);
    }
)};