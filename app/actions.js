"use server"

// This file previously contained email sending functionality
// All email functionality has been removed as requested

export async function logContactAttempt(data) {
  // Simple logging function that doesn't send emails
  console.log("Contact attempt logged:", data)

  // Return success response
  return {
    success: true,
    message: "Your information has been received.",
  }
}
