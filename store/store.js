import { reactive } from 'vue';


const getRandomIdOfNumberAndLetters = () => {
    const randomId = Math.random().toString(36).substr(2, 9);
    return randomId
}

const questions = [
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the United States?',
        response: 'Washington D.C.',
        options: [
            'Washington D.C.',
            'New York',
            'Los Angeles',
            'Seattle'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of Germany?',
        response: 'Berlin',
        options: [
            'Berlin',
            'Munich',
            'Hamburg',
            'Frankfurt'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the United Kingdom?',
        response: 'London',
        options: [
            'London',
            'Manchester',
            'Liverpool',
            'Birmingham'
        ],
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of Belgium',
        response: 'Brussels',
        options: [
            'Brussels',
            'Antwerp',
            'Ghent',
            'Charleroi'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the Netherlands?',
        response: 'Amsterdam',
        options: [
            'Amsterdam',
            'Rotterdam',
            'The Hague',
            'Utrecht'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of Spain?',
        response: 'Madrid',
        options: [
            'Madrid',
            'Barcelona',
            'Valencia',
            'Seville'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of Italy?',
        response: 'Rome',
        options: [
            'Rome',
            'Milan',
            'Venice',
            'Florence'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the Czech Republic?',
        response: 'Prague',
        options: [
            'Prague',
            'Brno',
            'Praha',
            'Ostrava'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the Slovakia?',
        response: 'Bratislava',
        options: [
            'Bratislava',
            'Budapest',
            'Ljubljana',
            'Zagreb'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the Slovenia?',
        response: 'Ljubljana',
        options: [
            'Ljubljana',
            'Budapest',
            'Bratislava',
            'Zagreb'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the Croatia?',
        response: 'Zagreb',
        options: [
            'Zagreb',
            'Budapest',
            'Ljubljana',
            'Bratislava'
        ]
    },
    {
        id: getRandomIdOfNumberAndLetters( ),
        question: 'What is the capital of the Bosnia and Herzegovina?',
        response: 'Sarajevo',
        options: [
            'Sarajevo',
            'Sofia',
            'Belgrade',
            'Podgorica'
        ]
    },
];


/**
 * Random questions generator
 * @returns Array of questions
 */
function getQuestionsRandom() {
    let array  = Array.from(Array(questions.length).keys());
    array = array.sort(() => Math.random() - 0.5);
    
    return array.map( index =>  { 
        let arrayOptions  = Array.from(Array(questions[index].options.length).keys());
        arrayOptions = arrayOptions.sort(() => Math.random() - 0.5);
        questions[index].options = arrayOptions.map( i => questions[index].options[i]);
        return {...questions[index]} 
    });
}

const initialState = {
    questions: getQuestionsRandom(),
    score: 0,
    currentQuestion: 0,
    isFinished: false,
    isStarted: false,
    mistakes: 0,
    correct: 0
}

export const reset = () => {
    store.questions = getQuestionsRandom(),
    store.score = 0,
    store.currentQuestion= 0,
    store.isFinished= false,
    store.isStarted= false,
    store.mistakes= 0,
    store.correct= 0
}

export let store = reactive(initialState);






