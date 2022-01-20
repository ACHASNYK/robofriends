import React from "react";
import "./Create.css"

const Create = () => {
    return (
        <div className="Create">
            <h2>Create a New Dmy LeBot</h2>
            <form>
                <label>Уведіть Імя Бота                 
                </label>
                <input
                    type="text"
                    required
                />
                <label>Уведіть Хваміліє Бота                 
                </label>
                <input
                    type="text"
                    required
                />
                <label>Уведіть Лозунг Бота                 
                </label>
                <input
                    type="text"
                    required
                />
                <button>Створити Нового Dmy LeBota!</button>
            </form>

        </div>
    )
}

export default Create;