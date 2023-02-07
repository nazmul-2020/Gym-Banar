import styles from '@/styles/FullBody.module.css';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';



const FullBody = () => {
    return (
        <div>
            <div class="container mx-auto flex  md:flex-row  flex-col-reverse items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:mt-[60px] md:mb-0">
                   <Image src='/img/Group 3892.png' width={571} height={496}/>
                </div>

                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Best full body <br /> workout to lose fat
                    </h1>
                    <p class="mb-8 leading-relaxed text-justify">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    <div class="flex justify-center">
                        <button
                            className={`${styles.bannerBtn1} ${"flex justify-between items-center px-6 text-white"}`}
                        >Get started
                            <span className=' text-white text-xl rounded-full'>
                                <BsArrowRight className='' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>


            <div class="container mx-auto mb-[120px] flex  md:flex-row  flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Daily morning <br /> workout in home
                    </h1>
                    <p class="mb-8 leading-relaxed text-justify">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    <div class="flex justify-center">
                        <button
                            className={`${styles.bannerBtn1} ${"flex justify-between items-center px-6 text-white"}`}
                        >Get started
                            <span className=' text-white text-xl rounded-full'>
                                <BsArrowRight className='' />
                            </span>
                        </button>
                    </div>
                </div>

                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:mt-[60px] md:mb-0 relative">
                   <Image src='/img/Group 3883.png' width={492} height={484}/>
                   <Image className=' absolute top-[162px] right-[218px]' src='/img/gallery.png' width={80} height={80}/>
                   <Image className='absolute top-[182px] left-[60px]' src='/img/Group 3854.png' width={60} height={60}/>
                   <Image className='absolute top-[48px] left-[70px]' src='/img/Group 3890.png' width={60} height={60}/>

                </div>
            </div>

            <div class="container mx-auto mb-[120px] flex  md:flex-row  flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:mt-[60px] md:mb-0 relative">
                   <Image src='/img/Group 3885.png' width={605} height={444}/>
                </div>

                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">How it works?</h1>

                    <p className={`${styles.worksP} ${""}}`}
                    >The body becomes sick because of rarely exercise</p>
                    <p className={`${styles.worksPText} ${'text-black opacity-50'}`}>Don't give up in order to get a healthy and ideal body</p>
                    <p className={`${styles.worksPText} ${'text-black opacity-50 '}`}>Become addicted to the exercise that is given</p>

                   
                </div>
            </div>
            
        </div>
    );
};

export default FullBody;