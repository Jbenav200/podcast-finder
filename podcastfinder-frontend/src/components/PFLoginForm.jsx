import { Form, Button, Input, Checkbox } from 'antd';
import react, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const PFSignUpForm = (props, {setUserToken}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserTokenLogin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios.post('http://localhost:8000/api/login', {
      'username': username,
      'password': password
    })
    .then(response => {
      setUserTokenLogin(response.data.token);
      props.setUserToken(response.data.token);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      let newPath = '/search';
      navigate(newPath, {state: {signedIn: true}});
    }).catch(error => {
      console.log(error);
    });
  }

    return(
        <Form
        labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
        >
            <Form.Item
            label="username"
            name="username"
            rules={[
                {
                    required:true,
                    message: 'Please enter your username'
                }
            ]}
            >
                <Input onChange={e => setUsername(e.target.value) }/>
            </Form.Item>
            <Form.Item
            label="password"
            name="password"
            rules={[{
              required:true,
              message: 'Please enter your password'
            }]}
            >
              <Input type="password" onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item>
              <Button type="submit" className='btn-grey' onClick={handleSubmit}>Log in</Button>
            </Form.Item>
        </Form>
    )
}

export default PFSignUpForm;