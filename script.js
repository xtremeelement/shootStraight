const something = document.querySelector(".something");

document.addEventListener("DOMContentLoaded", function(){
    // getTheStuff();
    AOS.init();
    getTheTempStuff();

    var dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (var i = 0; i < dropdowns.length; i++){
        M.Dropdown.init(dropdowns[i]);
    }

});

// function getTheStuff(){
    
//     fetch('https://shoot-straight.com/wp-json/wc/v3/products', {
//         headers: {
//             'Authorization': 'Basic ' + btoa('ck_c5e895a5f422e964206bf95cd5656e9df87427e2:cs_be997da5eed37b986918265ea5435ec70c2fc943')
//         }
//     }).then((res)=>{
//         let data = res.json()
//         return data;        
//     }).then((data)=>{
//         let allitems ='';
//         console.log(data);
//         data.forEach(item => {
//             allitems += `
//                 <div class="indItem w-1/5 bg-gray-500 h-12">
//                     <div><h1>ID:${item.id}</h1></div>
//                     <div><h1>Name:${item.name}</h1></div>
//                     <div><a href="${item.permalink}">GoTo Item</a></div>
//                     <div><img class="itemImage" src="${item.images[0].src}"/></div>
//                 </div>
//             `
//             something.innerHTML = allitems;
//         });
//     });
// }
function getTheTempStuff(){
    
    fetch('./data.json')
    .then((res)=>{

        let data = res.json()
        return data;   

    }).then((data)=>{

        let allitems ='';
        console.log(data);

        data.forEach(item => {
            allitems += `
                <div class="col s3 blah">
                    <div class="card individual">
                        <h5>${item.name}</h5>                    
                        <img class="activator itemImage" src="${item.images[0].src}"/>            
                        <div class="card-content">
                            <p>ID:${item.id}</p><br>
                        </div>
                        <p>$${item.price} <a href="${item.permalink}">Add To Cart</a></p>
                    </div>                        
                </div>
            `
            something.innerHTML = allitems;
        });
    });
}
        
    


