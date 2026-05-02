import React from 'react'
import HighlightText from '../Components/core/HomePage/HighlightText';
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../Components/core/AboutPage/Quote"
import StatsComponent from '../Components/core/AboutPage/Stats'
import LearningGrid from '../Components/core/AboutPage/LearningGrid'
import ContactFormSection from '../Components/core/AboutPage/ContactFormSection'
import RatingSlider from '../Components/core/Ratings/RatingSlider';

const About = () => {
  return (
    <div className='mx-auto text-white'>

      {/* section 1 */}
      <section className='bg-richblack-700'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white'>
          <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
          </header>
          <div className='sm:h-[70px] lg:h-[150px]'></div>
          <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5'>
            <img src={BannerImage1} />
            <img src={BannerImage2} />
            <img src={BannerImage3} />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className='border-b border-richblack-700'>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
          <div className='h-[100px] '></div>
          <Quote />
        </div>
      </section>

      {/* section 3 */}
      <StatsComponent />

      {/* section 4 */}
      <section className='mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[140px]'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* section 5 */}
      <section>
        <div className=' mb-16 mt-3 w-screen'>
          <h2 className='text-center text-4xl font-semibold mt-8 text-richblack-5 mb-5'>Reviews from other learners</h2>
          <RatingSlider />
        </div>
      </section>

    </div>
  )
}

export default About
