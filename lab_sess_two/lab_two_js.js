const update_div = (json_doc, empty_element)=> {
    // Populates an HTML element with <li> nodes
    
    for (const line of json_doc) {

    const listNode = document.createElement('li');

    const author = document.createTextNode(line.author);
    const title = document.createTextNode(line.title);
    const year = document.createTextNode(line.year);

    listNode.append(author, ",", title, ",", year)

    empty_element.appendChild(listNode);
    }
}


async function test_func (){
    // Requests and parses the test JSON document
    const display_div = document.getElementById("js_dom_update");
    const resp = await fetch("booker.json");
    const booker_doc = await resp.json()

    update_div(booker_doc, display_div)
}

window.onload = () => {
    test_func();
}
