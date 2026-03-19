
# 🍳 Chef Gemini (AI Recipe Generator) 🍲

This is a simple React application that turns your list of ingredients into a complete recipe using the Gemini API.

## 🚀 Overview

In this app, users can:

1. Enter ingredients one by one.
2. Build a list of items they have available.
3. Send the list to the Gemini API.
4. Receive a generated recipe based on those ingredients.
5. View the recipe directly in the UI.

It’s a fun and practical way to decide what to cook with what you already have!

---

## Live Link

https://chef-gemini-379n.vercel.app/

---

## Demo

<img width="1914" height="1053" alt="Image" src="https://github.com/user-attachments/assets/6b01f62d-cca9-4502-9b3c-8e12c8c6933b" />

<img width="948" height="990" alt="Image" src="https://github.com/user-attachments/assets/7c6b3756-1b60-4874-8936-1eee68adcf51" />

---

## 🧩 Features

* ✅ Add ingredients dynamically
* ✅ Display a growing list of user inputs
* ✅ Send data to Gemini API
* ✅ Generate AI-based recipes
* ✅ Clean and responsive UI
* ✅ Display formatted recipe results

---

## 🛠️ Tech Stack

* **React** – Frontend framework
* **JavaScript (ES6+)**
* **CSS** – Styling
* **Gemini API** – Recipe generation

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/DeepakSingh9999/Chef-Gemini.git
```

2. Navigate into the project directory:

```bash
cd ai-recipe-generator
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your Gemini API key:

```env
VITE_API_KEY=your_api_key_here
```

---

## ⚙️ How It Works

1. The user types an ingredient into an input field.
2. The ingredient is added to a list stored in state.
3. Once ready, the user submits the list.
4. The app sends the list to the Gemini API.
5. The API responds with a generated recipe.
6. The recipe is displayed to the user.

---

## 📁 Project Structure

```
src/
│── components/
│   ├── IngredientInput.js
│   ├── IngredientList.js
│   ├── RecipeDisplay.js
│
│── App.js
│── index.js
│── styles.css
```

---

## 💡 Future Improvements

* Add loading indicators while fetching recipe
* Allow editing/removing ingredients
* Save favorite recipes
* Add dietary filters (vegan, keto, etc.)
* Improve recipe formatting

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open source and available under the MIT License.

---

Happy Cooking! 🍲
