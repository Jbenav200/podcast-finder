import {React, useState} from "react";
import { Modal} from "antd";
import PFSignUpForm from "./PFSignUpForm";
import PFLoginForm from "./PFLoginForm";

const PFModal = (props, {getIsModalOpen}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = (val) => {
        const {value} = val;
        setIsModalVisible(value)
        props.getIsModalOpen(value);
    }
    if (props.title == 'Sign Up'){
        return(
            <Modal open={props.open} title={props.title} onOk={() => {handleChange(false);}} onCancel={() => {handleChange(false);}}>
                <PFSignUpForm />
            </Modal>
        )
    }else{
        return(
            <Modal open={props.open} title={props.title} onOk={() => {handleChange(false);}} onCancel={() => {handleChange(false);}}>
                <PFLoginForm/>
            </Modal>
        )
    }
}

export default PFModal;