
import Component from '../Component.js';

class CardItem extends Component {
    renderHTML() {
        const card = this.props.card;

        return /*html*/ `    <li class='card'>
        <div class='animal-image'><img src="${card.url}" alt="${card.title}" title="${card.description}"></div>
        <div class='animal-title'>${card.title}</div>
        <div class='horns'>${card.horns} Horn(s)</div>
        <div class='animal-description'><p>${card.description}</p></div>
    </li>`;
    }
}

export default CardItem;