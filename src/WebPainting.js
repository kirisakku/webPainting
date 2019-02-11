import Point from "./Point.js";

'use strict';

const LENGTH = 600;

export default class WebPainting {

    constructor() {
        // パス保持配列
        this._pathList = [];

        // canvas保持
        this._ctx = null;
    }

    init(){
        const canvas = document.getElementById('webPainting');
        canvas.focus();
        this._ctx = canvas.getContext('2d');
        canvas.thisArg = this;

        // イベントハンドラ追加
        canvas.addEventListener('dragstart', this.dragStart);
        canvas.addEventListener('drag', this.drag);
        canvas.addEventListener('dragend', this.dragEnd);
        this._ctx.fillStyle = 'white';
        this._ctx.fillRect(0, 0, 600, 600);
    }

    dragStart(event) {
        console.log('dragStart');
        const webPainting = this.thisArg;

        // ドラッグ開始地点の座標を追加する
        const startPoint = new Point(event.offsetX, event.offsetY);
        webPainting._pathList.push([startPoint]);

        const ctx = webPainting._ctx;
        // ペンを開始地点に持っていく
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(startPoint.x, startPoint.y);
    }

    drag(event) {
        console.log('drag');
        const webPainting = this.thisArg;

        // ドラッグ中の座標を追加
        const currentPoint = new Point(event.offsetX, event.offsetY);

        // 何故かdrag完了時にこの座標になっている。マジックナンバー？[要調査]
        if (currentPoint.x === -29 || currentPoint.y === -8) {
            return;
        }

        webPainting._pathList[webPainting._pathList.length - 1].push(currentPoint);

        const ctx = webPainting._ctx;
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();
    }

    dragEnd(event) {
        console.log('dragEnd');
        const webPainting = this.thisArg;

        const ctx = webPainting._ctx;
        ctx.restore();
    }
}  

