import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Deck } from '../Deck/Deck';
import { UserBoard } from '../UserBoard/UserBoard';
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import { useSelector } from 'react-redux';


export const GameZone = (props) => {
    const navigate = useNavigate();
    const [gameId, setGameId] = useState(0);
    //Current user selected card and other user selected card
    const selectedcard1 = useSelector(state=>state.gameReducer.selected_card_u1)
    const selectedcard2 = useSelector(state=>state.gameReducer.selected_card_u2)

    //----recuperer via requete / listen socket----
    const [user2, setUser2] = useState({ userid: 2, card_list: [{ name: "gg" }], action_pts: 1000, isCurrentUser:false });
    const [user1, setuser1] = useState({ userid: 1, card_list: [{ name: "jj" }], action_pts: 1000, isCurrentUser:true });

    //User1 et User2 sont les joueurs, User est celui qui s'est login

    //attackbutton
    function handleAttackButton(coucou){

        console.log(coucou);
        let attaquantId = user1.userid;
        let victimeId = user2.useridid;
        let attaquantCard = selectedcard1;
        let victimeCard = selectedcard2;

        if (user1.isCurrentUser){     //donc user1 est l'attaquant
            attaquantId = user1.userid;
            victimeId = user2.userid;
            attaquantCard = selectedcard1;
            victimeCard = selectedcard2;
            //todo requete
        }
        else{                         //donc user2 est l'attaquant
            attaquantId = user2.userid;
            victimeId = user1.userid;
            attaquantCard = selectedcard2;
            victimeCard = selectedcard1;
            //todo requete
        }
        console.log("attaque faite de : "+attaquantId + " avec la carte : "+attaquantCard);

        
        
        //Verifier le current user pour savoir qui commence
        // selectedcard1;
        // selectedcard2;
         //toto recup data et envoyer requete au back 
    }

    //EndTurn button
    function handleEndTurnButton(){
        //todo requete pour changer isCurrentUser
    }

    return (
        <div className="ui grid">
            <div className="row">
                <PlayerBoard user={user2} selectedCard={selectedcard2} />
            </div>

            <div className='row'>
                <button onClick={() => handleEndTurnButton()}> End turn </button>
                <button onClick={() => handleAttackButton()}> Attack </button>
            </div>

            <div className="row">
                <PlayerBoard user={user1} selectedCard={selectedcard1} />
            </div>
        </div>

    );

}