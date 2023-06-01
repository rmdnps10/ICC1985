class Box {
  constructor(x, y, w, h, images) {
    const options = {
      restitution: 0.8,
      friction: 0.3,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.images = images;
    this.currentImage = 0;
    Composite.add(world, this.body);
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.images[this.currentImage], 0, 0, this.w + 60, this.h + 40);
    pop();
  }

  updateImage(heightThresholds) {
    const pos = this.body.position;
    if (pos.y > 0 && pos.y < heightThresholds) {
      if (pos.x < width / 2) {
        if (pos.y < heightThresholds / 2) {
          this.currentImage = 8;
        } else {
          this.currentImage = 9;
        }
      } else {
        if (pos.y < heightThresholds / 2) {
          this.currentImage = 6;
        } else {
          this.currentImage = 7;
        }
      }
    } else {
      if (pos.x < width / 2) {
        if (pos.y > heightThresholds * 1.5) {
          this.currentImage = 5;
        } else if (pos.y > heightThresholds * 1.3) {
          this.currentImage = 4;
        } else {
          this.currentImage = 3;
        }
      } else {
        if (pos.y > heightThresholds * 1.9) {
          this.currentImage = 2;
        } else if (pos.y > heightThresholds * 1.6) {
          this.currentImage = 1;
        } else {
          this.currentImage = 0;
        }
      }
    }
  }
}
