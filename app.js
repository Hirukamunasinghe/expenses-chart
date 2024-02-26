// initializations
const days = document.querySelector(".days");
const bars = document.querySelectorAll('.bar');
const url = './data.json'

// getDays function
const getDays = async() =>{
    const res = await fetch(url);
    const data = await res.json()
    
    // use for loop to iterate over each day
    data.forEach(item =>{
        const para = document.createElement("p");
        para.textContent = item.day;
        days.appendChild(para)
    })
}

getDays();

// get Bar amount
const getBarAmount = async (index) => { // Accept index parameter
    const res = await fetch(url);
    const data = await res.json();


    // getting the index and setting the innerHTML to an empty string
    bars[index].innerHTML = "";

    const price = document.createElement("p");
    price.textContent = data[index].amount;
    price.classList.add('price');
    bars[index].appendChild(price);
};

// hover effect
bars.forEach((bar,index)=>{
    bar.addEventListener('mouseover',()=>{
        getBarAmount(index)
    })

// removing the hover effect when the mouse moves out
    bar.addEventListener('mouseout', () => {
        const priceElement = bars[index].querySelector('p');
        if (priceElement) {
            priceElement.remove();
        }
    });
})



