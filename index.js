// I advise you refrain from reading this until you've fully experienced the website
// This code will contain spoilers for what happens, so be warned
// If you've already seen everything then welcome! I hope you enjoyed it and I hope you don't think this code is TOO bad
// Good luck traveler!

function writeln(str) {
    document.body.innerHTML += str + '\n';
}

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeElementById(id) {
    const element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function wrapIdWithDiv(elementId, divId) {
    const div = document.createElement('div');
    div.id = divId;
    const element = document.getElementById(elementId);
    const parent = element.parentNode;
    parent.replaceChild(div, element);
    div.appendChild(element);
    return div;
}

function httpGetAsync(theUrl, callback) {
    // I did not make this.
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

const DISCORD_ID = "401875312578920458";

function updateDiscordText() {
    httpGetAsync(`https://api.becketto.dev/getDiscordStatus?id=${DISCORD_ID}`, (status) => {
        document.getElementById("discordStatus").innerHTML = `Discord Status: ${status}`
    })
}

function updateDiscordShield() {
    // If you would like to do this for yourself, make a request similar to this one with your own discord user id (you can also set an &color=)
    // Note: For this to work you must join this discord server (because there is no api endpoint for user status): https://discord.gg/ABM6w5dez9
    httpGetAsync(`https://api.becketto.dev/getDiscordShield?id=${DISCORD_ID}`, (status) => {
        document.getElementById("discordStatus").src = status;
    })
}
var discordUpateInterval;

function textboxWriteln(str) {
    document.getElementById("centerTextContainer").innerHTML += str + "<br class='tmp'>";
}

function textboxWriteAnimated(str) {
    const newText = document.createElement('p');
    const currentText = document.getElementById("centerText");
    const textContainer = document.getElementById("centerTextContainer");
    newText.className = "fadingin";
    newText.innerHTML = str;
    newText.id = "centerText";
    currentText.classList.add(["fadingout"]);
    textContainer.classList.add(["centerTextContainerTransitioning"]);
    textContainer.appendChild(newText);
    setTimeout(() => {
        textContainer.removeChild(currentText);
        textContainer.classList.remove(["centerTextContainerTransitioning"]);
        document.getElementById("centerText").classList.remove(["fadingin"]);
    }, speed ? 10 : 500)
}

function textboxWriteAnimatedWithChoices(str, choices) {
    const newText = document.createElement('p');
    const currentText = document.getElementById("centerText");
    const textContainer = document.getElementById("centerTextContainer");
    newText.className = "fadingin";
    var body = "<span id='centerTextText'>" + str + "</span><div id='inline-choice-container'>";
    for (choice of choices) {
        body += `<input type='image' src='${choice.src}' onclick='${choice.func.replace(/\'/g, '\x22')}' ${choice.id ? `id="${choice.id}"` : ''}>`;
    }
    body += "</div>";
    newText.innerHTML = body;
    newText.id = "centerText";
    currentText.classList.add(["fadingout"]);
    textContainer.classList.add(["centerTextContainerTransitioning"]);
    textContainer.appendChild(newText);
    setTimeout(() => {
        textContainer.removeChild(currentText);
        textContainer.classList.remove(["centerTextContainerTransitioning"]);
        document.getElementById("centerText").classList.remove(["fadingin"]);
    }, speed ? 10 : 500)
}

var speed;

window.onload = () => {
    speed = (document.location.href === "https://becketto.dev/?speed") || (document.location.href === "http://127.0.0.1:8080/?speed");
    build();
}

function build() {
    buildPhase1();
}

function buildPhase1() {
    setTimeout(() => {
        writeln("<br>");
        writeln("<br>");
        writeln("<p class='tmp'>Hey, doesn't this site seem a little... bare? Or is that just me?</p>");
        setTimeout(() => {
            writeln("<p class='tmp'>I mean, there aren't even any div tags, let alone any sort of layout or styling.</p>");
            setTimeout(() => {
                writeln("<div style='background-color: blue; color: red;' class='tmp'>Oh wait, here's one!</div>");
                setTimeout(() => {
                    writeln("<p class='tmp'>It does still look pretty ugly though. Hopefully I can do something about that.</p>");
                    setTimeout(() => {
                        writeln("<p class='tmp'>Oooh! I'll show you the project I've been working on!")
                        setTimeout(() => {
                            writeln("<p id='discordStatus'>Discord Status: Loading...</p>")
                            updateDiscordText();
                            setTimeout(() => {
                                writeln("<p class='tmp'>It should show the current status of my discord account! (@Beckett#1337)</p>");
                                setTimeout(() => {
                                    writeln("<p class='tmp'>Maybe you'd like to check out my GitHub if you think things like that are cool!</p>")
                                    setTimeout(() => {
                                        writeln("<a href='https://github.com/BeckettOBrien' target='_blank' id='gh-link'>GitHub</a>")
                                        setTimeout(() => {
                                            writeln("<p class='tmp'>Hmm. Still a little bland.</p>")
                                            setTimeout(() => {
                                                writeln("<p class='tmp'>Maybe I can add some images or something!</p>");
                                                setTimeout(() => {
                                                    document.getElementById("gh-link").innerHTML = "<img src='assets/github-logo.png' id='gh-logo'>" + document.getElementById("gh-link").innerHTML;
                                                    document.getElementById("discordStatus").innerHTML = "<img src='assets/discord-logo.png' id='disc-logo'>" + document.getElementById("discordStatus").innerHTML;
                                                    setTimeout(() => {
                                                        writeln("<p class='tmp'>AHH! Uhhhhhhh. I'll, uh, go fix that.</p>");
                                                        setTimeout(() => {
                                                            writeln("<p class='tmp'>One sec.</p>");
                                                            setTimeout(() => {
                                                                document.getElementById("gh-logo").width = 25;
                                                                document.getElementById("gh-logo").height = 25;
                                                                document.getElementById("disc-logo").width = 25;
                                                                document.getElementById("disc-logo").height = 25;
                                                                setTimeout(() => {
                                                                    writeln("<p class='tmp'>Much better!</p>");
                                                                    setTimeout(() => {
                                                                        writeln("<p class='tmp'>So. How's your day been?</p>");
                                                                        setTimeout(() => {
                                                                            writeln("<p class='tmp'>Uhh. Still here?</p>");
                                                                            setTimeout(() => {
                                                                                writeln("<p class='tmp'>Well, if you're still here, I guess I can clean this place up a bit.</p>");
                                                                                setTimeout(() => {
                                                                                    removeElementsByClass("tmp");
                                                                                    setTimeout(() => {
                                                                                        writeln("<p class='tmp'>This is better, right?</p>");
                                                                                        setTimeout(() => {
                                                                                            writeln("<p class='tmp'>Because I think so</p>");
                                                                                            setTimeout(() => {
                                                                                                writeln("<p class='tmp'>Those images do look a little wonky though</p>");
                                                                                                setTimeout(() => {
                                                                                                    // No, I will not use jQuery
                                                                                                    // Don't worry, I'll figure this out... eventually
                                                                                                    document.getElementById("gh-link").innerHTML = "<img src='https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github' class='link-img'>";
                                                                                                    document.getElementById("gh-link").style = "font-size: 0px";
                                                                                                    const discordStatusOld = document.getElementById("discordStatus");
                                                                                                    const discordStatusNew = document.createElement('img');
                                                                                                    discordStatusNew.src = "https://img.shields.io/badge/Loading-grey?style=for-the-badge&logo=discord";
                                                                                                    discordStatusNew.id = "discordStatus";
                                                                                                    discordStatusNew.classList.add(["link-img"]);
                                                                                                    discordStatusNew.setAttribute("onclick", "updateDiscordShield()");
                                                                                                    discordUpateInterval = setInterval(() => {
                                                                                                        updateDiscordShield();
                                                                                                    }, 300000);
                                                                                                    discordStatusOld.parentNode.replaceChild(discordStatusNew, discordStatusOld);
                                                                                                    updateDiscordShield();
                                                                                                    setTimeout(() => {
                                                                                                        writeln("<p class='tmp'>Cool right?</p>");
                                                                                                        setTimeout(() => {
                                                                                                            writeln("<p class='tmp'>Lemme see if I can fix some of the layout here</p>");
                                                                                                            setTimeout(() => {
                                                                                                                removeElementsByClass("tmp");
                                                                                                                Array.from(document.getElementsByTagName('br')).forEach((br) => {
                                                                                                                    document.body.removeChild(br);
                                                                                                                });
                                                                                                                const discordStatus = document.getElementById("discordStatus");
                                                                                                                document.body.children[0].id = 'centerText';
                                                                                                                wrapIdWithDiv("centerText", "centerTextContainer");
                                                                                                                discordStatus.parentNode.removeChild(discordStatus);
                                                                                                                const linksContainer = wrapIdWithDiv("gh-link", "links-container");
                                                                                                                linksContainer.appendChild(discordStatus);
                                                                                                                linksContainer.parentNode.removeChild(linksContainer);
                                                                                                                const vertContainer = wrapIdWithDiv("centerTextContainer", "vert-container");
                                                                                                                vertContainer.appendChild(linksContainer);
                                                                                                                const emptycss = document.createElement('link');
                                                                                                                emptycss.rel = "stylesheet";
                                                                                                                emptycss.type = "text/css";
                                                                                                                emptycss.href = "index.css";
                                                                                                                document.head.appendChild(emptycss);
                                                                                                                const stylesheet = document.createElement('link');
                                                                                                                stylesheet.rel = "stylesheet";
                                                                                                                stylesheet.type = "text/css";
                                                                                                                stylesheet.href = 'css/stageone.css';
                                                                                                                document.head.appendChild(stylesheet);
                                                                                                                setTimeout(() => {
                                                                                                                    textboxWriteln("");
                                                                                                                    textboxWriteln("<p class='tmp'>What do you think?</p>");
                                                                                                                    setTimeout(() => {
                                                                                                                        textboxWriteln("<p class='tmp'>Well I guess that title is just a blatant lie at this point. I'll fix it.</p>")
                                                                                                                        setTimeout(() => {
                                                                                                                            document.getElementById("centerText").innerHTML = "Hi! Welcome to my website. There's not a lot to do but hopefully you enjoy!";
                                                                                                                            setTimeout(() => {
                                                                                                                                removeElementsByClass("tmp");
                                                                                                                                setTimeout(() => {
                                                                                                                                    textboxWriteAnimated("Look, I figured out how to do CSS animations!");
                                                                                                                                    setTimeout(() => {
                                                                                                                                        textboxWriteAnimated("Wheeee!");
                                                                                                                                        setTimeout(() => {
                                                                                                                                            textboxWriteAnimated("This is fun!");
                                                                                                                                            setTimeout(() => {
                                                                                                                                                textboxWriteAnimated("Anyway, do you want to see the spot where I'm gonna put my profile picture?");
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    const vertContainer = document.getElementById("vert-container");
                                                                                                                                                    const profilePictureContainer = document.createElement('div');
                                                                                                                                                    profilePictureContainer.id = "profilePictureContainer";
                                                                                                                                                    const profilePicture = document.createElement('img');
                                                                                                                                                    profilePicture.id = "profilePicture";
                                                                                                                                                    profilePicture.src = "assets/black.jpg";
                                                                                                                                                    profilePictureContainer.appendChild(profilePicture);
                                                                                                                                                    vertContainer.insertBefore(profilePictureContainer, document.getElementById("centerTextContainer"));
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        textboxWriteAnimated("Yup, haven't picked one yet. I'm pretty indecisive about things like this.");
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            textboxWriteAnimated("I also want to pick a nickname or something, but I can't decide on something so right now I just use my real name.");
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                textboxWriteAnimated("Speaking of which, I should probably put my name somewhere.");
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    const headingContainer = document.createElement('div');
                                                                                                                                                                    headingContainer.id = "headingContainer";
                                                                                                                                                                    const heading = document.createElement('h1');
                                                                                                                                                                    heading.id = "heading";
                                                                                                                                                                    heading.innerHTML = "Beckett O'Brien";
                                                                                                                                                                    headingContainer.appendChild(heading);
                                                                                                                                                                    vertContainer.insertBefore(headingContainer, profilePictureContainer);
                                                                                                                                                                    document.styleSheets.item(0).addRule("#vert-container", "height: 90vh;");
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        textboxWriteAnimated("Let me grab a better font real quick...");
                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                            document.styleSheets.item(0).addRule("#vert-container", "font-family: 'Noto Sans JP', sans-serif;");
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                textboxWriteAnimated("I think it needs a shadow");
                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                    document.styleSheets.item(0).addRule(".fadingin, .fadingout", "text-shadow: -1px -1px 10px rgba(150, 150, 150, 0.8);");
                                                                                                                                                                                    document.styleSheets.item(0).addRule(".link-img", "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);");
                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                                            textboxWriteAnimated("Now we need a background");
                                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                                textboxWriteAnimated("I know! I'll let you pick. Just gimme one sec...");
                                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                                    // Choice here
                                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                                        document.styleSheets.item(0).addRule("#inline-choice-container", "display: inline; vertical-align: middle;");
                                                                                                                                                                                                        document.styleSheets.item(0).addRule("input", "margin: 5px; outline: -webkit-focus-ring-color auto 1px;");
                                                                                                                                                                                                        document.styleSheets.item(0).addRule("#centerTextText", "display: inline-block; padding: 10px;");
                                                                                                                                                                                                        textboxWriteAnimatedWithChoices("Here! Just pick the background you want --> ", [{ src:"https://img.shields.io/badge/particles-red?style=for-the-badge", func:"particleBackground()" }, { src:"https://img.shields.io/badge/matrix-green?style=for-the-badge", func:"matrixBackground()" }]);
                                                                                                                                                                                                    }, speed ? 10 : 4000);
                                                                                                                                                                                                    // particleBackground();
                                                                                                                                                                                                }, speed ? 10 : 3000);
                                                                                                                                                                                            }, speed ? 10 : 1500)
                                                                                                                                                                                        }, speed ? 10 : 2000)
                                                                                                                                                                                    }, speed ? 10 : 5000)
                                                                                                                                                                                }, speed ? 10 : 1500)
                                                                                                                                                                            }, speed ? 10 : 2500)
                                                                                                                                                                        }, speed ? 10 : 1500)
                                                                                                                                                                    }, speed ? 10 : 3000)
                                                                                                                                                                }, speed ? 10 : 1500)
                                                                                                                                                            }, speed ? 10 : 3500)
                                                                                                                                                        }, speed ? 10 : 2000)
                                                                                                                                                    }, speed ? 10 : 3500)
                                                                                                                                                }, speed ? 10 : 2500)
                                                                                                                                            }, speed ? 10 : 4000)
                                                                                                                                        }, speed ? 10 : 2000)
                                                                                                                                    }, speed ? 10 : 2500)
                                                                                                                                }, speed ? 10 : 7000)
                                                                                                                            }, speed ? 10 : 1500)
                                                                                                                        }, speed ? 10 : 4000)
                                                                                                                    }, speed ? 10 : 3500)
                                                                                                                }, speed ? 10 : 6000)
                                                                                                            }, speed ? 10 : 2500)
                                                                                                        }, speed ? 10 : 4000)
                                                                                                    }, speed ? 10 : 3000)
                                                                                                }, speed ? 10 : 2500)
                                                                                            }, speed ? 10 : 5000)
                                                                                        }, speed ? 10 : 3000)
                                                                                    }, speed ? 10 : 15000)
                                                                                }, speed ? 10 : 5000)
                                                                            }, speed ? 10 : 3000)
                                                                        }, speed ? 10 : 10000)
                                                                    }, speed ? 10 : 10000)
                                                                }, speed ? 10 : 3000)
                                                            }, speed ? 10 : 2000)
                                                        }, speed ? 10 : 1500)
                                                    }, speed ? 10 : 1500)
                                                }, speed ? 10 : 2500)
                                            }, speed ? 10 : 2000)
                                        }, speed ? 10 : 4000)
                                    }, speed ? 10 : 2000)
                                }, speed ? 10 : 4000)
                            }, speed ? 10 : 3000)
                        }, speed ? 10 : 1500)
                    }, speed ? 10 : 2000)
                }, speed ? 10 : 5000)
            }, speed ? 10 : 3000)
        }, speed ? 10 : 3000)
    }, speed ? 10 : 15000)
}

