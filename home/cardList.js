//image list component


import Component from '../Component.js';
import CardItem from './CardItem.js';

class CardList extends Component {



    onRender(dom) {
        const cards = this.props.images;
        cards.forEach(card => {
            const props = { card: card };
            const cardItem = new CardItem(props);
            const cardItemDOM = cardItem.renderDOM();
            dom.appendChild(cardItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class='animal-list'></ul>
        `;
    }
}

export default CardList;