class DragDropPage {

    constructor(page){
        this.page =  page;

        this.cloumnA = page.locator('#column-a');
        this.cloumnB = page.locator('#column-b');
    }

    async navigate() {
        await this.page.goto("/drag_and_drop");
    }

    async dragAtoB() {
        await this.cloumnA.dragTo(this.cloumnB);
    }

    async dragBtoA() {
        await this.cloumnB.dragTo(this.cloumnA);
    }

    async getcolumnAText() {
        return await this.cloumnA.textContent();
    }

    async getcolumnBText() {
        return await this.cloumnB.textContent();
    }
    
}

module.exports = { DragDropPage };