function compare_lists() {
    // split both inputs into a list
    const list_1 = document.getElementById("list_1").value.split(/\r?\n/)
    const list_2 = document.getElementById("list_2").value.split(/\r?\n/)

    // lmao
    let list_with_more = list_1 
    let list_with_less = list_2

    if (list_2.length > list_1.length) {
        list_with_more = list_2
        list_with_less = list_1
    } 

    let missing_pieces = []
    list_with_more.forEach(element => {
        if (!list_with_less.includes(element)) {
            missing_pieces.push(element)
        }
        return element
    });

    missing_pieces.forEach(missing_piece => {
        let file_name = document.createElement("p")
        file_name.textContent = missing_piece.trim()
        document.getElementById("results").appendChild(file_name) 
    })
    console.log("missing pieces: ", missing_pieces)
}