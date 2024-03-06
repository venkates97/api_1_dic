var inputElement = document.createElement("input");
inputElement.type="text";
inputElement.id="getWord";
inputElement.innerText="Please Enter Word to Find Details ";
inputElement.className="form-control"


var areaElement = document.createElement("div");
areaElement.className="input-group mb-3 boxEle";
areaElement.id="boxEle";

var button_area =document.createElement("div");
button_area.className="input-group-append";

var button_1 = document.createElement("button");
button_1.className="btn btn-warning";
button_1.innerHTML="Search";
button_1.id="button"
button_1.addEventListener("click", getData);

var outBoxEle= document.createElement("div");
outBoxEle.id="contentBox";

var outputArea = document.createElement("p");
outputArea.className="font-weight-lighter";
outputArea.id="outArea";

document.body.append(outputArea);
button_area.append(button_1);
areaElement.append(inputElement,button_area,outputArea);
// document.body.append(areaElement);
outBoxEle.append(areaElement);
document.body.append(outBoxEle);




async function getData() {
    const get_text =document.getElementById("getWord").value;
    console.log(get_text);
    var raw_data =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${get_text}`);
    var next_data =await raw_data.json();
    document.getElementById("outArea").innerHTML= `
    <b>Meaning:</b> ${next_data[0].meanings[0].definitions[0].definition}
    <br>
    <b>Synomys:</b>${(next_data[0].meanings[0].synonyms)}
    `;

}