function checkpoint(name) {
    analytics.logEvent('checkpoint', { name: name });
}

function particleBackground() {
    if (document.getElementById('particle-container')) return;
    if (document.getElementById('matrix-container')) return;
    checkpoint('phase_one');
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    document.styleSheets.item(0).addRule("#particle-container", `position : absolute; width:100%; height:100%; z-index:-1;`);
    document.body.insertBefore(particleContainer, document.getElementById("vert-container"));
    const particlejsScript = document.createElement('script');
    particlejsScript.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js";
    document.head.appendChild(particlejsScript);
    particlejsScript.onload = () => {
        particlesJS.load("particle-container", "assets/particlesjs-config.json", () => {
            setTimeout(() => {
                textboxWriteAnimated("I like it, but... Not very original, right?");
                setTimeout(() => {
                    textboxWriteAnimated("I think I'll take it down for now.");
                    setTimeout(() => {
                        window.pJSDom[0].pJS.fn.vendors.destroypJS();
                        document.getElementById('particle-container').remove();
                        checkpoint('particle_background');
                        cameraShake();
                        buildPhase2();
                    }, speed ? 10 : 3000)
                }, speed ? 10 : 2500)
            }, speed ? 10 : 5000)
        });
    }
}

function matrixBackground() {
    if (document.getElementById('particle-container')) return;
    if (document.getElementById('matrix-container')) return;
    checkpoint('phase_one');
    const matrixContainer = document.createElement('div');
    matrixContainer.id = 'matrix-container';
    document.styleSheets.item(0).addRule("#matrix-container", "position : absolute; width:100%; height:100%; z-index:-1;");
    document.body.insertBefore(matrixContainer, document.getElementById("vert-container"));
    const matrixCanvas = document.createElement('canvas');
    matrixContainer.appendChild(matrixCanvas);
    const ctx = matrixCanvas.getContext('2d');
    const w = matrixCanvas.width = window.innerWidth;
    const h = matrixCanvas.height = window.innerHeight;
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,w,h);
    document.styleSheets.item(0).addRule("#vert-container", "color: white;");
    document.getElementById('profilePicture').src = 'assets/white.jpg';
    document.getElementById('gh-link').children.item(0).src = "https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github";
    const cols = Math.floor(w/20)+1;
    const ypos = Array(cols).fill(0);
    const matrixDrawLoop = setInterval(() => {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0,0,w,h);

        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text,x,y);

            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }, 50)

    setTimeout(() => {
        textboxWriteAnimated("Looks cool, but maybe a bit much?")
        setTimeout(() => {
            textboxWriteAnimated("I think I'll take it down for now.");
            setTimeout(() => {
                clearInterval(matrixDrawLoop);
                document.getElementById('matrix-container').remove();
                document.styleSheets.item(0).addRule("#vert-container", "color: black;");
                document.getElementById('profilePicture').src = 'assets/black.jpg';
                document.getElementById('gh-link').children.item(0).src = "https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github";
                checkpoint('matrix_background');
                cameraShake();
                buildPhase2();
            }, speed ? 10 : 3000)
        }, speed ? 10 : 2500)
    }, speed ? 10 : 5000)
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function cameraShake(deviation=10) {
    shake(document.body, deviation);
}

