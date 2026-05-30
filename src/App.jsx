import React from 'react'
import SignupForm from './components/SignupForm'
import BgPattern from './components/BgPattern'
import styles from './App.module.css'

const App = () => (
  <div className={styles.page}>
    {/* Coral background with icon pattern */}
    <div className={styles.bgOverlay}>
      <BgPattern />
    </div>

    {/* Left: headline copy */}
    <div className={styles.leftCol}>
      <h1 className={styles.headline}>
        Learn to code by<br />watching others
      </h1>
      <p className={styles.subtext}>
        See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how
        developers think is invaluable.
      </p>
    </div>

    {/* Right: signup card */}
    <div className={styles.rightCol}>
      <SignupForm />
    </div>
  </div>
)

export default App