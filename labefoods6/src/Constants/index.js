export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"


export const validateEmail = (email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email))
export const validatePassword = (password => /.{6,}/.test(password))
export const validateCPF = (cpf => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf))
export const validateName = (name => /.{2,}/.test(name))
