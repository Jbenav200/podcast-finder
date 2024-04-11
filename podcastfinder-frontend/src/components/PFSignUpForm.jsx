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
        </Form>
    )
}

export default PFSignUpForm;