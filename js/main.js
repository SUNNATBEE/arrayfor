const elForm = document.querySelector(".forms")
const elInputName = document.querySelector(".input-name");
const elInputReltion = document.querySelector(".input-realtionship");
const elInputPhone = document.querySelector(".input-phone");
const elList = document.querySelector(".list");

const checkNumber = false;
const array = [] 




elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    const obj = {
        userName: elInputName.value,
        qarinsdosh:elInputReltion.value,
        phoneNumber:elInputPhone.value,
    }
    array.push(obj);
    elForm.reset();
    elList.textContent = ""
    for(let i = 0; i < array.length; i++){
        const item = document.createElement("li");
        item.setAttribute("class", "item");
        item.style.display = "block"
        const text = document.createElement("h2");
        text.style.fontWeight = "900"
        text.style.color = "yellow";
        text.textContent = array[i].userName
        text.style.transition = "all 2s"
        text.classList.add("animate-charcter");
        item.appendChild(text);
        
        const family = document.createElement("p");
        family.textContent = array[i].qarinsdosh;
        family.style.fontWeight = "700"
        // family.style.color = "yellow";
        family.classList.add("waviy");
        item.appendChild(family);
        
        const number = document.createElement("a");
        number.setAttribute("href", `tel:+${array[i].phoneNumber}`)
        number.textContent = array[i].phoneNumber;
        number.classList.add("phones")
        number.classList.add("pop-outin");
        item.appendChild(number);
        item.classList.add("wrapper-item");
        
        const deletebtn = document.createElement("button");
        deletebtn.classList.add("btn", "btn-danger" , "d-block", "mx-auto");
        deletebtn.textContent = "Delete"
        deletebtn.classList.add("text_shadows");
        item.appendChild(deletebtn);
        elList.appendChild(item);

        deletebtn.addEventListener("click" , function(){
                item.style.display = "none";
                array.length = 0;
        })
    }
})







