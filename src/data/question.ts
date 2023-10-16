import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: 'O que significa HTML?',
        options: [
            'Hyper Text Markup Language',
            'Hyperlink and Text Markup Language',
            'High Tech Modern Language',
            'Hyper Transfer Markup Language'
        ],
        answer:0,
    },

    {
        question: 'Qual tag HTML é usada para criar uma lista não ordenada?',
        options: [
            '<ol>',
            '<li>',
            '<ul>',
            '<dl>'
        ],
        answer:2,
    },

    {
        question: 'Qual propriedade CSS é usada para definir a cor do texto?',
        options: [
            'text-color',
            'color',
            'font-color',
            'font-style'
        ],
        answer:1,
    },

    {
        question: 'Qual elemento HTML é usado para criar um link?',
        options: [
            '<a>',
            '<href>',
            '<url>',
            '<link>'
        ],
        answer:0,
    },

    {
        question: 'Qual propriedade CSS é usada para definir o tamanho da fonte?',
        options: [
            'font-size',
            'size',
            'text-font',
            'text-size'
        ],
        answer:0,
    },

    {
        question: 'Qual propriedade CSS é usada para definir a margem interna de um elemento?',
        options: [
            'margin',
            'spacing',
            'border',
            'padding'
        ],
        answer:3,
    },

    {
        question: 'Qual tag HTML é usada para criar uma quebra de linha?',
        options: [
            '<line>',
            '<break>',
            '<br>',
            '<new>'
        ],
        answer:2,
    },

    {
        question: 'Qual elemento HTML é usado para criar um cabeçalho de nível 1?',
        options: [
            '<header>',
            '<h1>',
            '<title>',
            '<heading>'
        ],
        answer:1,
    },

    
    {
        question: 'Qual propriedade CSS é usada para definir a cor de fundo de um elemento?',
        options: [
            'color',
            'element-color',
            'background-color',
            'color-background'
        ],
        answer:2,
    },
    
    {
        question: 'Para que serve o JavaScript?',
        options: [
            'Para estilizar páginas da web.',
            'Para criar estrutura em páginas da web.',
            'Para adicionar interatividade e funcionalidade às páginas da web.',
            'Para definir a aparência geral de uma página da web.'
        ],
        answer:2,
    },
];