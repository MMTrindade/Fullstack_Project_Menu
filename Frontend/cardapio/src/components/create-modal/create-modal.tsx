import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void,
}

interface ModalProps {
    closeModal(): void
}


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

// Every time the value from a variable changes, useState renders again the HTML tags because it knows that the value of the variable just changed.
export function CreateModal({closeModal}: ModalProps){
    const [title, setTitle] = useState ("");
    const [price, setPrice] = useState (0);
    const [image, setImage] = useState ("");
    const { mutate, isSuccess, isPending } = useFoodDataMutate();
    // isSuccess is true every time the post is concluded successfully

    const submit = () => {
        const foodData: FoodData = {
            title,
            price, 
            image
        }
        mutate(foodData)
    }

    //useEffect gera um efeito colateral de acordo com o array de dependencias. Quando o valor das variaveis no array de dependencias mudar, ela chama a funcao de callback para ser executada.
    useEffect( () => {
        if(!isSuccess) return 
        closeModal();
        
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label = "title" value={title} updateValue= {setTitle}/>
                    <Input label = "price" value={price} updateValue= {setPrice}/>
                    <Input label = "image" value={image} updateValue= {setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                {isPending ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}