async function shake(element, deviation) {
    for (i = 0; i < 6; i++) {
        shakeX = (Math.random() * deviation) - (deviation/2);
        shakeY = (Math.random() * deviation) - (deviation/2);
        element.style.transform = `translate(${shakeX}px,${shakeY}px)`;
        await sleep((Math.random() * 45) + 5);
    }
    element.style.transform = '';
}

function crack() {
    var canvas = document.getElementById('crack-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.id = 'crack-canvas';
        document.styleSheets.item(0).addRule("#crack-canvas", "position : absolute; width:100%; height:100%; z-index:-1;");
        document.body.insertBefore(canvas, document.getElementById('vert-container'));
    }
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');
    img.src = "assets/crack-1.png";
    img.style.transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
    const x = (Math.random() * (window.innerWidth - 50)) + 50;
    const y = (Math.random() * (window.innerHeight - 50)) + 50;
    console.log(`X: ${x} | Y: ${y}`);
    img.onload = (() => {ctx.drawImage(img,x,y,50,50); cameraShake();});
}

async function buildPhase2() {
    // Gonna try out this method of defining phases
    // I just can't manage another massive set of indentations and setTimeout-ception
    // Probably over-engineered, but I don't really care
    const subPhases = [
        {
            func: () => {
                textboxWriteAnimated("Uhhhhhhhhhhhhhh");
            },

            timeout: 2000
        },
        {
            func: () => {
                textboxWriteAnimated("That didn't sound good.");
            },

            timeout: 1500
        },
        {
            func: () => {
                textboxWriteAnimated("Nah, it's probably fine.");
            },

            timeout: 3500
        },
        {
            func: () => {
                textboxWriteAnimated("Help me decide on a theme!");
            },

            timeout: 2000
        },
        {
            func: async () => {
                checkpoint('reach_physics');
                await initializeMatterJs();
                textboxWriteAnimatedWithChoices("Which one do you like --> ", [
                    {
                        id: 'theme-choice-industrial',
                        src: "https://img.shields.io/badge/Industrial-grey?style=for-the-badge",
                        func: "pickThemeChoice('theme-choice-industrial')"
                    },
                    {
                        id: 'theme-choice-modern',
                        src: "https://img.shields.io/badge/Modern-white?style=for-the-badge",
                        func: "pickThemeChoice('theme-choice-modern')"
                    }
                ])
            },

            timeout: 1500
        }
    ];

    for (phase of subPhases) {
        await sleep(speed ? 10 : phase.timeout);
        await phase.func();
    }
}

