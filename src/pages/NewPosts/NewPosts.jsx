import "./NewPosts.css"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import berekenLeestijd from "../../constants/ReadTime/ReadTime.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function NewPosts() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [timestamp, setTimestamp] = useState('');
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        const timestamp = new Date().toISOString();
        navigate("/blogposts");
        const definitiveData = { ...data };
        definitiveData.shares = 0;
        definitiveData.comments = 0;
        definitiveData.created = timestamp;
        definitiveData.readTime = berekenLeestijd(data["content"]);
        // setTimestamp(new Date().toISOString());
        console.log(timestamp)

        try {
            const response = await axios.post('http://localhost:3000/posts', definitiveData);
            console.log('Data succesvol verzonden naar de server:', response.data);
        } catch (error) {
            console.error('Fout bij het verzenden van de data naar de server:', error);
        }
    }


    return(
        <form className="form-blog"
              onSubmit={handleSubmit(handleFormSubmit)}

        >
            <label htmlFor="title-field">
                {errors.title && <p>{errors.title.message}</p>}
                <input
                    placeholder="Titel"
                    name="title"
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
                    name="subtitle"
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
                    name="author"
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
                {errors["content"] && <p>{errors["content"].message}</p>}
                <textarea
                    id="message-field"
                    name="content"
                    rows="4"
                    cols="40"
                    placeholder="Schrijf hier je blog"
                    {...register("content", {
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
            >
                Plaatsen
            </button>
        </form>
    )
}

export default NewPosts;