//image list component


import Component from '../Component.js';
import CardItem from './cardItem.js';

class CardList extends Component {

    renderHTML() {
        return /*html*/`
            <ul class='animal-list'></ul>
        `;
    }

    onRender(dom) {
        const cards = this.props.cards;

        cards.forEach(card => {
            const props = { card: card };
            const cardItem = new CardItem(props);
            const cardItemDOM = cardItem.renderDOM();
            dom.appendChild(cardItemDOM);
        });
    }
}

export default CardList;