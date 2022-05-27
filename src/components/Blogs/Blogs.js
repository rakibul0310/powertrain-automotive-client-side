import React from 'react';

const Blogs = () => {
    return (
        <div className='px-2 md:px-10 flex flex-col justify-center items-center my-4 min-h-screen'>
            <h2 className='text-3xl underline font-bold text-primary decoration-secondary mb-8'>Blogs</h2>
            <div>
                <div className='flex flex-col justify-center items-center mb-10 mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q1: How will you improve the performance of a React Application?</h3>
                    <p className='w-full md:w-3/4'>To improve React rendering, ensure that only relevant props are passed to components. It will allow you to limit CPU use and prevent rendering superfluous features excessively. The approach is to design a functioning component that collects all props and distributes them to other components.</p>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q2: What are the different ways to manage a state in a React application?</h3>
                    <p className='w-full md:w-3/4'>There are four main types of state you need to properly manage in your React apps: <br /> <br />

                        1. Local state <br />
                        2. Global state <br />
                        3. Server state <br />
                        4. URL state <br /><br />

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br /><br />

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global. <br /><br />

                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br /><br />

                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q3: How does prototypical inheritance work?</h3>
                    <p className='w-full md:w-3/4'>Prototypal Inheritance is a Javascript feature that allows you to add methods and attributes to objects. It is a technique that allows one object to inherit the attributes and methods of another. Object. getPrototypeOf and Object. setPrototypeOf have traditionally been used to get and set the [[Prototype]] of an object.</p>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q5:  Why you do not set the state directly in React. <br />
                        For example, if you have const [products, setProducts] = useState([]). <br />
                        Why you do not set products = [...] instead, you use the setProducts</h3>
                    <p className='w-full md:w-3/4'>Because of the following reasons, one should never directly change the state: If you directly alter it, invoking setState() subsequently may just overwrite the update you did. This is not changed when you directly update the state. While a React component can have initial state, its true strength is in changing its state – after all, if we didn't need to change the state, the component shouldn't have any. Only data that changes in our component and is visible in the UI is assigned to state. Rather than explicitly altering the state using this.Unit tests are often automated tests created and executed by software engineers to confirm that a piece of an application (referred to as a "unit") fulfills its design and operates as expected. A unit in procedural programming can be a whole module, although it is most typically a single function or process.</p>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q4: What is a unit test? Why should write unit tests?</h3>
                    <p className='w-full md:w-3/4'>Unit tests are often automated tests created and executed by software engineers to confirm that a piece of an application (referred to as a "unit") fulfills its design and operates as expected. A unit in procedural programming can be a whole module, although it is most typically a single function or process.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;