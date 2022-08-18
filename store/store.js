import { reactive } from 'vue';


const getRandomIdOfNumberAndLetters = () => {
    const randomId =   Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000;
    return randomId
}

const questions = [
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the United States?',
        response: 'Washington D.C.',
        options: [
            'Washington D.C.',
            'New York',
            'Los Angeles',
            'Seattle'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Germany?',
        response: 'Berlin',
        options: [
            'Berlin',
            'Munich',
            'Hamburg',
            'Frankfurt'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the United Kingdom?',
        response: 'London',
        options: [
            'London',
            'Manchester',
            'Liverpool',
            'Birmingham'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Belgium',
        response: 'Brussels',
        options: [
            'Brussels',
            'Antwerp',
            'Ghent',
            'Charleroi'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Netherlands?',
        response: 'Amsterdam',
        options: [
            'Amsterdam',
            'Rotterdam',
            'The Hague',
            'Utrecht'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Spain?',
        response: 'Madrid',
        options: [
            'Madrid',
            'Barcelona',
            'Valencia',
            'Seville'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Italy?',
        response: 'Rome',
        options: [
            'Rome',
            'Milan',
            'Venice',
            'Florence'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Czech Republic?',
        response: 'Prague',
        options: [
            'Prague',
            'Brno',
            'Praha',
            'Ostrava'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Slovakia?',
        response: 'Bratislava',
        options: [
            'Bratislava',
            'Budapest',
            'Ljubljana',
            'Zagreb'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Slovenia?',
        response: 'Ljubljana',
        options: [
            'Ljubljana',
            'Budapest',
            'Bratislava',
            'Zagreb'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Croatia?',
        response: 'Zagreb',
        options: [
            'Zagreb',
            'Budapest',
            'Ljubljana',
            'Bratislava'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Bosnia and Herzegovina?',
        response: 'Sarajevo',
        options: [
            'Sarajevo',
            'Sofia',
            'Belgrade',
            'Podgorica'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Colombia?',
        response: 'Bogota',
        options: [
            'Bogotá',
            'Cartagena',
            'Medellin',
            'Cali'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Ecuador?',
        response: 'Quito',
        options: [
            'Quito',
            'Guayaquil',
            'Cuenca',
            'Ambato'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Peru?',
        response: 'Lima',
        options: [
            'Lima',
            'Iquitos',
            'Arequipa',
            'Cusco'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Paraguay?',
        response: 'Asuncion',
        options: [
            'Asuncion',
            'Ciudad del Este',
            'Cordoba',
            'La Paz'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of China?',
        response: 'Beijing',
        options: [
            'Beijing',
            'Shanghai',
            'Guangzhou',
            'Shenzhen'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of Japan?',
        response: 'Tokyo',
        options: [
            'Tokyo',
            'Osaka',
            'Kyoto',
            'Nagoya'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of South Korea?',
        response: 'Seoul',
        options: [
            'Seoul',
            'Busan',
            'Incheon',
            'Daegu'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
    {
        id: getRandomIdOfNumberAndLetters(),
        question: 'What is the capital of the Republic of Malta?',
        response: 'Valletta',
        options: [
            'Valletta',
            'Vadodara',
            'Mumbai',
            'Bangalore'
        ],
        done: false,
        isCorrect: undefined,
        isWrong: undefined,
    },
];


/**
 * Random questions generator
 * @returns Array of questions
 */
export function getQuestionsRandom() {
    let array  = Array.from(Array(questions.length).keys());
    array = array.sort(() => Math.random() - 0.5);
    
    return array.map( index =>  { 
        let arrayOptions  = Array.from(Array(questions[index].options.length).keys());
        arrayOptions = arrayOptions.sort(() => Math.random() - 0.5);
        questions[index].options = arrayOptions.map( i => questions[index].options[i]);
        return {...questions[index]} 
    });
}



export const reset = () => {
    store.questions = getQuestionsRandom();
    store.score = 0;
    store.currentQuestion= 0;
    store.isFinished= false;
    store.isStarted= false;
    store.mistakes= 0;
    store.correct= 0;


};

export let store = reactive({
    questions: getQuestionsRandom(),
    score: 0,
    currentQuestion: 0,
    isFinished: false,
    isStarted: false,
    mistakes: 0,
    correct: 0
});

export const getQuestions = () => {
    return reactive(getQuestionsRandom(),)
}






