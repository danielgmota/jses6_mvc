class Negociacao {
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); //imutável (deep)
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //imutável (shallow)
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //programacao defensiva
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}