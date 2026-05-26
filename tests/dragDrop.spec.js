const {test, expect} = require('@playwright/test');
const {DragDropPage} = require('../pages/dragDropPage');

test.describe('Drag and Drop', () => {

    test('Postive scenario: Drag A to B', async ({page}) => {
        const dragDropPage = new DragDropPage(page);
        await dragDropPage.navigate();
        await dragDropPage.dragAtoB();

        const colmB = await dragDropPage.getcolumnBText();
        await expect(colmB).toContain('A');
    });

    test('Negative scenario: B have A', async ({page}) => {
        const dragDropPage = new DragDropPage(page);
        await dragDropPage.navigate();

        const colmB = await dragDropPage.getcolumnBText();
        await expect(colmB).toContain('A');
    });

    test("Edge case: Multiple Drags B <> A", async ({page}) => {
        const dragDropPage = new DragDropPage(page);
        await dragDropPage.navigate();
        
        for (let i = 0; i < 3; i++) {
            await dragDropPage.dragAtoB();
            await dragDropPage.dragBtoA();
        }

        const colmA = await dragDropPage.getcolumnAText();
        await expect(colmA).toBeTruthy();
    });

});



