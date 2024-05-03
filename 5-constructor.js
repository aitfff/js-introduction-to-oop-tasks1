// BEGIN
export function Point(x, y) {
  this.x = x;
  this.y = y;
  
  this.getX = function() {
    return this.x;
  };
  
  this.getY = function() {
    return this.y;
  };
}

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;

  this.getBeginPoint = function() {
    return this.beginPoint;
  };

  this.getEndPoint = function() {
    return this.endPoint;
  };
}

export function reverse(segment) {
  const beginPoint = new Point(segment.endPoint.getX(), segment.endPoint.getY());
  const endPoint = new Point(segment.beginPoint.getX(), segment.beginPoint.getY());
  return new Segment(beginPoint, endPoint);
}
// END
