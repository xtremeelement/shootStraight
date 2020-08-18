let firearmItems = document.querySelector(".firearmItems");

document.addEventListener("DOMContentLoaded", function(){
    AOS.init();
    getItems();
});


function getItems(){
    fetch('./ammosize.json')
    .then(res=>{
        let data = res.json();
        return data;
    })
    .then(data=>{
        let allItems = '';
        let testItem = '';
        // firearmItems.innerHTML = '';
        data.forEach(element => {
            if(element.image.src && element.name && element.id){
                let div = document.createElement("div");
                div.className = "firearmItem";
                div.setAttribute("data-aos", "zoom-in");
                
                let img = document.createElement("img");
                img.className = "firearmImage";
                img.src = element.image.src;

                let p1 = document.createElement("p");
                p1.className = "firearmName";
                p1.innerText = element.name;

                let p2 = document.createElement("p");
                p2.className = "firearmID";
                p2.innerText = element.id;

                div.appendChild(img);
                div.appendChild(p1);
                div.appendChild(p2);
                firearmItems.appendChild(div);

                // allItems += `
                //     <div class="firearmItem">
                //         <img src="${element.image.src}"/>
                //         <p class="firearmName">${element.name}</p>
                //         <p class="firearmID">${element.id}<p>
                //     </div>
                // `
                // firearmItems.innerHTML = allItems;
            }
        });
    })
}
