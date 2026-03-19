import Markdown from "react-markdown"

export default function GeminiRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h1>Chef Gemini Recommends:</h1>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}
