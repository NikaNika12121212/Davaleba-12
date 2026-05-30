import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema } from '../signupschema'
import styles from '../App.module.css'

const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  if (submitted) {
    return (
      <div className={styles.successBox}>
        <div style={{ fontSize: '48px' }}>✓</div>
        <p>Success! Welcome aboard!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.banner}>
        <strong>Try it free</strong>
        <div className={styles.bannerSub}>7 days, then $20/mo. Cancel anytime.</div>
      </div>

      <div className={styles.fields}>
        <div className={`${styles.wrapper} ${errors.firstName ? styles.hasError : ''}`}>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
              {...register('firstName')}
            />
          </div>
          {errors.firstName && (
            <span style={{ color: '#e74c3c', fontSize: '11px', marginTop: '4px' }}>
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className={`${styles.wrapper} ${errors.lastName ? styles.hasError : ''}`}>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
              {...register('lastName')}
            />
          </div>
          {errors.lastName && (
            <span style={{ color: '#e74c3c', fontSize: '11px', marginTop: '4px' }}>
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className={`${styles.wrapper} ${errors.email ? styles.hasError : ''}`}>
          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              {...register('email')}
            />
          </div>
          {errors.email && (
            <span style={{ color: '#e74c3c', fontSize: '11px', marginTop: '4px' }}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={`${styles.wrapper} ${errors.password ? styles.hasError : ''}`}>
          <div className={styles.inputRow}>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              {...register('password')}
            />
          </div>
          {errors.password && (
            <span style={{ color: '#e74c3c', fontSize: '11px', marginTop: '4px' }}>
              {errors.password.message}
            </span>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Claim your free trial
        </button>
      </div>

      <div className={styles.terms}>
        By clicking the button, you are agreeing to our{' '}
        <a href="#" className={styles.termsLink}>
          Terms and Services
        </a>
      </div>
    </form>
  )
}

export default SignupForm
