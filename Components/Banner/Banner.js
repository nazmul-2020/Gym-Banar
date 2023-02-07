import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import styles from '@/styles/Banner.module.css';
import Image from 'next/image';


const Banner = () => {
  return (
    <div>
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className={`${styles.bannerText} ${''} `}
          // "title-font sm:text-4xl text-3xl mb-4 font-bold  text-gray-900"
          >
            Healthy in side <br /> <span className={styles.bannerTextSpan}>fresh</span> out side
          </h1>
          <p className={styles.bannerTextP}>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>

          <div class="flex justify-center">
            <button className={`${styles.bannerBtn1} ${"flex justify-between items-center px-6 text-white"}`}
            >Get started
              <span className='bg-white text-black rounded-full'><MdOutlineKeyboardArrowRight /></span></button>

            <button class={`${styles.bannerBtn2} ${'flex items-center text-gray-700 bg-white  py-2 px-5'}`}
            > <span className='mr-3'><AiFillPlayCircle /></span> Learn more</button>
          </div>

          <div className='mt-[51px] w-[462px] '>
            <p>Brands:</p>
            <div className='mt-[11px] flex justify-between items-center'>
          <Image src='/img/Mask Group.png' width={68} height={21}/>
          <Image src='/img/Mask Group (1).png' width={53} height={36}/>
          <Image src='/img/Mask Group (2).png' width={80} height={63}/>
          <Image src='/img/Mask Group (3).png' width={119} height={39}/>
            </div>
          </div>
        </div>

        <div className=
        "lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className='pt-[-10px]' src='/img/Group 4227.png' width={584} height={580}/>
        </div>
      </div>



    </div>
  );
};

export default Banner;