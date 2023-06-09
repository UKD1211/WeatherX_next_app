import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherX - Your weather assistant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://www.azernews.az/media/2016/08/31/autumn.jpg" />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}

                  <img src='https://lh3.googleusercontent.com/-UAu_0KbEMuHuMlccGwZtAo-bdM3Uo5Zr3RdEJUnDZsABV6tDUDe0ttdk-mtawAV6OY=w300'></img>


                  {/* <Image src={https:www.thestatesman.com/wp-content/uploads/2021/01/modi.jpg}  className={styles.makeImageCircular} height={200} width={200} alt='IMG2'/> */}
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Narendra Modi</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">This app is amazing. I always check weather of different countries I travel to using WeatherX
                    and it never fails to disappoint me!</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">"Stay ahead of the storm with WeatherX - Your Ultimate Weather App!"
                  WeatherX is the ultimate weather app that will keep you up-to-date with the latest weather information and forecasts. With real-time data and advanced forecasting technology, you can trust WeatherX to provide accurate and reliable information about the weather conditions in your area.

                  The app is easy to use, and you can customize it to show you the information that matters most to you. Whether you're interested in the current temperature, the chance of precipitation, or the wind speed, WeatherX has you covered. You can even set up alerts for severe weather conditions, so you never have to worry about getting caught in a storm.</p>
                <a className="text-indigo-500 inline-flex items-center">Know More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
