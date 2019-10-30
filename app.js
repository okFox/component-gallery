//top level component
// Build out basic tree of app, starting at top and working down. The App component should introduce the image list data, passing as a prop to ImageList.
// Initially, ImageList component can just show count of images so you know it is receiving the data via props

import images from './data/images.js';  
import Component from '../Component.js';

class App extends Component {
    //now App has access to Components' methods
    onRender(dom) {
        const header = new Header({
            title: '<h1>HOW MANY HORNS?</h1>'
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);


    const props = {
        image:image
    };

    const imageList = new ImageList(props);
    const imageListDOM = imageList.renderDOM();

    const listSection = dom.querySelector('animal-list');
    listSection.appendChild(imageListDOM);

    const filterImage = new filterImage({
        image:image,
        onFilter: 
    });











    renderHTML() {
        return `
        <div>
            <!-- Header goes here -->
    
            <main>
                <section class="options-section">
                    <!-- FilterImages goes here -->
                </section>
                <section class="list-section">
                    <!-- ImageList goes here -->
                </section>
            </main>
        </div>
    `;
    }
};