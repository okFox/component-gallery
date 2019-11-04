 
import Component from './Component.js';
import Header from './home/Header.js';
import CardList from './home/cardList.js';
import images from './data/images.js'; 




class App extends Component {
    //now App has access to Components' methods

    renderHTML() {
        return `
        <div>
            <!-- Header goes here -->
    

                <section class="animal-list">
                    <!-- ImageList goes here -->
                </section>

        </div>
    `;}

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const cardList = new CardList({ images: images });
        const cardListDOM = cardList.renderDOM();

        const listSection = dom.querySelector('.animal-list');
        listSection.appendChild(cardListDOM);

    // const filterImage = new filterImage({
    //     image:image,
    //     onFilter: 
    // });

    }




}
export default App;