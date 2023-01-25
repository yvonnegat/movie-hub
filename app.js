
    function addItem() {
        var a = document.getElementById("list");
        var candidate = document.getElementById("movie");
        var li = document.createElement("li");
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);

        var b = document.getElementById("description");
        var candidate1 = document.getElementById("describe");
        var li = document.createElement("li");
        li.setAttribute('id', candidate1.value);
        li.appendChild(document.createTextNode(candidate1.value));
        b.appendChild(li);
       

    }

    
    function removeItem() {
        var a = document.getElementById("list");
        var candidate = document.getElementById("movie");
        var item = document.getElementById(candidate.value);
        a.removeChild(item);

        var b = document.getElementById("description");
        var candidate2 = document.getElementById("describe");
        var item = document.getElementById(candidate2.value);
        a.removeChild(item);
    }
    
    /*function addItem() {
        var a = document.getElementById("description");
        var candidate1 = document.getElementById("describe");
        var li = document.createElement("li");
        li.setAttribute('id', candidate1.value);
        li.appendChild(document.createTextNode(candidate1.value));
        a.appendChild(li);
    }
    function removeItem() {
        var a = document.getElementById("description");
        var candidate1 = document.getElementById("describe");
        var item = document.getElementById(candidate1.value);
        a.removeChild(item);
    }*/
    