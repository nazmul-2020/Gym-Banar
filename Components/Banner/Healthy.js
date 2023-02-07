import styles from '@/styles/Healthy.module.css';
import Image from 'next/image';



const Healthy = () => {
    return (
        <div className='mt-[120]'>
            <div class="container px- pt-24 mx-auto flex flex-wrap">
                <h2 class="sm:text-3xl lg:text-[46px] lg:leading-[70px] font-normal mb-2 md:w-2/5">Healthy in side <br /> fresh out side</h2>
                <div class="md:w-3/5 md:pl-6">
                    <p class="mt-3 opacity-50">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>

                </div>
            </div>

            <div className={`${styles.card} ${'grid gap-4 lg:grid-cols-3 sm:grid-cols-1'}`}>
                <div className='mx- flex items-center justify-between text-white '>
                    <div className={`${styles.cardImg} ${' bg-bla w-24 h-24 flex justify-center items-center'}`}>
                        <Image src='/img/crucified-pose.png' width={50} height={50} />
                    </div>
                    <div className=''>
                        <h2 class="font-">Get that 11 line in 30 days</h2>
                        <a class="text-white inline-flex items-center ml-4 opacity-50">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='mx- flex items-center justify-between text-white '>
                    <div className={`${styles.cardImg} ${' bg-bla w-24 h-24 flex justify-center items-center'}`}>
                        <Image src='/img/dancer-balance-posture-on-one-leg.png' width={50} height={50} />
                    </div>
                    <div className=''>
                        <h2 class="font-">14 Days sherd challenge</h2>
                        <a class="text-white inline-flex items-center ml-4 opacity-50">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='mx- flex items-center justify-between text-white '>
                    <div className={`${styles.cardImg} ${' bg-bla w-24 h-24 flex justify-center items-center'}`}>
                        <Image src='/img/dancer-motion.png' width={50} height={50} />
                    </div>
                    <div className=''>
                        <h2 class="font-">Get flat belly in 30 days</h2>
                        <a class="text-white inline-flex items-center ml-4 opacity-50">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Healthy;
