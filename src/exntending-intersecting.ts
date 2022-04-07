{
  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  interface ColorfulCircle extends Colorful, Circle {}

  type ColorCircle = Colorful & Circle;

  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
}
