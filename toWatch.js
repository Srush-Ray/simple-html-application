function getFormDetails(event) {
    console.log("here submited")
    event.preventDefault();
    var nameValue = document.getElementById("watch_name").value;
    var radioCategoryValue = document.querySelector('input[name="category"]:checked')?.value; 
    var genreCheckboxValue = [...document.querySelectorAll('.genre:checked')].map(i=>i.value);
    console.log(genreCheckboxValue)
    var platformSelectValue = document.getElementById('platform');
    var platformSelectedOptionValue = platformSelectValue.options[platformSelectValue.selectedIndex]?.value;
    console.log(
        {
            nameValue,
            radioCategoryValue,
            genres:genreCheckboxValue,
            platform:platformSelectedOptionValue
        }
    )    
    const listContainer=document.getElementById("list_container");
    let newDiv = document.createElement("div");
    newDiv.style.border="1px solid black";
    let details = document.createElement("p");
    details.textContent=nameValue+radioCategoryValue+genreCheckboxValue.toString()+platformSelectedOptionValue
    newDiv.appendChild(details);
    listContainer.append(newDiv)
}