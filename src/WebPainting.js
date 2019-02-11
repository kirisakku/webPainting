'use strict';

const LENGTH = 600;

export default class WebPainting {

    init(){
        const canvas = document.getElementById('webPainting');
        this._ctx = canvas.getContext('2d');
//        canvas.thisArg = this;

        // イベントハンドラ追加
        canvas.addEventListener('mousedown', this.mouseDown, false);
        canvas.addEventListener('dragstart', this.dragStart, false);

        this._ctx.fillStyle = 'white';
        this._ctx.fillRect(0, 0, 600, 600);
    }

    mouseDown(event) {
        console.log('mouseDown');
    }

    dragStart(event) {
        console.log('dragStart');
    }
}  

