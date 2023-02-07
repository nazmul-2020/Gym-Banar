import React from 'react';
import styles from '@/styles/Programs.module.css';
import Image from 'next/image';


const Programs = () => {
    return (
        <div className='mb-[120px]'>

            <div class="container mx-auto">
                <div class="flex flex-col text-center w-full mb-[50px]">
                    <h1 class="sm:text-3xl lg:text-5xl font-medium leading-[73px] mb-4 text-gray-900">Programs that can </h1>
                    <h1 className='sm:text-3xl lg:text-[46px] font-medium leading-[73px] mb-4' > be taken</h1>
                    
                </div>
                
                <div class="flex flex-wrap -m-2">
                  
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <div className={`${styles.pCircle1} ${''}`}>
                            <Image src='/img/gymnast-girl.png' width={50} height={50}/>
                            </div>
                            <div class="flex-grow ml-[22px]">
                                <h2 class="title-font font-medium">Gets ABS in 2 weeks</h2>
                                <p class="">Exercise is a very important <br /> need for our body. </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <div className={`${styles.pCircle2} ${''}`}>
                            <Image src='/img/man-doing-yoga.png' width={50} height={50}/>
                            </div>
                            <div class="flex-grow ml-[22px]">
                                <h2 class="title-font font-medium">25 Mins full body workout</h2>
                                <p class="">Exercise is a very important <br /> need for our body. </p>
                            </div>
                        </div>
                    </div>

                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <div className={`${styles.pCircle3} ${''}`}>
                            <Image src='/img/stretching.png' width={50} height={50}/>
                            </div>
                            <div class="flex-grow ml-[22px]">
                                <h2 class="title-font font-medium">10 Mins toned arms workout</h2>
                                <p class="">Exercise is a very important <br /> need for our body. </p>
                            </div>
                        </div>
                    </div>

                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <div className={`${styles.pCircle3} ${''}`}>
                            <Image src='/img/man-doing-yoga-.png' width={50} height={50}/>
                            </div>
                            <div class="flex-grow ml-[22px]">
                                <h2 class="title-font font-medium">15 Mins full body fat burn</h2>
                                <p class="">Exercise is a very important <br /> need for our body. </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <div className={`${styles.pCircle1} ${''}`}>
                            <Image src='/img/person-practicing-a-strengthen-posture.png' width={50} height={50}/>
                            </div>
                            <div class="flex-grow ml-[22px]">
                                <h2 class="title-font font-medium">25 Mins HIIT workout</h2>
                                <p class="">Exercise is a very important <br /> need for our body. </p>
                            </div>
                        </div>
                    </div>

                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <div className={`${styles.pCircle2} ${''}`}>
                            <Image src='/img/yoga-posture-.png' width={50} height={50}/>
                            </div>
                            <div class="flex-grow ml-[22px]">
                                <h2 class="title-font font-medium">Intense lower Abs workout</h2>
                                <p class="">Exercise is a very important <br /> need for our body. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Programs;