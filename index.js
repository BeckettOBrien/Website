// I advise you refrain from reading this until you've fully experienced the website
// This code will contain spoilers for what happens, so be warned
// If you've already seen everything then welcome! I hope you enjoyed it and I hope you don't think this code is TOO bad
// Good luck traveler!

function writeln(str) {
    document.body.innerHTML += str + '\n';
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeElementById(id){
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

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function updateDiscordText() {
    httpGetAsync("https://api.becketto.dev/getDiscordStatus?id=401875312578920458", (status) => {
        document.getElementById("discordStatus").innerHTML = `Discord Status: ${status}`
    })
}

function updateDiscordShield() {
    // If you would like to do this for yourself, make a request similar to this one with your own discord user id (you can also set an &color=)
    // Note: For this to work you must join this discord server (because there is no api endpoint for user status): https://discord.gg/ABM6w5dez9
    httpGetAsync("https://api.becketto.dev/getDiscordShield?id=401875312578920458", (status) => {
        document.getElementById("discordStatus").src = status;
    })
}

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

var speed;

window.onload = () => {
    // if (document.location.href === "https://becketto.dev/?dev") {
    //     document.body.style = "";
    //     updateDiscordShield();
    // }
    speed = (document.location.href === "https://becketto.dev/?speed") || (document.location.href === "http://127.0.0.1:8080/?speed");
    build();
}

function build() {
    // const blankPage = "<!-- Nerd. -->\n<p>Hi! I guess this is my website or something. I don't really know what to put here so for now its just text. Enjoy!</p>"
    // document.body.innerHTML = blankPage;
    // document.body.style = "";

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
                                                                                                    setInterval(() => {
                                                                                                        updateDiscordShield();
                                                                                                    }, 300000)
                                                                                                    discordStatusOld.parentNode.replaceChild(discordStatusNew, discordStatusOld);
                                                                                                    updateDiscordShield();
                                                                                                    setTimeout(() => {
                                                                                                        writeln("<p class='tmp'>Cool right?</p>");
                                                                                                        setTimeout(() => {
                                                                                                            writeln("<p class='tmp'>Lemme see if I can fix some of the layout here</p>");
                                                                                                            setTimeout(() => {
                                                                                                                removeElementsByClass("tmp");
                                                                                                                for (br of document.getElementsByTagName('br')) {
                                                                                                                    document.body.removeChild(br);
                                                                                                                }
                                                                                                                const discordStatus = document.getElementById("discordStatus");
                                                                                                                document.body.children[0].id = 'centerText';
                                                                                                                wrapIdWithDiv("centerText", "centerTextContainer");
                                                                                                                discordStatus.parentNode.removeChild(discordStatus);
                                                                                                                const linksContainer = wrapIdWithDiv("gh-link", "links-container");
                                                                                                                linksContainer.appendChild(discordStatus);
                                                                                                                linksContainer.parentNode.removeChild(linksContainer);
                                                                                                                const vertContainer = wrapIdWithDiv("centerTextContainer", "vert-container");
                                                                                                                vertContainer.appendChild(linksContainer);
                                                                                                                const stylesheet = document.createElement('link');
                                                                                                                stylesheet.rel = "stylesheet";
                                                                                                                stylesheet.type = "text/css";
                                                                                                                stylesheet.href = 'index.css';
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
                                                                                                                                                    profilePicture.src = "https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg";
                                                                                                                                                    profilePictureContainer.appendChild(profilePicture);
                                                                                                                                                    vertContainer.insertBefore(profilePictureContainer, document.getElementById("centerTextContainer"));
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        textboxWriteAnimated("Hmm, I should probably put my name somewhere.");
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
                                                                                                                                                                                        const particleContainer = document.createElement('div');
                                                                                                                                                                                        particleContainer.id = 'particle-container';
                                                                                                                                                                                        // particleContainer.style = "position: absolute; width: 100vw; height: 100vh; z-index: -10; top: 0; left: 0;";
                                                                                                                                                                                        document.body.insertBefore(particleContainer, document.getElementById("vert-container"));
                                                                                                                                                                                        const particlejsScript = document.createElement('script');
                                                                                                                                                                                        particlejsScript.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js";
                                                                                                                                                                                        document.head.appendChild(particlejsScript);
                                                                                                                                                                                        particlejsScript.onload = () => {
                                                                                                                                                                                            particlesJS.load("particle-container", "assets/particlesjs-config.json", () => {
                                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                                    textboxWriteAnimated("Hmm, maybe I'll try something else.");
                                                                                                                                                                                                }, speed ? 10 : 5000)
                                                                                                                                                                                            });
                                                                                                                                                                                        }
                                                                                                                                                                                    }, speed ? 10 : 1500)
                                                                                                                                                                                }, speed ? 10 : 2000)
                                                                                                                                                                            }, speed ? 10 : 5000)
                                                                                                                                                                        }, speed ? 10 : 1500)
                                                                                                                                                                    }, speed ? 10 : 2500)
                                                                                                                                                                }, speed ? 10 : 1500)
                                                                                                                                                            }, speed ? 10 : 3000)
                                                                                                                                                        }, speed ? 10 : 1500)
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
