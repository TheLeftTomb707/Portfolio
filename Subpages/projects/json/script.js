const names = document.querySelector('.name');
const address = document.querySelector('.address');
const description = document.querySelector('.description');
const map = document.querySelector('.map');
const url = 'places.json';
let mylist = [];
console.log(mylist);

function jsloader(newvalue) {
    console.log(newvalue);
    fetch(url).then(rep => rep.json())
    .then((data) => {
        mylist = data;
        console.log(data);
        data = JSON.stringify(data);
        console.log(data)
        mylist = localStorage.setItem('mylist', data);
        console.log(mylist);
        data = JSON.parse(data);
        numvalue = localStorage.setItem('numvalue', newvalue);
        console.log(numvalue);
        maker(data[newvalue]);
    });
};

function maker(item) {
    console.log(item)
    item = item;
    makelist(item);
};

function invoke() {
    mylist = localStorage.getItem('mylist');
    console.log(mylist)
    mylist = JSON.parse(mylist);
    console.log(mylist)
    makelist(mylist[localStorage.getItem('numvalue')]);
}

function makelist(item) {
    names.innerHTML = `${item.name}`;
    address.innerHTML = `${item.address}`;
    description.innerHTML = `${item.description}`;
    map.innerHTML = `<iframe src= ${item.map} width="1120" height="800"> </iframe>`;
}