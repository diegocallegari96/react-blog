import "./NewPosts.css"


function NewPosts() {
    return(
        <form>
            <label htmlFor="title-field">
                Titel:
                <input
                    type="text"
                    name="title"
                    id="title-field"
                />
            </label>

            <label htmlFor="subtitle-field">
                Subtitel:
                <input
                    type="text"
                    name="subtitle"
                    id="subtitle-field"
                />
            </label>

            <label htmlFor="author-field">
                Auteur:
                <input
                    type="text"
                    name="author"
                    id="author-field"
                />
            </label>

            <label htmlFor="message-field">
                Blogpost:
                <textarea
                    id="message-field"
                    rows="4"
                    cols="40"
                    placeholder="Schrijf hier je blog"
                    name="message-content"
                ></textarea>
            </label>

            <button type="submit">
                Plaatsen
            </button>
        </form>
    )
}

export default NewPosts;