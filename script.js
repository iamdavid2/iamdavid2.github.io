window.onload = function() {
  lax.init();
  
  lax.addDriver('scrollY', function () {
    return window.scrollY;
  },
    {
      inertiaEnabled: true,
    }
  );
  
  lax.addElements('#oasis1 blockquote .text', {
    scrollY: {
      translateX: [
        ["elInY", 500, "elOutY"],
        [0, 0, 200],
        {
          inertia: 20 
        }
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 1, -1],
      ],
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 1, 0],
        {
          inertia: .05,
        }
      ]
    }
  });
  
  lax.addElements('.bar-top span', {
    scrollY: {
      translateX: [
        ["elInY", "elOutY"],
        ['-screenWidth', 0],
        {
          easing: 'easeInOutQuint'
        }
      ],
    }
  });
  
  lax.addElements('.bar-bottom span', {
    scrollY: {
      translateX: [
        ["elInY", "elOutY"],
        ['screenWidth', 0],
      ],
    }
  });
  
  lax.addElements('#oasis2 blockquote span', {
    scrollY: {
      scale: [
        ["elInY", "elCenterY"],
        [5, 1],
        {
          inertia: .05,
        }
      ],
      
      blur: [
        ["elInY", "elCenterY"],
        [15, 0],
      ]
    }
  });
  
  lax.addElements('#overlayer', {
    scrollY: {
      "width": [
        ["elCenterY", "elOutY"],
        [0, 100],
        {
          cssUnit: "vw",
          easing: "easeOutQuad",
        }
      ]
    }
  });
  
  lax.addElements('#architecture', {
    scrollY: {
      "border-radius": [
        ["elInY", "elCenterY"],
        [0, 250],
        {
          easing: "easeOutCubic",
          inertia: 15,
        }
      ]
    }
  });
  
  lax.addElements('#overlayer-text', {
    scrollY: {
      opacity: [
        ["elInY", "elCenterY", "elCenterY+1"],
        [0, 0, 1],
      ],
    }
  });
  
}