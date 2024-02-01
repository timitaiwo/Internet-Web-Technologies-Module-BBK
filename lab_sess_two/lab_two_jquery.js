const update_div_jquery = (json_doc, empty_element)=> {
    // Populates an HTML element with <li> nodes

    for (const line of json_doc) {

    const author = line.author;
    const title = line.title;
    const year = line.year;

    const listNode = $(`<li>${author}, ${title}, ${year}</li>`);
    listNode.appendTo(empty_element);

    }
}


async function test_func_jquery(){
    // Requests and parses the test JSON document

    const display_div = $("#jquery_dom_update");
    const resp = await fetch("booker.json");
    const booker_doc = await resp.json();

    console.log("The obj is selected")
    // console.log(display_div);

    update_div_jquery(booker_doc, display_div);
}

$(document).ready(() => {
    test_func_jquery();
})
