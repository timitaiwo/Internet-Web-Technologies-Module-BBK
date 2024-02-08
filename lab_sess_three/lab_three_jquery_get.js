let printAuthorsJQ = () => {
    let listWrapper = "<ul>";
    $.get('./pods98.xml',
    function(data) {
        let authors = data.querySelectorAll("article > author")

        for (const author of authors) {
            let authorName = author.firstChild.nodeValue;
            listWrapper += `<li>${authorName}</li>`;
        }

        listWrapper += "</ul>";
        
        document.getElementById("display_block_jquery").innerHTML = listWrapper;
    },
    "xml");
}


let button_jquery = $("#authors_button_jquery").click(() => {
    printAuthorsJQ();
})