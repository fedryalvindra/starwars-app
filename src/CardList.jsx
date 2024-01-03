// CardList.js
import React from "react";
import Card from "./Card";
import Modal from "./Modal";

class CardList extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedStarWar: null,
            isModalOpen: false,
        };
    }

    cardClick = (starWar) => {
        this.setState({
            selectedStarWar: starWar,
            isModalOpen: true,
        });
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    }


    render() {
        const { starwars } = this.props;
        const { selectedStarWar, isModalOpen } = this.state;

        return (
            <div>
                {Array.isArray(starwars) ? (
                    starwars.map(starwar => (
                        <Card
                            name={starwar.name}
                            onClick={() => this.cardClick(starwar)}
                        />
                    ))
                ) : (
                    <p>Server is down</p>
                )}

                {isModalOpen && (
                    <Modal onClose={this.closeModal} onClick={this.modalClick}>
                        <h1>Name: {selectedStarWar.name}</h1>
                        <h1>Height: {selectedStarWar.height}cm</h1>
                        <h1>Weight: {selectedStarWar.mass}kg</h1>
                        <h1>Hair Color: {selectedStarWar.hair_color}</h1>
                        <h1>Skin Color: {selectedStarWar.skin_color}</h1>
                        <h1>Eye Color: {selectedStarWar.eye_color}</h1>
                    </Modal>
                )}
            </div>
        );
    }
}

export default CardList;
