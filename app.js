 
import Component from './Component.js';
import Header from './home/Header.js';
import CardList from './home/cardList.js';
import images from './data/images.js'; 
import HornsFilter from './home/Horns-filter.js';




class App extends Component {
    //now App has access to Components' methods

    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const cardList = new CardList({ images: images });
        const cardListDOM = cardList.renderDOM();
        
        const listSection = dom.querySelector('.animal-list');
        listSection.appendChild(cardListDOM);
        
        const hornsFilter = new HornsFilter({
            images: images, 
            onFilter: (horns) => {
                let filteredHorns = null; 
                filteredHorns = images.filter(image => {
                    return image.horns === horns;});
                if (horns === 0) {
                    filteredHorns = images;
                }
                console.log(filteredHorns);
                const updateProps = { images: filteredHorns };
                cardList.update(updateProps);
            }
        });
        console.log('filter horns', hornsFilter);
        const filterHornsDOM = hornsFilter.renderDOM();
        const optionsSection = dom.querySelector('.filter-section');
        optionsSection.appendChild(filterHornsDOM);
        
    }
    
    renderHTML() {
        return /*html*/`
            <div>
            <!-- Header goes here -->
    
                <section class="filter-section">
            <!-- filtering goes here -->
                </section>
                <section class="animal-list">
                    <!-- ImageList goes here -->
                </section>
            </div>
        `;
    }
}
export default App;