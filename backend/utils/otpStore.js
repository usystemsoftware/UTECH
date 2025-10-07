const otpStore = new Map();

export function setOtp(email, otp) {
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
  otpStore.set(email, { otp, expiresAt });
}

export function getOtp(email) {
  return otpStore.get(email);
}

export function deleteOtp(email) {
  otpStore.delete(email);
}
