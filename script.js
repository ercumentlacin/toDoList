let doList = document.getElementsByTagName("LI");
var i;
for(i=0;i<doList.length;i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    doList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.querySelector(".userInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.querySelector(".listElems").appendChild(li);
    }
    document.querySelector(".userInput").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

In jQuery, the following would work:

$("#id_of_textbox").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#id_of_button").click();
    }
});
$("#pw").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

$("#myButton").click(function() {
  alert("Button code executed.");
});
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

Username:<input id="username" type="text"><br>
Password:&nbsp;<input id="pw" type="password"><br>
<button id="myButton">Submit</button>
Expand snippet
Or in plain JavaScript, the following would work:

document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("id_of_button").click();
    }
});
// document.getElementById("new-item-enter")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementByClass("enter").click();
//     }
// });
