import "./NewPosts.css"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import berekenLeestijd from "../../constants/ReadTime/ReadTime.jsx";
import { useNavigate } from "react-router-dom";



function NewPosts() {
    const { register, formState: { errors }, handleSubmit } = useForm();
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
                {errors.title && <p>{errors.title.message}</p>}
                <input
                    placeholder="Titel"
                    type="text"
                    id="title-field"
                    {...register("title", {
                        required: {
                            value: true,
                            message: "dit veld is verplicht",
                        },
                    })}
                />
            </label>

            <label htmlFor="subtitle-field">
                {errors.subtitle && <p>{errors.subtitle.message}</p>}
                <input
                    placeholder="Subtitel"
                    type="text"
                    id="subtitle-field"
                    {...register("subtitle", {
                        required: {
                            value: true,
                            message: "dit veld is verplicht",
                        },
                    })}
                />
            </label>

            <label htmlFor="author-field">
                {errors.author && <p>{errors.author.message}</p>}
                <input
                    placeholder="Auteur"
                    type="text"
                    id="author-field"
                    {...register("author", {
                        required: {
                            value: true,
                            message: "dit veld is verplicht",
                        },
                    })}
                />
            </label>

            <label htmlFor="message-field">
                {errors["message-content"] && <p>{errors["message-content"].message}</p>}
                <textarea
                    id="message-field"
                    rows="4"
                    cols="40"
                    placeholder="Schrijf hier je blog"
                    {...register("message-content", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        },
                        minLength: {
                            value: 300,
                            message:"Input moet minimaal 300 karakters bevatten",
                        },
                        maxLength: {
                            value: 20000,
                            message: "Input mag maximaal 20000 karakters bevatten"
                        }
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