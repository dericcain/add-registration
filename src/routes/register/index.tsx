import React, { useReducer } from 'react';

import styles from './register.module.scss';
import { connect } from 'Utils/connect';
import { RegisterArgs } from 'Stores/user';
import { Button } from 'Components/button';
import { RouteComponentProps } from '@reach/router';

type RegisterProps = RouteComponentProps & {
  register: (user: RegisterArgs) => void;
};

function Field({
  name,
  state,
  label,
  onChange,
  type = 'text',
}: {
  name: string;
  label: string;
  state: any;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={state[name]}
        onChange={onChange}
        id={name}
        name={name}
        data-testid={name}
      />
    </div>
  );
}

function Register({ register }: RegisterProps) {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [state, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    initialState,
  );

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    register(state);
  }

  function update(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setState({ [name]: value });
  }

  return (
    <div>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={submit}>
        <Field name="firstName" label="First Name" state={state} onChange={update} />
        <Field name="lastName" label="Last Name" state={state} onChange={update} />
        <Field name="email" label="Email" state={state} onChange={update} />
        <Field name="password" label="Password" state={state} onChange={update} type="password" />
        <Button onClick={submit} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default connect(({ store }) => ({
  register: store.userStore.register,
}))(Register);
