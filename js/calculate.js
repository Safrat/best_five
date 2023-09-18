function getInputValueFieldById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);


    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerAmount = getInputValueFieldById('per-player');

    const playerExpences = selectPlayer.length * perPlayerAmount;

    setTextElementValueById('player-expences', playerExpences);
})

document.getElementById('calculate-id').addEventListener('click', function () {
    const managerCost = getInputValueFieldById('manager-cost');

    const coachCost = getInputValueFieldById('coach-cost');
    console.log(coachCost);
    const textElement = document.getElementById('player-expences');
    const playerExpences = parseFloat(textElement.innerText);
    console.log(playerExpences);
    const Total = playerExpences + parseFloat(managerCost) + parseFloat(coachCost);
    setTextElementValueById('total-cost', Total);

})