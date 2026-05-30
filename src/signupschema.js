import { z } from 'zod'

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name cannot be empty'),
  lastName: z
    .string()
    .min(1, 'Last Name cannot be empty'),
  email: z
    .string()
    .min(1, 'Enter a valid email address')
    .email('Enter a valid email address'),
  password: z
    .string()
    .min(6, 'Password selected too short'),
})