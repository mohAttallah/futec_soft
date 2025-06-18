export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateLoginForm = (username: string, password: string): ValidationResult => {
  const errors: string[] = [];

  if (!username.trim()) {
    errors.push('username is required');
  } else if (username.trim().length < 3) {
    errors.push('username must be at least 3 characters long');
  }

  if (!password.trim()) {
    errors.push('password is required');
  } else if (password.length < 3) {
    errors.push('password must be at least 3 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};



