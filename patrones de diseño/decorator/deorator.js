/*Añade funcionalidad a otras claese
Los decoradores envuelve, a algo ya existente
puede ser usados de forma indiscriminada
*/

//Component
class ProductComponent {
    constructor(name) {
        this.name = name;

    }
    getDetail() {
        return `${this.name}`;
    }
}

//decorator
class ProductDecorator {

    constructor(ProductComponent) {

        this.ProductComponent = ProductComponent;

    }

    getDetail() {
        this.ProductComponent.getDetail();
    }

}


class ComercialInfoProductsDecorator extends ProductDecorator {

    constructor(ProductComponent, tradename, brand) {
        super(ProductComponent);

        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return super.getDetail();

    }

}