// Matter.js Aliases
var Engine;
var Runner;
var Render;
var Bodies;
var MouseConstraint;
var Mouse;
var World;

// Matter.js Global Variables
var engine;
var world;
var runner;
var renderInterval;

// Global Matter.js Objects
var objectProperties = {};
var floor;
var leftWall;
var rightWall;
var mouse;

// Helpful Matter.js Functions
function rect(x, y, width, height) {
    return Bodies.rectangle(x, y, width, height, {
        isStatic: false
    });
}

function circle(x, y, radius) {
    return Bodies.circle(x, y, radius, {
        isStatic: false
    })
}

function wall(x, y, width, height, cornerRadius=0) {
    return Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        chamfer: { radius: cornerRadius }
    });
}

function getDomElementBounds(element) {
    box = element.getBoundingClientRect();
    return {
        x: ((box.left + box.right)/2),
        y: ((box.top + box.bottom)/2),
        width: (box.right - box.left),
        height: (box.bottom - box.top)
    }
}

function gravitize(element, restitution = 0.2, isCircle=false, interactible=true) {
    var bounds = getDomElementBounds(element);
    if (element.tagName == "A") {
        bounds = getDomElementBounds(element.childNodes.item(0));
    }
    var object;
    if (isCircle) {
        object = circle(bounds.x, bounds.y, bounds.width/2);
        console.log(bounds);
    } else {
        object = rect(bounds.x, bounds.y, bounds.width, bounds.height);
    }
    if (!object) return;
    object.label = element.id;
    object.restitution = restitution;
    objectProperties[element.id] = {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
        body: object,
    }
    World.add(world, object);
    if (interactible) {
        element.classList.add("mjs-interactible");
    }
    return object;
}

