
const prdDisplay = () => {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));

    let alldata = "";
    let total = 0;
    let alltotal = "";
    cartdata.map((i) => {

        alldata += ` <tr class="table_row">
            <td class="column-1 text-center" >
                <div class="how-itemcart1">
                    <img src="${i.image}" alt="IMG">
                </div>
            </td>
            <td class="column-2 text-center pb-0">${i.name}</td>
            <td class="column-3 text-center pb-0">$ ${i.price}</td>
            <td class="column-4 text-center"> ${i.qty} </td>
            <td class="column-5 text-center p-0">$${i.total}</td>
            <td class="text-center" ><i class="bi bi-x-lg" id="del" onclick="itemDelet(${i.id})"></i></td>  
        </tr> `
        total += i.total;
    })

    alltotal += `<span class="mtext-110 cl2">
                    $${total}
                </span>`

    document.getElementById("prdDisplay").innerHTML = alldata;
    document.getElementById("allTotal").innerHTML = alltotal;

};

itemDelet = (id) => {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));
    cartdata.splice(id - 1, 1);
    let s = 1;
    cartdata.map((i) => {
        i.id = s++;
    });

    localStorage.setItem("addToCartInfo", JSON.stringify(cartdata));
    prdDisplay();

}

prdDisplay();   