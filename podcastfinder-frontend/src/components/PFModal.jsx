import {React, useState} from "react";
import { Modal, Button} from "antd";
import PFSignUpForm from "./PFSignUpForm";
import PFLoginForm from "./PFLoginForm";

const PFModal = (props, {getIsModalOpen, getUserToken}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [userToken, setUserToken] = useState("");

    const handleChange = (val) => {
        const {value} = val;
        setIsModalVisible(value)
        props.getIsModalOpen(value);
    }

    const setUserToken = (token) => {
        props.getUserToken(token);
    }

    if (props.title == 'Sign Up'){
        return(
            <Modal open={props.open} title={props.title} footer={[]} onCancel={() => {handleChange(false);}}>
                <PFSignUpForm />
            </Modal>
        )
    }else{
        return(
            <Modal open={props.open} title={props.title} footer={[
               
            ]} onCancel={() => {handleChange(false);}}>
                <PFLoginForm setUserToken={setUserToken}/>
            </Modal>
        )
    }
}

export default PFModal;