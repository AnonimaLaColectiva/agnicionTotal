var textElement = document.getElementById('text');
var optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            let button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click',() => selectOption(option))
            optionButtonsElement.appendChild(button)

        }
    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
    showTextNode(nextTextNodeId);
}

function selectOption(option) {
    let nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState)

}

var textNodes = [
    {
        id: 1,
        text: 'Indicacion 1',
        options: [
            {
              text: 'take the goo', 
              setState: {blueGoo: true},
              nextText: 2 
            },
            {
                text: 'leave the goo',
                nextText: 2
            }
        ]
    }, 
    {
        id: 2,
        text: "Indicacion 2",
        options: [
            {
                text: 'Trade the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: '¿indicacion 3?',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: '¿indicacion 4?',
                nextText: 3
            }

        ]
    },
    {
        id: 3,
        text: 'indicacion 4????',
        option: [
            {
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'find a room to sleep at in the town',
                nextText: 5
            },
            {
                text: 'find some bay in a stable to sleep in', 
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'terminar el juego',
        option: [
            {
                text: 'restart',
                 nextText: -1
            }
        ]
    }
]

startGame()
