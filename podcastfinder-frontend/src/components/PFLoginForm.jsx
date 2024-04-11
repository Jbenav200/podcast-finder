import { Form, Button, Input, Checkbox } from 'antd';
import react, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const PFSignUpForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios.post('http://localhost:8000/api/login', {
      'username': username,
      'password': password
    })
    .then(response => {
      let newPath = '/sign-up';
      useNavigate(newPath, {state: {signedIn: true}})
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

          onSubmitCapture={sendRequest}
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
                <Input onChange={e = setUsername(e.target.value) }/>
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
              <Button type="submit" className='btn-green' onClick={handleSubmit}>Log in</Button>
            </Form.Item>
        </Form>
    )
}

export default PFSignUpForm;