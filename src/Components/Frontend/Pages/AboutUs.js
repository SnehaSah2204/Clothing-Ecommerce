import React from 'react'
import Nav from '../Components/Nav'
import '../../Styles/signup.css'
import Pictures from '../Components/Pictures'
import Footer from '../Components/Footer'
export default function AboutUs() {
  const img3="https://images.unsplash.com/photo-1527174744973-fc9ce02c141d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxhZ2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";
  return (
    <div>
      <Nav />

      <div className='container row signupBox'>
          <div className='col-md-6 col-sm-12'>
            <h2 className='signUpHeading'>Wear the Fashion!</h2>
            <p className='joinUsText'>The French word mode, meaning "fashion".Fashion is defined in a number of different ways, and its application can be sometimes unclear. Though the term fashion connotes difference, as in "the new fashions of the season", it can also connote sameness, for example in reference to "the fashions of the 1960s", implying a general uniformity.</p>
            <p className='joinUsText'>Dates as far back as 1482, while the English  century Old French the concept of elegance begins to appear in the context of aristocratic preferences to enhance beauty and display refinement, and cointerie, the idea of making oneself more attractive to others by style or artifice in grooming and dress, appears in a 13th-century poem by Guillaume de Lorris advising men that "handsome clothes and handsome accessories improve a man a great deal".Fashion scholar Susan B</p>
            <p className='joinUsText'>1482, while the English  century Old French the concept of elegance begins to appear in the context of aristocratic preferences to enhance beauty and display refinement, and cointerie, the idea of making oneself more attractive to others by  </p>
          </div>

          <div className='col-md-6 col-sm-12'>
            <img className='AboutUsImg' alt='alternateImg' src='https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'></img>
          </div>
      </div>

      <Pictures img={img3}/>
      <Footer />
    </div>
  )
}
