import { Form, Button, Input, Checkbox } from 'antd';
import react, {useState} from 'react';

const PFSignUpForm = () => {
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
                    message: 'Please choose a username'
                }
            ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="password"
            name="password"
            rules={[{
              required:true,
              message: 'Select a password'
            }]}
            >
              <Input type="password"/>
            </Form.Item>
            <Form.Item
            label="enter password again"
            name="password-2"
            rules={[{
              required:true,
              message: 'please re-enter your chosen password'
            }]}
            >
              <Input type="password"/>
            </Form.Item>
            <Form.Item
            label="email"
            name="email"
            rules={[{
              required: true,
              message: 'Please enter your email address'
            }]}
            >
              <Input type="email"/>
            </Form.Item>
            <Form.Item>
              <Button type="submit" className='btn-grey'>Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default PFSignUpForm;