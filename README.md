# 🚀 Barba.js Series – 07 Gooey Transition

This project is part of my Beginner → Advanced Barba.js Series, where each project progressively explores more sophisticated page transition techniques inspired by modern creative websites and award-winning digital experiences.

👉 In this project, I explore a Gooey Curtain Transition, where multiple vertical segments emerge from the top and bottom of the viewport before meeting at the center, creating an organic page transition that feels fluid, immersive, and visually dynamic.

---

## 📌 Overview

Instead of relying on traditional overlays or shutter systems, this transition introduces a dual-layer gooey curtain effect composed of dozens of independently animated segments.

As users navigate between pages, the upper and lower gooey layers converge toward the center of the viewport before retreating back outward, revealing the next page through a smooth and organic motion sequence.

💡 This approach:

* Creates a fluid curtain-like transition effect
* Adds personality and motion to navigation
* Produces stronger visual engagement between pages
* Mimics experimental transition systems found on modern portfolio websites
* Turns page navigation into a visual experience rather than a utility

---

## 🆕 What's New in This Project

✨ Dual-layer gooey curtain animation system

✨ Organic center-converging reveal effect

✨ Randomized stagger choreography

✨ Fluid viewport coverage animation

✨ Experimental motion language

✨ Dynamic opening and closing behavior

✨ Enhanced visual rhythm between pages

---

## ⚙️ How the Transition Works

1. Upper gooey segments descend from above the viewport
2. Lower gooey segments rise from below the viewport
3. Both layers converge toward the center
4. Barba.js swaps the page content in the background
5. The gooey curtain begins opening
6. Both layers retreat back outward
7. The new page is revealed underneath

👉 Creates an organic curtain effect rather than a conventional page transition.

---

## 🔹 Animation Philosophy

The goal wasn't simply to hide a page change.

Instead, the transition acts as a living visual layer between experiences.

The randomized stagger values introduce unpredictability, making the motion feel more natural and less mechanical than traditional transition systems.

Rather than interrupting the experience, the transition becomes part of it.

---

## 🔹 GSAP Setup

```js
const gooey1 = document.querySelectorAll(".gooey-1");
const gooey2 = document.querySelectorAll(".gooey-2");

gsap.set(gooey1,{
    yPercent: -100
});

gsap.set(gooey2,{
    yPercent: 100
});
```

📍 Upper segments start hidden above the viewport

📍 Lower segments start hidden below the viewport

📍 Prepared for center-converging reveal animation

📍 Optimized for smooth transform-based motion

---

## 🔹 Animation Functions

### ▶️ Gooey Entry (Page Exit)

```js
function gooeyEntry(){

    const tl = gsap.timeline();

    tl.to(gooey1,{
        yPercent: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger:{
            amount: 0.6,
            from: "random"
        }
    },0);

    tl.to(gooey2,{
        yPercent: 0,
        duration: 1.2,
        ease: "power4.inOut",
        stagger:{
            amount: 0.6,
            from: "random"
        }
    },0);

    return tl;
}
```

✔️ Gooey layers progressively cover the viewport

✔️ Creates anticipation before navigation

✔️ Adds organic rhythm through randomized motion

---

### ▶️ Gooey Exit (Page Enter)

```js
function gooeyExit(){

    const tl = gsap.timeline();

    tl.to(gooey1,{
        yPercent: -100,
        delay: 0.5,
        duration: 1.1,
        ease: "power3.inOut",
        stagger:{
            amount: 0.6,
            from: "random"
        }
    },0);

    tl.to(gooey2,{
        yPercent: 100,
        delay: 0.35,
        duration: 1.1,
        ease: "power4.inOut",
        stagger:{
            amount: 0.6,
            from: "random"
        }
    },0);

    return tl;
}
```

✔️ Reveals the incoming page smoothly

✔️ Maintains motion continuity

✔️ Creates a fluid organic finish

---

## 🔹 Barba.js Integration

```js
barba.init({

    transitions: [{

        name: "gooey-reveal",

        async leave(data){
            await gooeyEntry();
        },

        async enter(){
            await gooeyExit();
        }
    }]
});
```

### 🧠 Transition Flow

### ▶️ Leave Phase (Current Page Exit)

During navigation, both gooey layers animate simultaneously.

The upper layer:

* Descends from above the viewport

The lower layer:

* Rises from below the viewport

Together they converge toward the center of the screen.

```js
await gooeyEntry();
```

✔️ Creates anticipation before the transition

✔️ Makes navigation feel intentional

✔️ Avoids abrupt content changes

---

### ▶️ Enter Phase (Next Page Reveal)

Once the next page is loaded, the gooey curtain begins opening.

Both layers retreat back toward their original positions while revealing the newly loaded page underneath.

```js
await gooeyExit();
```

✔️ Creates a smooth organic reveal

✔️ Maintains visual continuity

✔️ Enhances perceived smoothness

---

### 📍 Complete Sequence

1. User clicks a navigation link
2. Upper gooey segments descend from above
3. Lower gooey segments rise from below
4. Both layers meet near the center
5. Barba.js swaps the page content
6. Gooey layers retreat outward
7. The new page is revealed underneath

👉 The final result feels less like navigation and more like an organic curtain transition.

---

## 🧱 HTML Structure

```html
<div id="gooey-wrapper">

    <div id="gooey-upper">
        <div class="gooey-1"></div>
        ...
    </div>

    <div id="gooey-bottom">
        <div class="gooey-2"></div>
        ...
    </div>

</div>
```

---

## 🎨 CSS Structure

```css
#gooey-wrapper{
    position: fixed;
    inset: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
}

.gooey-1,
.gooey-2{
    width: 2.5%;
    height: 50vh;
    background: red;
    will-change: transform;
}

.gooey-1{
    transform-origin: top;
}

.gooey-2{
    transform-origin: bottom;
}
```

📍 Ensures:

* Full-screen viewport coverage
* Smooth animation performance
* Reliable layer management
* Scalable architecture
* Production-ready transition behavior

---

## 🧠 Key Takeaways

* Randomized staggering creates more natural motion
* Organic transitions feel less mechanical and repetitive
* Independent segments create richer visual complexity
* GSAP timelines provide precise animation orchestration
* Barba.js enables seamless navigation between pages
* Small motion details significantly improve perceived quality
* Transition systems can become part of the storytelling experience

---

## ✍️ Author

### Nischint Singh

🔗 LinkedIn:
https://www.linkedin.com/in/nischint-singh-98a329314/

---
