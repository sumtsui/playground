/**
 * https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/Guides/Contributor_s_Guide/Private_Properties
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
 */

/**
 * good old fashion _ prefix
 * NOT restrictive enough
 */
(() => {
  function Point(x, y) {
    this._x = x;
    this._y = y;
  }
  Point.prototype.getX = function () {
    return this._x;
  };

  Point.prototype.setX = function (x) {
    this._x = x;
  };

  Point.prototype.getY = function () {
    return this._y;
  };

  Point.prototype.setY = function (y) {
    this._y = y;
  };

  const p1 = new Point(100, 99);
  console.log('p1.getY()', p1.getY());

  const p2 = new Point(1, 1);
  console.log('p2.getY()', p2.getY());
  console.log('p2.getY()', p2.getY.call(p1));
})();

/**
 * TOO restrictive
 * Another common technique, is to define private properties as
 * variables and their getter and setter functions as a closure over these variables:
 */
(() => {
  function Point(_x, _y) {
    this.getX = function () {
      return _x;
    };

    this.setX = function (x) {
      _x = x;
    };

    this.getY = function () {
      return _y;
    };

    this.setY = function (y) {
      _y = y;
    };
  }

  const p1 = new Point(100, 99);
  const p2 = new Point(1, 1);
  console.log('p2.getY()', p2.getY());
  console.log('p2.getY()', p2.getY.call(p1)); // still 1
})();

/**
 * Note that this technique requires member functions that need access to private properties to be defined on the object itself, instead of its prototype. This is slightly less efficient than using the underscore convention, but not significantly for most applications.
 *
 * The advantage of this technique is that it offers more protection: there is no way for the user to access a private property, except by using its getter or setter function. However, the use of closures makes private properties too restrictive: since there is no way to access variables in one closure from within another closure, there is no way for objects of the same class to access each other's private properties.
 */

(() => {
  function ImageCreator(name) {
    this.name = name;
  }
  ImageCreator.prototype.toString = function () {
    return this.name;
  };

  function loadImage(name) {
    return new ImageCreator(name);
  }
  const createThumbnail = () => ({ name: 'thumbnail' });

  let images = {};

  function getImage(name) {
    let image = images[name];
    if (!image) {
      image = loadImage(name);
      images[name] = image;
    }
    return image;
  }

  let thumbnails = {};

  function getThumbnail(image) {
    let thumbnail = thumbnails[image];
    if (!thumbnail) {
      thumbnail = createThumbnail(image);
      thumbnails[image] = thumbnail;
    }
    return thumbnail;
  }

  /**
   * There are two problems with the above approach.
   * First, it's not possible to use objects as keys. When an object is used as a key, it's converted to a string using its toString method.
   * To make the above code work, a unique identifier must be associated with each image and override its toString method.
   * The second problem is more severe: the thumbnail cache maintains a strong reference to each thumbnail object,
   * so they will never be freed, even when their corresponding image has gone out of scope. This is a memory leak waiting to happen.
   */

  const img1 = getImage('pic1');
  const img2 = getImage('pic2');
  const img3 = getImage('pic3');
  getThumbnail(img1);
  getThumbnail(img2);
  getThumbnail(img3);
})();

/**
 * The above two problems are exactly what WeakMaps were designed to solve. A WeakMap is very similar to an ordinary hash map, but differs from it in two crucial ways:

    It can use ordinary objects as keys
    It does not maintain a strong reference to its values

 */

(() => {
  const createThumbnail = () => ({});
  const loadImage = () => ({});

  let images = new WeakMap();

  function getImage(name) {
    let image = images.get(name);
    if (!image) {
      image = loadImage(name);
      images.set(image, thumbnails);
    }
    return image;
  }

  let thumbnails = new WeakMap();

  function getThumbnail(image) {
    let thumbnail = thumbnails.get(image);
    if (!thumbnail) {
      thumbnail = createThumbnail(image);
      thumbnails.set(image, thumbnail);
    }
    return thumbnail;
  }

  const img1 = getImage('pic1');
  const img2 = getImage('pic2');
  const img3 = getImage('pic3');
  getThumbnail(img1);
  getThumbnail(img2);
  getThumbnail(img3);
})();
