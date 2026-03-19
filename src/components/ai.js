import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export async function getMain(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    console.log("Ingredients are :",ingredientsString)

    
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
       contents: 
       `I have ${ingredientsString}.
       Please give me a recipe you'd recommend to make!
       The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
       Format your response in markdown to make it easier to render to a web page.
       Return only the recipe in markdown format.
       Do not include any introduction or explanation.
       Start directly with the title.`,
    });

    return (response.text);

}
