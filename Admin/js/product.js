let catlist = JSON.parse(localStorage.getItem("catInfo"));
let tr = `<option>--Select Category--</option>`;
catlist.map((list) => {
    tr += `<option value="${list.id}">${list.name}</option>`;
});
let list = document.getElementById("prdlist").innerHTML = tr;

let prdData = [];

const addData = () => {
    let data = JSON.parse(localStorage.getItem("prdInfo"));

    let prdid = document.prdfrm.prdid.value;
    let prdlist = document.prdfrm.prdlist.value;
    let prdname = document.prdfrm.prdname.value;
    let prdprice = document.prdfrm.prdprice.value;
    let prdtext = document.prdfrm.prdtext.value;
    let prdimage = JSON.parse(localStorage.getItem("prdImageInfo"));

    let obj = {};
    if (prdname != "") {
        if (prdid != "") {
            // update
            data.map((i) => {
                if (i.id == prdid) {
                    i.category = prdlist;
                    i.name = prdname;
                    i.price = prdprice;
                    i.description = prdtext;
                    i.image = prdimage;
                }
            })
            localStorage.setItem("prdInfo", JSON.stringify(data));
        }
        else {
            // insert code
            if (data != null) {
                obj = {
                    id: data.length + 1,
                    category: prdlist,
                    name: prdname,
                    price: prdprice,
                    description: prdtext,
                    image: prdimage,

                }
                prdData = data;
            }
            else {
                obj = {
                    id: 1,
                    category: prdlist,
                    name: prdname,
                    price: prdprice,
                    description: prdtext,
                    image: prdimage,

                }
            }
            prdData.push(obj);
            localStorage.setItem("prdInfo", JSON.stringify(prdData));
        }
    }
    document.prdfrm.prdid.value = "";
    document.prdfrm.prdlist.value = "";
    document.prdfrm.prdname.value = "";
    document.prdfrm.prdprice.value = "";
    document.prdfrm.prdtext.value = "";
    document.prdfrm.prdimage.src = "";
    document.prdfrm.reset();

    displayPrdData();

}

const displayPrdData = () => {
    let data = JSON.parse(localStorage.getItem("prdInfo"));
    let catdata = JSON.parse(localStorage.getItem("catInfo"));

    let listdata = "";
    data.map((i) => {

        catdata.filter((j) => {
            if (j.id == i.category) {
                return i.cname = j.name;
            }
        });

        listdata += `<tr>
                    <td>${i.id}</td>
                    <td>${i.cname}</td>
                    <td>${i.name}</td>
                    <td><img src="${i.image}" style=" height: 80px; width: 80px;"></td>
                    <td>${i.price}</td>
                    <td><a href="#" class="btn btn-success" onclick="editPrdData(${i.id})">Edit</a></td>
                    <td><a href="#" class="btn btn-danger" onclick="deletPrdData(${i.id})">Delet</a></td>
                </tr>`
    })
    document.getElementById("allPrdData").innerHTML = listdata;

}

const deletPrdData = (id) => {
    let data = JSON.parse(localStorage.getItem("prdInfo"));
    data.splice(id - 1, 1);
    let s = 1;
    data.map((i) => {
        i.id = s++;
    });

    localStorage.setItem("prdInfo", JSON.stringify(data));
    displayPrdData();
}

const editPrdData = (id) => {
    let data = JSON.parse(localStorage.getItem("prdInfo"));
    let cat = data.filter((i) => {
        return i.id == id;
    });
    console.log(cat);
    document.prdfrm.prdid.value = cat[0].id;
    document.prdfrm.prdname.value = cat[0].name;
    document.prdfrm.prdlist.value = cat[0].category;
    document.prdfrm.prdprice.value = cat[0].price;
    document.prdfrm.prdtext.value = cat[0].description;
    document.prdfrm.prdimage.src = cat[0].image;
}

const previewImage = (e) => {
    var input = e.target;
    var image = document.getElementById('prdimage');
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            localStorage.setItem("prdImageInfo", JSON.stringify(e.target.result));
        }
        reader.readAsDataURL(input.files[0]);
    }
}
displayPrdData();