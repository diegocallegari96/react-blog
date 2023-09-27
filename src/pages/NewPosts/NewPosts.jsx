import "./NewPosts.css"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';


function NewPosts() {
    const { register, handleSubmit } = useForm();
    const [timestamp, setTimestamp] = React.useState('');

    function handleFormSubmit(data) {
        const definitiveData = {...data};
        definitiveData.shares = 0;
        data.shares = definitiveData.shares;
        definitiveData.comments = 0;
        data.comments = definitiveData.shares;
        definitiveData.created = timestamp;
        data.created = definitiveData.created
        console.log(data)
    }

    function handleButtonClick() {
        setTimestamp(new Date().toISOString());
    }


    return(
        <form className="form-blog" onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="title-field">
                Titel:
                <input
                    type="text"
                    id="title-field"
                    {...register("title", {
                        required: true,
                    })}
                />
            </label>

            <label htmlFor="subtitle-field">
                Subtitel:
                <input
                    type="text"
                    id="subtitle-field"
                    {...register("subtitle", {
                        required: true,
                    })}
                />
            </label>

            <label htmlFor="author-field">
                Auteur:
                <input
                    type="text"
                    id="author-field"
                    {...register("author", {
                        required: true,
                    })}
                />
            </label>

            <label htmlFor="message-field">
                Blogpost:
                <textarea
                    id="message-field"
                    rows="4"
                    cols="40"
                    placeholder="Schrijf hier je blog"
                    {...register("message-content", {
                        required: true,
                        minLength: 300,
                        maxLength: 2000,
                    })}
                ></textarea>
            </label>

            <button type="submit"
                    id="form-button"
                    onClick={handleButtonClick}
            >
                Plaatsen
            </button>
        </form>
    )
}

export default NewPosts;