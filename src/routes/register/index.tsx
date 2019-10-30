import React, { useReducer, useCallback, memo } from 'react';

import styles from './register.module.scss';
import { connect } from 'Utils/connect';
import { RegisterArgs } from 'Stores/user';
import { Button } from 'Components/button';
import { RouteComponentProps } from '@reach/router';

type RegisterProps = RouteComponentProps & {
  register: (user: RegisterArgs) => void;
};

const Field = memo(
  ({
    name,
    value,
    label,
    onChange,
    type = 'text',
    autoComplete = 'on',
  }: {
    name: string;
    label: string;
    value: any;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    type?: string;
    autoComplete?: string;
  }) => {
    return (
      <div className={styles.field}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          data-testid={name}
          autoComplete={autoComplete}
        />
      </div>
    );
  },
);

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

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      register(state);
    },
    [register, state],
  );

  const update = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ [name]: value });
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={submit}>
        <Field name="firstName" label="First Name" value={state.firstName} onChange={update} />
        <Field name="lastName" label="Last Name" value={state.lastName} onChange={update} />
        <Field name="email" label="Email" value={state.email} onChange={update} />
        <Field
          name="password"
          label="Password"
          value={state.password}
          onChange={update}
          type="password"
          autoComplete="new-password"
        />
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
