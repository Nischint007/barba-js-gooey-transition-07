const gooey1 = document.querySelectorAll(".gooey-1");
const gooey2 = document.querySelectorAll(".gooey-2");

gsap.set(gooey1,{
    yPercent: -100
});

gsap.set(gooey2,{
    yPercent: 100
});

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