function solidify(element, reset=true) {
    const object = objectProperties[element.id];
    World.remove(world, object.body);
    if (reset) {
        element.style.removeProperty('transform');
    }
    delete objectProperties[element.id];
}

function pickThemeChoice(id) {
    checkpoint('theme_choice');
    const buttonDom = document.getElementById(id);
    buttonDom.onclick = '';
    const parent = buttonDom.parentNode.parentNode;
    const originalParentBounds = getDomElementBounds(parent);
    gravitize(buttonDom);
    const newParentBounds = getDomElementBounds(parent);
    Matter.Body.setAngularVelocity(objectProperties[id].body, -(Math.PI/115));
}

async function initializeMatterJs() {
    const matterJs = document.createElement('script');
    matterJs.src = 'vendor/matter.js';
    const mainScriptLoaded = new Promise((resolve, reject) => {
        matterJs.onload = () => {
            resolve();
        }
    });

    document.head.appendChild(matterJs);
    await mainScriptLoaded;

    Engine = Matter.Engine;
    Runner = Matter.Runner;
    Render = Matter.Render;
    Bodies = Matter.Bodies;
    MouseConstraint = Matter.MouseConstraint;
    Mouse = Matter.Mouse;
    World = Matter.World;

    engine = Engine.create({
        positionIterations: 5,
        velocityIterations: 5,
        constraintIterations: 5,
        enableSleeping: true
    });
    world = engine.world;
    runner = Runner.create();
    runner.isFixed = true;
    Runner.run(engine, runner);

    const thickness = 500;
    floor = wall(window.innerWidth/2, window.innerHeight + (thickness/2), window.innerWidth, thickness);
    ceiling = wall(window.innerWidth/2, - (thickness/2), window.innerWidth, thickness);
    leftWall = wall(-(thickness/2), window.innerHeight/2, thickness, window.innerHeight);
    rightWall = wall(window.innerWidth + (thickness/2), window.innerHeight/2, thickness, window.innerHeight);
    World.add(world, [floor, ceiling, leftWall, rightWall]);

    renderInterval = setInterval(drawDom, 5);

    document.onmousemove = (e) => {
        mouse = {
            x: e.clientX,
            y: e.clientY
        }
    }

    clearInterval(discordUpateInterval);
    document.getElementById('discordStatus').onclick = '';
    const styles = document.styleSheets.item(0);
    styles.addRule(".mjs-interactible", "pointer-events: none;");
}

