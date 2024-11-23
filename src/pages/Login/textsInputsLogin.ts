import { LoginInputs } from '../../models/Inputs/FormType';


export const textsInputsLogin:  LoginInputs  = {

    email: {
      title: 'Email',
      label: 'Email',
      id: 'email',
      type: 'text',
      size: 'medium',
      name: 'email',
      placeholder: 'example@gmail.com',
      helperText: 'Veuillez entrer votre email',
      afterFocus: 'Veuillez entrer votre adresse email',
      required: true,
    },
    password: {
      title: 'Password',
      label: 'Password',
      id: 'password',
      type: 'password',
      size: 'medium',
      name: 'password',
      placeholder: 'P@ssword123',
      helperText: 'Veuillez entrer votre mot de passe',
      afterFocus: 'Minimum 8 characters, including at least 1 symbol, 1 number, and 1 uppercase letter',
      required: true,
    },
  
  
};
