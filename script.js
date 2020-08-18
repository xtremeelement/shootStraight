const something = document.querySelector(".something");

document.addEventListener("DOMContentLoaded", function(){
    // getTheStuff();
    // AOS.init();
    getTheTempStuff();

    // var dropdowns = document.querySelectorAll('.dropdown-trigger')
    // for (var i = 0; i < dropdowns.length; i++){
    //     M.Dropdown.init(dropdowns[i]);
    // }

});


function getTheTempStuff(){
    
    fetch('./ammosize.json')
    .then((res)=>{

        let data = res.json()
        return data;   

    }).then((data)=>{
        data.forEach(element => {
            console.log(element.name);
        });
        });
    
}
        
    