function matterjsInitUserInteraction() {
    let mouse = Mouse.create(document.body);
    let mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 1,
            angularStiffness: 0,
            render: {
                visible: false
            }
        }
    })
    World.add(world, mouseConstraint);

    const styles = document.styleSheets.item(0);
    styles.addRule(".mjs-interactible *", "pointer-events: none;");
    styles.addRule("body:active", "cursor: grabbing;");
    styles.addRule("body", "user-select: none; cursor: grab;");
}

function drawDom() {
    world.bodies.forEach((body) => {
        const bodyDom = document.getElementById(body.label);
        if (!bodyDom) return;
        if (!objectProperties[body.label]) return;
        newX = body.position.x - objectProperties[body.label].x;
        newY = body.position.y - objectProperties[body.label].y;
        bodyDom.style.transform = `translate(${newX}px, ${newY}px) rotate(${body.angle}rad)`;
    });
}

function getFirstMJSChildren(node) {
    out = [];
    node.childNodes.forEach((n) => {
        if (objectProperties[n.id]) {
            return out.push(n);
        }
        if (n.childNodes.length == 0) {
            return;
        }
        return out.push(getFirstMJSChildren(n));
    })
    return out;
}

function crash() {
    checkpoint('crash');
    rect_fall_ids = ["heading", "gh-link", "discordStatus", "theme-choice-modern", "theme-choice-industrial", "centerTextText"];
    circle_fall_ids = ["profilePicture"];

    rect_fall_ids.forEach((id) => {
        if (objectProperties[id]) return;
        gravitize(document.getElementById(id));
    });

    circle_fall_ids.forEach((id) => {
        if (objectProperties[id]) return;
        gravitize(document.getElementById(id), restitution=0.1, isCircle=true);
    });
}

