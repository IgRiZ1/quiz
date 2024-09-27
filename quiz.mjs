import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("welkom bij de quiz! beantwoord de volgende 5 vragen:\n")


let vraag1 = await userInput.question('vraag 1 : wat is de hoofdstad van frankrijk ?')

let vraag2 = parseFloat(await userInput.question('vraag 2 : hoeveel planeten zijn er in ons zonnenstelsel?'))

let vraag3 = await userInput.question('vraag 3 : wat is de grooste zoogdier ?')

let vraag4 = await userInput.question('vraag 4 : wie schreef het toneelstuk " Romeo en julia"?')

let vraag5 = parseFloat(await userInput.question('vraag 5 : hoeveel poten heeft een spin?'))

if(vraag1 == 'parijs'){
    console.log('jouw antwoord is '+vraag1 ,
        '\n goede antwoord!!'
    )
}else{
    console.log('jouw antwoord is ' + vraag1,
        '\n slechte antwoord!!'
    )
}

if(vraag2 == 9){
    console.log('jouw antwoord is '+vraag2,
        '\n goede antwoord!!'
    )
}else{
    console.log('jouw antwoord is ' + vraag2,
        '\n slechte antwoord!!'
    )
}

if(vraag3 == 'blauwevinvis'){
    console.log('jouw antwoord is '+vraag3,
        '\n goede antwoord!!'
    )
}else{
    console.log('jouw antwoord is ' + vraag3,
        '\n slechte antwoord!!'
    )
}

if(vraag4 == 'shakespear'){
    console.log('jouw antwoord is '+vraag4,
        '\n goede antwoord!!'
    )
}else{
    console.log('jouw antwoord is ' + vraag4,
        '\n slechte antwoord!!'
    )
}

if(vraag5 == 8){
    console.log('jouw antwoord is '+vraag5,
        '\n goede antwoord!!'
    )
}else{
    console.log('jouw antwoord is ' + vraag5,
        '\n slechte antwoord!!'
    )
}





