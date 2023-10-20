let params = {
    strings: ['Programmer', 'AI/ML Enthusiast', 'Web Developer'],
    loop: true,
    typespeed: 127,
    erasespeed: 25,
}

let strings = params.strings
let len = strings.length
let loop = params.loop
let typespeed = params.typespeed
let erasespeed = params.erasespeed
let string = 0
let letter = 0
let newstring = []

let currentstring
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let div = document.getElementById('output')

async function type() {
    do {
        currentstring = strings[string]
        newstring.push(currentstring[letter++])
        let totype = newstring.join("")
        div.innerText = totype
        await sleep(typespeed);
    } while (letter != currentstring.length)
}


async function erase() {
    do {
        newstring.splice(--letter, 1)
        let totype = newstring.join("")
        div.innerText = totype
        await sleep(erasespeed)
    } while (letter != 0)
}

async function delayedloop() {
    do {
        for (let i = 0; i < strings.length; i++) {
            await type();
            if (i != strings.length - 1 || loop==true) {
                await erase();
            }
            string++;
            if (string == len) {
                string = 0
            }
        }
    } while (loop)
}
delayedloop()