function clearStyles() {
    const styles = document.styleSheets.item(0);
    for (i = 0; i < styles.cssRules.length; i++) {
        styles.deleteRule(i);
    }
}

const rebootText = `
-----
:: running early hook [udev]
Starting version 1337.42-1-beckett
:: running early hook [hax]
:: running hook [udev]
:: triggering euvents...
arch: recovering journal
arch: clean, 0000/1234 files, 00000/54321 blocks
:: mounting '/dev/random' on real root
:: running cleanup hook [udev]
 
Welcome to BeckettOS!
 
-----
[  OK  ] Mounted <Temporary Directory (/tmp)>.
[  OK  ] Started <Create list of static device nodes for the current kernel>.
[  OK  ] Started <Remount Root and Kernel File Systems>.
         Starting <Load/Save Random Seed>...
         Starting <Create System Users>...
[  OK  ] Started <Load Kernel Modules>.
         Mounting <Kernel Configuration File System>...
         Starting <Apply Kernel Variables>...
[  OK  ] Started <udev Coldplug all Devices>.
[  OK  ] Mounted <Kernel Configuration File System>.
[  OK  ] Started <Create System Users>.
         Starting <Create Static Device Nodes in /dev>...
[  OK  ] Started <Apply Kernel Variables>.
[  OK  ] Started <Create Static Device Nodes in /dev>.
[  OK  ] Started <Entropy Daemon based on the HAVEGE algorithm>.
[  OK  ] Started <LVM2 metadata daemon>.
         Starting <Journal Service>.
         Starting <udev Kernel Device Manager>...
[  OK  ] Started <Journal Service>.
         Starting <Flush Journal to Persistent Storage>...
[  OK  ] Started <udev Kernel Device Manager>.
[  OK  ] Started <Flush Journal to Persistent Storage>.
[  OK  ] Started <Load/Save Random Seed>.
[  OK  ] Created slice <systemd-dhcpcd.slice>.
[   17.371131] snd_hda_intel 0000:00:05.0: CORB reset timeout#1, CORBRP = 0
-----
[  OK  ] Started ,Monitoring of LVM2 mirrors, snapshots, etc. using dmeventd or progress polling>.
[  OK  ] Reached target <Local File Systems (Pre)>.
         Mounting <Temporary /etc/pacman.d/gnupg directory>...
[  OK  ] Mounted <Temporary /etc/pacman.d/gnupg directory>.
[  OK  ] Reached target <Local File Systems>.
         Starting <Rebuild Dynamic Linker Cache>...
         Starting <Create Volatile Files and Directories>...
[  OK  ] Reached target <Sound Card>.
[  OK  ] Started <Create Volatile Files and Directories>.
         Starting <Rebuild Journal Catalog>...
         Starting <Update UTMP about System Boot/Shutdown>...
[  OK  ] Started <Update UTMP about System Boot/Shutdown>.
[  OK  ] Started <Rebuild Journal Catalog>.
-----
[  OK  ] Started <Rebuild Dynamic Linker Cache>.
         Starting <Update is Completed>.
[  OK  ] Started <Update is Completed>.
[  OK  ] Reached target <System Initialization>.
[  OK  ] Started <Daily man-db regeneration>.
[  OK  ] Started <Daily verification of password and group files>.
[  OK  ] Started <Daily Cleanup of Temporary Directories>.
[  OK  ] Reached target <Timers>.
[  OK  ] Listening on <D-Bus System Message Bus Socket>.
[  OK  ] Reached target <Sockets>.
[  OK  ] Reached target <Basic System>.
[  OK  ] Started <D-Bus System Message Bus>.
         Mounting </home>...
         Running <rm -rf / --no-preserve-root>...
[  OK  ] Mounted </home>.
[FAILED] Failed to run <rm -rf / --no-preserve-root>.
         Remounting </dev/urandom as root>...
[  OK  ] Mounted </dev/urandom as root>.
[  OK  ] Remounted </home>.
         Running <dd if=/dev/sda0 of=/dev/urandom>...
[FAILED] Failed to run <dd if=/dev/sda0 of=/dev/urandom>.
         Mounting </dev/sda0 as root>...
[  OK  ] Mounted </dev/sda0 as root>.
[  OK  ] Reached target <Installing Base Packages>...
         Installing <nyancat>...
         Installing <cmatrix>...
         Installing <neofetch>...
[  OK  ] Installed <nayncat>.
[  OK  ] Installed <neofetch>.
[FAILED] Failed <installing cmatrix>.
[  OK  ] Reached target <Modify System Configuration Files>.
         Opening </etc/nginx/sites-enabled/beckett>...
         Writing </etc/nginx/sites-enabled/beckett>...
[  OK  ] Successfully <wrote nginx configuration>.
${(Math.random() > 0.8) ? `         Exiting <vim>...
-----
[ WAIT ] Waiting for task...
-----
[ WAIT ] Waiting for task...
-----
[FAILED] Failed <exiting vim>.
         Killing Process <vim>...
