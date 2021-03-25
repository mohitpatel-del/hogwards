alert("I am a huge Harry potter fan , i love the series and i always wanted to go to Hogwards. Wizarding world was a huge deal for me nowdays i spend most of the time writing and reflecting on my childhood. You know the innocence of a child, so this is just one old sweet memory or dream i am trying to live by developing this page..ENJOY .");
//selected btn
const button = document.getElementById('sorting_btn');
//adding eventListener to btn on click
button.addEventListener('click', function(event) {
    //preventing page from refreshing
    event.preventDefault();
    //making an house array
    const houses = ['griffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
    //selecting the parent div by id
    const house = document.getElementById('houses');
    //randomly generating an index for house array
    let randomSelector = Math.floor(Math.random() * 4);
    //now extracting random array element or house from array and uppercasing it
    let randomHouse = houses[randomSelector].toUpperCase();
    //hiding the form inputs to display the house
    const container = document.getElementById('houses').style.display = 'none';
    //selecting the parent div of the parent div to form inputs
    const parent = document.getElementById('parent');
    //creating an h3 element in document
    const h3 = document.createElement('h3');
    //adding class to the created h3 element
    h3.classList.add('sorted-house')
        //manipulating and adding text inside h3 element which is the random house selected from array
    const finalHouse = h3.innerText = `${randomHouse}`;
    //inserting h3 in html file
    parent.append(h3);

})

//fething data from the user inputs
const formData = {};
const inputs = document.querySelectorAll('.form-control');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(event) {
        formData[`${inputs[i].name}`] = event.target.value;
        console.log(event, formData)

    })
}

if (formData.First - name) {
    if (formData.First - name.indexOf('s') === 0) {
        h3.innerText = `SLYTHERIN`;
    }
    if (formData.First - name.indexOf('g') === 0) {
        h3.innerText = `GRIFFINDOR`;
    }
    if (formData.First - name.indexOf('h') === 0) {
        h3.innerText = `HUFFLEPUFF`;
    }
    if (formData.First - name.indexOf('r') === 0) {
        h3.innerText = `RAVENCLAW`;
    }

}

//radio buttons 
const rBtns = document.querySelectorAll('input[type=radio]');
for (let i = 0; i < rBtns.length; i++) {
    rBtns[i].addEventListener('click', function(event) {
        formData[`${rBtns[i].name}`] = event.target.checked;
        console.log(event, formData);
    })
}
