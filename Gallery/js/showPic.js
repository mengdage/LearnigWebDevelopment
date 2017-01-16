function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var phr= document.getElementById("placeholderImg");
    phr.setAttribute("src", source);
    var description = document.getElementById("description");
    var text = whichPic.getAttribute("title");
    description.firstChild.nodeValue = text;

    whichPic.firstChild.nodeValue = text.toUpperCase();


}

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}

//window.onload=countBodyChildren;
