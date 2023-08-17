let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let del = document.getElementById("del")

let drag = null;

btn.onclick = function(){
    if(inp.value !=""){
        boxs[0].innerHTML +=`
        <p class="item" draggable="true">${inp.value}<p/>
        `
        inp.value = "";
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener("dragstart", function(){
            drag = item;
            item.style.opacity = "0.5";
            item.style.background = "red";

        })
        item.addEventListener("dragend", function(){
            drag = null;
            item.style.opacity = "1";
            item.style.background = "#928cff";
        })
        boxs.forEach(box=>{
            box.addEventListener("dragover", function(e){
                e.preventDefault()
                this.style.background = "#090";
                this.style.color = "#fff";
            })
            box.addEventListener("dragleave", function(){
                this.style.background = "#fff";
                this.style.color = "#000";
            })
            box.addEventListener("drop", function(){
                box.append(drag);
                this.style.background = "#fff";
                this.style.color = "#000";

            })
        })
    })
}
// inp.addEventListener("keydown", function(){
//     if(inp.value !=""){
//         boxs[0].innerHTML +=`
//         <p class="item" draggable="true">${inp.value}<p/>
//         `
//         inp.value = "";
//     }
// })
del.onclick = function(){
    boxs[0].innerHTML =`<h2>Box</h2>`;
    boxs[1].innerHTML =`<h2>Box</h2>`;
    boxs[2].innerHTML =`<h2>Box</h2>`;
    boxs[3].innerHTML =`<h2>Box</h2>`;
    
    
    
}