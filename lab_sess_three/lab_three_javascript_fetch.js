let printAuthorsJS = () => {
    let listWrapper = "<ul>";

    fetch('./pods98.xml')
    .then((response) => response.text())
    .then((str) => 
        new window.DOMParser().parseFromString(str, "text/xml")
    ).then((data) => {
        let authors = data.querySelectorAll("article > author");

        for (const author of authors) {
            let authorName = author.firstChild.nodeValue;
            listWrapper += `<li>${authorName}</li>`;
        }

        listWrapper += "</ul>";
        document.getElementById("display_block_js").innerHTML = listWrapper;
    })
    
}


let button_js = $("#authors_button_js").click(() => {
    printAuthorsJS();
})