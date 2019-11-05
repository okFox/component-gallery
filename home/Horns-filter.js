import Component from '../Component.js';

class HornsFilter extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;
        select.addEventListener('change', () => {
            onFilter(select.value);

        });
    }

    renderHTML() {
        return /*html*/`
            <select class="horns-number-filter">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
            </select>
        `;
    }
}

export default HornsFilter;
