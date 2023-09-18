const selectPlayer = [];


function display(selectItem) {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';



    for (let i = 0; i < selectPlayer.length; i++) {


        let playerName = selectPlayer[i];

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="pr-3"> ${i + 1}.</span><span>${playerName}</span>
            
            `;
        orderList.appendChild(li);



    }


}

function selectItemFromSelect(element) {
    //console.log(element.parentNode.children);
    //console.log(element.parentNode.children[1].innerText);
    //console.log(element.parentNode.children[2]);
    if (selectPlayer.length > 4) {
        alert('You can not select more than 5');

    }
    else {
        const playerName = element.parentNode.children[1].innerText;
        //console.log(playerName);
        selectPlayer.push(playerName);


        display(selectPlayer);
    }

}