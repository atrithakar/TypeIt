let params ={
    strings: ['Programmer', 'AI/ML Enthusiast', 'Web Developer'],
    loop: true,
    typespeed: 127,
    erasespeed: 25,
}
let strings = params.strings
let len = strings.length
let loop = params.loop
let typespeed=params.typespeed
let erasespeed=params.erasespeed
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
        console.log(newstring)
        let totype=newstring.join("")
        div.innerText=totype

        await sleep(typespeed);

    } while (letter != currentstring.length)
}


async function erase() {
    do {
        newstring.splice(--letter, 1)
        console.log(newstring)
        let totype=newstring.join("")
        div.innerText=totype
        await sleep(erasespeed)
    } while (letter != 0)
}

// type()
// erase()


async function delayedloop() {

    while (true) {

        
        await type();
        await erase();
        string++;
        if(string==len)
        {
            string=0
        }

    }
}
delayedloop()