import { motion } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'
import Reveal from '../Reveal/Reveal'
import './contact.css'

const Contact = () => {
    const [form, setForm] = useState({ email: '', name: '', message: '' });
    const formRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    };

    const checkEmail = (string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validation = re.test(string);
        const emailField = formRef.current.elements['email'];
        const emailSpan = document.getElementById('email-span');

        if (validation === false || !string) {
            emailField.style.outlineColor = 'red'
            emailSpan.style.color = 'red';

            setTimeout(() => {
                emailField.style.outlineColor = ''
                emailSpan.style.color = '';
            }, 5000);

        }
        return validation;
    };

    const checkName = (string) => {
        const nameField = formRef.current.elements['name'];
        console.log(nameField)
        if (string.length < 3) {
            nameField.style.outlineColor = 'red';
            setTimeout(() => {
                nameField.style.outlineColor = ''
            }, 5000);
            return false;
        }
        return true;
    };

    const checkMessage = (string) => {
        const messageField = formRef.current.elements['message'];
        if (string.length < 10 || !string) {
            messageField.style.outlineColor = 'red';
            setTimeout(() => {
                messageField.style.outlineColor = ''
            }, 5000);
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = checkEmail(form.email);
        const isNameValid = checkName(form.name);
        const isMessageValid = checkMessage(form.message);
        if (isEmailValid && isNameValid && isMessageValid) {
            formDiv.submit();
            setForm({
                email: '',
                name: '',
                message: '',
            });
        }
    };

    useEffect(() => {
        const messageSpan = document.getElementById('message-span');
        const nameSpan = document.getElementById('name-span');
        if (form.name.length >= 3) {
            nameSpan.style.color = 'green';
            setTimeout(() => {
                nameSpan.style.display = 'none'
            }, 1000)
        } else {
            nameSpan.style.display = 'block'
            nameSpan.style.color = '';
        }

        if (form.message.length >= 10) {
            messageSpan.style.color = 'green';
            setTimeout(() => {
                messageSpan.style.display = 'none'
            }, 1000)
        } else {
            messageSpan.style.display = 'block'
            messageSpan.style.color = '';
        }
    }, [form.message, form.name])


    return (
        <Reveal>

        
        <motion.div layout id='contact'>

            <motion.h3>You can connect with me here</motion.h3>
            <motion.svg width='100' height='100'>
                <line id='middle-line' x1='50' y1='53' x2='50' fill='none' stroke='green' strokeWidth='3' />
                <line id='left-line' x1='50' y1='55' x2='25' y2='25' fill='none' stroke='white' strokeWidth='3' />
                <line id='right-line' x1='50' y1='55' x2='75' y2='25' fill='none' stroke='red' strokeWidth='3' />

            </motion.svg>
            <motion.form layout id='contact-form' action='https://getform.io/f/blljxeqb' method='POST' ref={formRef}>

                <motion.input layout placeholder='Email' type='email' name='email' required value={form.email} onChange={handleInputChange} />
                <span id='email-span'>Should be a valid email</span>
                <motion.input placeholder='Name' type='name' name='name' required minLength='3' value={form.name} onChange={handleInputChange} />
                <span id='name-span'>Minimal length: {form.name.length} / 3</span>
                <motion.textarea placeholder='Message' rows="5" id='message' name='message' required minLength='10' value={form.message} onChange={handleInputChange} />
                <span id='message-span'>Minimal length: {form.message.length} / 10</span>
                <motion.button type='submit'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={handleSubmit}
                >Submit </motion.button>
            </motion.form>
        </motion.div>
</Reveal>

    )
}

export default Contact;