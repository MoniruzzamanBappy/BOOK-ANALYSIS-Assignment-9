import React from 'react';

const Blogs = () => {
    return (
        <div className='px-16 my-4'>
            <h1 className='text-2xl font-bold'>Context API</h1>
            <li>Context is designed to share data that can be considered “global” for a tree of React components</li>
            <li>Using context, we can avoid passing props through intermediate elements.</li>
            <li>Context is primarily used when some data needs to be accessible by many components at different nesting levels</li>
            <li>If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</li>
            <li>
            The inversion of control can make your code cleaner in many cases by reducing the amount of props you need to pass through your application. 
            </li>
            <br />
            <h1 className='text-2xl font-bold'>Semantic Tag</h1>
            <li>A semantic element clearly describes its meaning to both the browser and the developer.</li>
            <li>Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.</li>
            <li>It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.</li>
            <li>By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it.</li>
            <li>By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.</li>
            <br />
        </div>
    );
};

export default Blogs;