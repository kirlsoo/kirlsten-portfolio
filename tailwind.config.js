import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                sans: ['Arimo', ...defaultTheme.fontFamily.sans],
                oxygen: ['Oxygen', 'sans-serif'],
                crimson: ['"Crimson Text"', 'serif'],
            },
            colors: {
                'primary-white': '#FDFFF7', // primary white
                'primary-lblue': '#83C4FF', // primary light blue
                'primary-dblue': '#002040', // primary dark blue
                'secondary': '#2098D0', // A complementary color
                'accent': '#FFC863', // For highlights and call-to-actions
                'accent-pink': '#F3A39C', // Other accents
            },
            // Custom Font Sizes
            fontSize: {
                'h1': ['32px', { lineHeight: '1.2' }],
                'h2': ['24px', { lineHeight: '1.3' }],
                'body': ['12px', { lineHeight: '1.5' }],
                'h3': ['18px', { lineHeight: '1.4' }],
                'h4': ['16px', { lineHeight: '1.4' }],
                'h5': ['14px', { lineHeight: '1.4' }],
            },
        },
    },

    plugins: [forms],
};