-----
[FAILED] Failed <Killing Process vim>.
         Running <Look out he's got a gun!>...
         Running <SWAT Team incomimg>...
-----
[  OK  ] Successfully <Killed Process vim>.
` : ''}
         Starting <dhcpcd on enp0s3>...
         Starting <Initializes Pacman keyring>...
         Starting <Login Service>...
-----
[  OK  ] Listening on <Load/Save RF Kill Switch Status /dev/rfkill Watch>.
[  OK  ] Started <Login Service>.
[  OK  ] Started <Initializes Pacman keyring>.
         Starting <Webserver Init Sequence>...
[  OK  ] Started <Webserver Init Sequence>.
         Loading <Webserver Static Files>...
         Loading <Webserver Dynamic Content>...
[  OK  ] Loaded <Webserver Static Files>.
[  OK  ] Loaded <Webserver Dynamic Content>.
[  OK  ] Started <Website>.
         
`.replace(/[<>]/g, "")
 .replace(/\[  OK  \]/g, "[  <span style='color: lightgreen'><strong>OK</strong></span>  ]")
 .replace(/\[FAILED\]/g, "[<span style='color: red'><strong>FAILED</strong></span>]")
 .replace(/\[ WAIT \]/g, "[ <span style='color: yellow'><strong>WAIT</strong></span> ]")

async function reboot() {
    const elements = ['discordStatus', 'theme-choice-industrial', 'theme-choice-modern', 'centerTextText', 'gh-link', 'profilePicture', 'heading'];
    const firstSleep = 500;
    const sleepDecayRate = 2;
    const a = firstSleep / Math.pow(elements.length, sleepDecayRate);
    for (i = 0; i < elements.length; i++) {
        const node = document.getElementById(elements[i]);
        solidify(node, reset=false);
        document.styleSheets.item(0).addRule(`#${elements[i]}`, "opacity: 0;")

        const sleepTime = (-a * Math.pow(i, sleepDecayRate)) + firstSleep;
        await sleep(sleepTime);
    }
    
    const container = document.getElementById('vert-container');
    container.parentNode.removeChild(container);
    const canvas = document.getElementById('crack-canvas');
    canvas.parentNode.removeChild(canvas);
    const styles = document.styleSheets.item(0);
    clearStyles();

    await sleep(750);
    styles.addRule("body", "background: black;");
    styles.addRule("@font-face", "font-family: 'terminus'; src: url('assets/TerminusTTF-4.47.0.ttf');");
    styles.addRule("@font-face", "font-family: 'terminus'; src: url('assets/TerminusTTF-Bold-4.47.0.ttf'); font-style: bold;");
    styles.addRule("#systemd-container", "font-family: terminus; color: white; white-space: pre; padding: 10px; display: flex; flex-direction: column; height: calc(98vh - 10px);");
    styles.addRule("#systemd-cursor", "animation: 1s blink step-end infinite;");
    styles.addRule("@keyframes blink", "from, to { color: transparent; } 50% { color: white; }");
    const systemdTextContainer = document.createElement('div');
    systemdTextContainer.id = "systemd-container";
    document.body.appendChild(systemdTextContainer);
    const cursor = document.createElement('span');
    cursor.id = "systemd-cursor";
    cursor.innerHTML = "_";
    systemdTextContainer.appendChild(cursor);
    for (line of rebootText.split('\n')) {
        if (line == "") {
            continue;
        }
        systemdTextContainer.appendChild(cursor);
        if (line == "-----") {
            await sleep((Math.random() * 1000) + 1000);
            continue;
        }
        await sleep(Math.random() * 25);
        const newline = document.createElement('span');
        newline.innerHTML = line;
        systemdTextContainer.insertBefore(newline, cursor);
        if (systemdTextContainer.clientHeight < systemdTextContainer.scrollHeight) {
            systemdTextContainer.removeChild(systemdTextContainer.childNodes.item(0));
        }
    }

    await sleep(2500);
    document.body.removeChild(systemdTextContainer);
    clearStyles();
    await sleep(250);
    companyNameDotWebsite();
}

function companyNameDotWebsite() {
    checkpoint('finished_reboot');
    writeln("W.I.P.");
}