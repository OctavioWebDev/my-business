'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

// Field names (firstName, lastName, email, message) must match the EmailJS template.
const emptyForm = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
};

const styles = {
    page: {
        wrapper: 'p-3 rounded-lg bg-slate-900 bg-opacity-75 mb-8',
        input: 'w-full p-2 bg-slate-800 border border-gray-700 rounded',
        button: 'bg-yellow-700 font-eurostile hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded',
    },
    footer: {
        wrapper: 'p-3 rounded-lg',
        input: 'w-full p-2 bg-slate-900 opacity-50 border-black rounded',
        button: 'bg-slate-900 font-eurostile hover:bg-slate-700 text-white font-bold py-2 px-4 rounded',
    },
};

interface ContactFormProps {
    title?: string;
    variant?: keyof typeof styles;
}

export default function ContactForm({ title = 'Contact Us', variant = 'footer' }: ContactFormProps) {
    const formRef = useRef<HTMLFormElement | null>(null);
    const style = styles[variant];

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init("gXzVIl4DI-2qHQmWy");
    }, []);

    const [formState, setFormState] = useState(emptyForm);

    const [submitStatus, setSubmitStatus] = useState({
        message: '',
        isError: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus({ message: '', isError: false });

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            event.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setSubmitStatus({ message: 'Your request has been sent successfully!', isError: false });
                setFormState(emptyForm);
                formRef.current?.reset();
            }, (error) => {
                console.log('Failed to send the email:', error.text);
                setSubmitStatus({ message: 'Failed to send request. Please try again.', isError: true });
            });
    };

    const fields = [
        { name: 'firstName', label: 'First Name:', placeholder: 'First Name', type: 'text' },
        { name: 'lastName', label: 'Last Name:', placeholder: 'Last Name', type: 'text' },
        { name: 'email', label: 'Email:', placeholder: 'Email', type: 'email' },
    ] as const;

    return (
        <div className={style.wrapper}>
            <h2 className="font-eurostile text-yellow-700 text-2xl mb-4">{title}</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div className="mb-4" key={field.name}>
                        <label htmlFor={`${variant}-${field.name}`} className="block font-eurostile text-white mb-2">{field.label}</label>
                        <input
                            type={field.type}
                            id={`${variant}-${field.name}`}
                            name={field.name}
                            className={style.input}
                            value={formState[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required
                        />
                    </div>
                ))}
                <div className="mb-4">
                    <label htmlFor={`${variant}-message`} className="block font-eurostile text-white mb-2">Message:</label>
                    <textarea
                        id={`${variant}-message`}
                        name="message"
                        className={style.input}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder='Your Message'
                        required
                    />
                </div>
                <button type="submit" className={style.button}>
                    Send
                </button>
            </form>

            {submitStatus.message && (
                <p className={`mt-4 text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
                    {submitStatus.message}
                </p>
            )}
        </div>
    );
}
