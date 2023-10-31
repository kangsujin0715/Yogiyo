import useInput from 'src/hooks/useInput';

const Login = () => {
  const [inputs, onInputChange] = useInput(
    {
      id: '',
      password: '',
    },
    (value, name) => {
      if (name === 'id') return value.length < 21;

      return value.length < 13;
    },
  );

  return (
    <div>
      LoginPage
      <input
        type="text"
        name="id"
        value={inputs.id}
        autoComplete="off"
        required
        onChange={onInputChange}
      />
      <input
        type="text"
        name="password"
        value={inputs.password}
        autoComplete="off"
        required
        onChange={onInputChange}
      />
      <button onClick={() => alert(JSON.stringify(inputs))}>입력</button>
    </div>
  );
};

export default Login;
