import sttore from 'sttore'

export const initial = {
    pageState: 'LOADING'
}


export const state_form = sttore({
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    occupation:'',
    genre:'Hombre'
})