// let arr = [];

// const addData = () => {
//     let alldata = JSON.parse(localStorage.getItem("catInfo"));
//     const username = document.catfrm.catname.value;
//     const catid = document.catfrm.catid.value;

//     // let len = (alldata!=null)?alldata.length:0;
//     let catData = {};
//     if (catid != '') {
//         //update
//         alldata.map((i) => {
//             if (i.id == catid) {
//                 i.username = username;
//             }
//         })
//         localStorage.setItem("catInfo", JSON.stringify(alldata));
//     } else {
//         //insert
//         if (alldata != null) {
//             catData = {
//                 id: alldata.length + 1,
//                 username: username,
//             }
//             arr = alldata;
//         } else {
//             //new arr push
//             catData = {
//                 id: 1,
//                 username: username,
//             }
//         }
//         arr.push(catData);
//         localStorage.setItem("catInfo", JSON.stringify(arr));
//     };
//     document.catfrm.catname.value = "";
//     document.catfrm.catid.value = "";

//     displayCat();
// };

// const displayCat = () => {
//     let tr = '';
//     let alldata = JSON.parse(localStorage.getItem("catInfo"));
//     if (alldata != null) {
//         alldata.map((i) => {
//             tr += `<tr>
//             <td>${i.id}</td>
//             <td>${i.username}</td>
//             <td>
//             <a href="#"  class="btn btn-success" onclick="editData(${i.id})">Edit</a>
//             <a href="#"  class="btn btn-danger" onclick="delData(${i.id})">Delete</a>
//             <td>
//             </tr>`;
//         });
//         document.getElementById("allCatData").innerHTML = tr;
//     }
// }

// const delData = (id) => {
//     let alldata = JSON.parse(localStorage.getItem("catInfo"));
//     alldata.splice(id - 1, 1);
//     j = 1;
//     alldata.map((i) => {
//         i.id = j++;
//     });
//     localStorage.setItem("catInfo", JSON.stringify(alldata));
//     displayCat();
// };

// const editData = (id) => {
//     let alldata = JSON.parse(localStorage.getItem("catInfo"));
//     let cat = alldata.filter((i) => {
//         return i.id === id;
//     })
//     console.log(cat);
//     document.catfrm.catname.value = cat[0].username;
//     document.catfrm.catid.value = cat[0].id;
// }
// displayCat();


// ------------------------------------------------- easy mathod ------------------------------------------------//

let arr = [];
const addData = () => {
    let data = JSON.parse(localStorage.getItem("catInfo"));
    let username = document.catfrm.catname.value;
    let catid = document.catfrm.catid.value;
    let obj = {};


    if (username != "") {
        if (catid != "") {
            //update catid
            data.map((i) => {
                if (i.id == catid) {
                    i.name = username;
                }
            })
            localStorage.setItem("catInfo", JSON.stringify(data));
        }
        else {
            //insert code

            if (data != null) {
                //data push
                console.log("Data found in Local storage");
                obj = {
                    id: data.length + 1,
                    name: username,
                }
                arr = data;
            }
            else {
                //new arr push
                console.log("else part execute");
                obj = {
                    id: 1,
                    name: username,
                }

            }
            arr.push(obj);
            localStorage.setItem("catInfo", JSON.stringify(arr));

        }

        document.catfrm.catname.value = "";
        document.catfrm.catid.value = "";

        // document.catfrm.reset();
        displayData();
    }
}

const displayData = () => {

    id = document.catfrm.catid.value;
    document.getElementById("btnSave").innerHTML = (id != "") ? "Update Category" : "Save Category";

    let data = JSON.parse(localStorage.getItem("catInfo"));
    tr = "";
    data.map((i) => {
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td><a href="#" class="btn btn-success" onclick="editData(${i.id})">Edit</a></td>
                <td><a href="#" class="btn btn-danger" onclick="deletData(${i.id})">Delet</a></td>
                </tr>`
    });
    document.getElementById("allCatData").innerHTML = tr;

}

const deletData = (id) => {
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    allData.splice(id - 1, 1);
    let j = 1;
    allData.map((i) => {
        i.id = j++;
    });

    localStorage.setItem("catInfo", JSON.stringify(allData));
    displayData();
}

const editData = (id) => {
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    let cat = allData.filter((i) => {
        return i.id == id;
    });
    console.log(cat);
    document.catfrm.catname.value = cat[0].name;
    document.catfrm.catid.value = cat[0].id;

    // aa button no code chhe
    id = document.catfrm.catid.value;
    document.getElementById("btnSave").innerHTML = (id != "") ? "Update Category" : "Save Category";
}

displayData();

// ------------------------------------------------------------------------------------------------------//