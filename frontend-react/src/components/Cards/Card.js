import React, { Component } from 'react';
import {Label} from './containers/Label';
import {Visual} from './containers/Visual';
import {Visual} from './containers/Desciption';

export const Cards =(props) =>{
    const navigate = useNavigate();

    const [cards, setCards] = useState("");

    useEffect( ()=> {
        fetch('/cards')
            .then(response => response.json())
            .then((response) => {
                setCards(response)
                alert(response)
            })
            .catch(error => alert(error))
    }, [])


    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="carte_title">Carte : {props.name}</h3>
            </div>
            <div className="panel-body">
                <Label 
                    title={props.Cards.name} 
                    id={props.Cards.id} 
                />
                <Visual 
                    src={props.Cards.imgUrl} 
                />
            </div>
        </div>
    );

}