import React from 'react'
import home1 from '../images/home1.png'
import "./styles/HomeScreen.css"

function HomeScreen() {
    return (
    <>
        <div className="hero px-10 py-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={home1} className="max-w-sm" />
            <div>
            <h1 className="text-5xl font-bold text-neutral-focus">Master Behavioral Tech Interviews with <span className='grad-text'>AI-Powered</span> Feedback</h1>
            <p className="py-6 text-neutral-focus">Your path to interview mastery. Self-guided prep featuring premier FAANG-company questions, enhanced by AI-powered instant feedback.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>




        <section class="body-font text-neutral-focus">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4">Experience Real Questions from Leading Tech Companies</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We curate authentic questions from top-tier companies, ensuring utmost accuracy. Stay in sync with current trends through regular updates.</p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Google</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Meta</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">ByteDance</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Airbnb</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Amazon</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">DropBox</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Microsoft</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Stripe</span>
                        </div>
                    </div>

                    <div class="p-2 sm:w-1/2 md:w-1/3 w-full">
                        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-primary w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Uber</span>
                        </div>
                    </div>

                </div>

                <div class="text-center mb-20">
                <h1 class="sm:text-2xl text-1xl font-medium text-center title-font mb-4">And Many More!</h1>
                </div>
            </div>
        </section>


        <div className='px-10'>

            <div className="collapse bg-base-200 my-5 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    Are the interview questions real?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse bg-base-200 my-5 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    What kind of questions are included?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse bg-base-200 my-5 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    Is this free? What is the Price?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse bg-base-200 my-5 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    Do you offer technical interview prep?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <p>hello</p>
                </div>
            </div>

        </div>



        </>
    )
}

export default HomeScreen
