// import { Component, createContext } from 'react';

// export class LoginForm extends Component {
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;
//     console.log(this.props);

//     this.props.onSubmit({ login, password });
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="login" />
//         <input type="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }
// export class SignUpForm extends Component {
//   state = {
//     login: '',
//   };

//   // Відповідає за оновлення стану
//   handleChange = e => {
//     this.setState({ login: e.target.value });
//   };

//   // Викликається під час відправлення форми
//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(`Signed up as: ${this.state.login}`);

//     // Проп, який передається формі для виклику під час сабміту
//     this.props.onSubmit({ ...this.state });
//   };

//   render() {
//     const { login } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

// export class SignUpForm extends Component {
//   state = { ...INITIAL_STATE };

//   // Для всіх інпутів створюємо один обробник
//   // Розрізняти інпути будемо за атрибутом name
//   handleChange = evt => {
//     console.log(evt.target);
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { login, email, password } = this.state;
//     console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
//   agreed: false,
// };

// export class SignUpForm extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = evt => {
//     const { name, value, type, checked } = evt.target;
//     // Якщо тип елемента – checkbox, беремо значення checked,
//     // в іншому випадку – value
//     this.setState({ [name]: type === 'checkbox' ? checked : value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { login, email, password, agreed } = this.state;
//     console.log(
//       `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
//     );

//     /* ... */
//   };

//   render() {
//     const { login, email, password, agreed } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* ... */}
//         <label>
//           Agree to terms
//           <input
//             type="checkbox"
//             checked={agreed}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }
