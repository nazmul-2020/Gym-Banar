import React from 'react';
import styles from '@/styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer class=''>
                <div class="container  mx-auto  px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <a class="flex font-medium items-center md:justify-start justify-center text-white text-xl">

                                <span class="  text-xl p-1.5 bg-white text-black rounded-[10px] mr-1">Gym </span> baran
                            </a>
                            <p class="my-[30px] text-sm text-white opacity-60">AWe take care of your health <br /> with regular and fun exercise</p>

                            <span class="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
                                <a class="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>


                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Program</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-white opacity-60 mt-4 mb-2 ">Workout</a>
                                </li>
                                <li>
                                    <a class="text-white opacity-60  mb-2">Gym</a>
                                </li>
                                <li>
                                    <a class="text-white opacity-60 mb-2 ">Cardio</a>
                                </li>
                                <li>
                                    <a class="text-white opacity-60 ">Zumba</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Blog</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="mt-4 text-white opacity-60 mb-2">Daily stretch</a>
                                </li>
                                <li>
                                    <a class="text-white opacity-60">Daily workout</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="t font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-white opacity-60 mb-2">Support</a>
                                </li>
                                <li>
                                    <a class="text-white opacity-60 mb-2">Contact</a>
                                </li>
                                <li>
                                    <a class="text-white opacity-60">Address</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;