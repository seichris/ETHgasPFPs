"use strict";
figma.loadFontAsync({ family: "Inter", style: "Regular" }).then(() => {
    figma.currentPage.children.forEach(frame => {
        if (frame.type === "FRAME") {
            frame.children.forEach(child => {
                if (child.type === "TEXT") {
                    child.characters = frame.name;
                }
            });
        }
    });
    figma.closePlugin();
});
