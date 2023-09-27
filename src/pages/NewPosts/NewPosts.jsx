import "./NewPosts.css"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import berekenLeestijd from "../../constants/ReadTime/ReadTime.jsx";
import { useNavigate } from "react-router-dom";



function NewPosts() {
    const { register, handleSubmit } = useForm();
    const [timestamp, setTimestamp] = React.useState('');
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        navigate("/blogposts");
        const definitiveData = {...data};
        definitiveData.shares = 0;
        data.shares = definitiveData.shares;
        definitiveData.comments = 0;
        data.comments = definitiveData.shares;
        definitiveData.created = timestamp;
        data.created = definitiveData.created
        definitiveData.readTime = berekenLeestijd(data["message-content"]);
        data.readTime = definitiveData.readTime;
        console.log(data)
    }

    function handleButtonClick() {
        setTimestamp(new Date().toISOString());
    }


    return(
        <form className="form-blog"
              onSubmit={handleSubmit(handleFormSubmit)}

        >
            <label htmlFor="title-field">
                <input
                    placeholder="Titel"
                    type="text"
                    id="title-field"
                    {...register("title", {
                        required: true,
                    })}
                />
            </label>

            <label htmlFor="subtitle-field">
                <input
                    placeholder="Subtitel"
                    type="text"
                    id="subtitle-field"
                    {...register("subtitle", {
                        required: true,
                    })}
                />
            </label>

            <label htmlFor="author-field">
                <input
                    placeholder="Auteur"
                    type="text"
                    id="author-field"
                    {...register("author", {
                        required: true,
                    })}
                />
            </label>

            <label htmlFor="message-field">
                <textarea
                    id="message-field"
                    rows="4"
                    cols="40"
                    placeholder="Schrijf hier je blog"
                    {...register("message-content", {
                        required: true,
                        minLength: 300,
                        maxLength: 20000,
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