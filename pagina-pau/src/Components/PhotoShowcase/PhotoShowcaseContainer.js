import React, { Component } from 'react';
import './PhotoShowcase.css'
import PHOTO_FILES from './PhotoFiles/PhotoFiles.js'

class PhotoShowcaseContainer extends Component {

    constructor(props) {
        super(props);

        this.imgRenderStep = props.imgRenderStep;
        this.interval = props.interval

        this.state = {
            Timer: null,
            ImagesDrawn: [],
            LastImageX: 0,
            LastImageY: 0
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let self = this;

        setInterval(function() {
            self.refreshCanvas(ctx, canvas);
        }, this.interval);

        canvas.onmousemove = (event) => {
            let img = this.generateImageToRender(PHOTO_FILES);
            if (this.shouldRenderImage(event.clientX, event.clientY)) {
                this.drawImage(img, event.clientX - 160, event.clientY - 90, ctx);
            }
          }

    }

    generateImageToRender(photoFiles) {

        let imgToRender = new Image();
        let numberOfPhotos = photoFiles.length;

        let photoIndex = Math.floor(Math.random() * numberOfPhotos);

        imgToRender.src = photoFiles[photoIndex];

        return imgToRender;
    }

    shouldRenderImage(cursorX, cursorY) {

        let shouldX = Math.abs(this.state.LastImageX - cursorX)
        let shouldY = Math.abs(this.state.LastImageY - cursorY)

        if (shouldX >= this.imgRenderStep || shouldY >= this.imgRenderStep) {
            console.log("Should Render");
            console.log(`LastImageX: ${this.state.LastImageX} cursorX: ${cursorX}`);
            console.log(`X: ${shouldX} and Y: ${shouldY}`);
            return true;
        }
        else return false;
    }

    drawImage(image, postionX, positionY, canvasContext) {
        let imagesDrawn = this.state.ImagesDrawn.slice();

        canvasContext.drawImage(image, postionX, positionY, 320, 180);
                imagesDrawn.push(image);
                this.setState((prevState, props) => {
                    return {
                        ImagesDrawn: imagesDrawn,
                        LastImageX: postionX + 160,
                        LastImageY: positionY + 90
                    }
            });
    }

    refreshCanvas(context, canvas) {

        context.clearRect(0, 0, canvas.width, canvas.height);
        this.setState( (prevState, props) => {
           return {
                ImagesDrawn: [],
                LastImageX: 0,
                LastImageY: 0
            }
        });
    }

    render() {

        return (
            <div>
                <canvas className="photosCanvas" ref="canvas" width="100%" height="100%"/>
            </div>
        );

    }

}

export default PhotoShowcaseContainer;