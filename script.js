console.log('amm connected');
function addNewField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('name')
    newNode.classList.add('textarea')
    newNode.setAttribute('placeholder', 'Enter here')

    let weAddbtn = document.getElementById('weAddbtn')
    let we = document.getElementById('we')

    we.insertBefore(newNode, weAddbtn)
}

function addAccField(){
       let newNode = document.createElement('textarea')
    newNode.classList.add('name')
    newNode.classList.add('textarea')
    newNode.setAttribute('placeholder', 'Enter here')

    let weAddbtn = document.getElementById('usAddBtn')
    let we = document.getElementById('us')

    we.insertBefore(newNode, weAddbtn)
}

function generateCV() {

    // setting the values
    document.getElementById('name1').innerHTML = document.getElementById('name').value;
    
    // taking the variables
    let info = document.getElementById('main');
    let cv = document.getElementById('content')

    // display when clicked
    info.style.display = 'none'
    cv.style.display = 'flex'
    

    // i think you can contuine here ZENITH?? IF NOT WRITE TO ME ON WHATSAPP
    
    // THANKS <ZENITH>
}