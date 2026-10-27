#target illustrator

/**
 * Cleaner-Outside-Artboards.jsx
 * Compatible with Adobe Illustrator CC 2025–2026 (macOS & Windows)
 *
 * Removes all unlocked, visible artwork that lies completely outside of all artboards.
 * From JSX-Team (https://jsxteam.com) — Adobe Illustrator Automation.
 */

(function () {
    if (app.documents.length === 0) {
        alert("Please open a document first.", "JSX-Team");
        return;
    }

    var doc = app.activeDocument;
    var artboards = doc.artboards;
    var abCount = artboards.length;

    if (abCount === 0) {
        alert("No artboards found in the active document.", "JSX-Team");
        return;
    }

    // Cache all artboard bounding boxes: [left, top, right, bottom]
    var abRects = [];
    for (var a = 0; a < abCount; a++) {
        abRects.push(artboards[a].artboardRect);
    }

    // Check if item bounds intersect with an artboard rectangle
    function intersects(itemBounds, abRect) {
        var iL = itemBounds[0];
        var iT = itemBounds[1];
        var iR = itemBounds[2];
        var iB = itemBounds[3];

        var aL = abRect[0];
        var aT = abRect[1];
        var aR = abRect[2];
        var aB = abRect[3];

        // Standard 2D bounding box intersection test in Illustrator coordinates
        if (iR < aL || iL > aR || iT < aB || iB > aT) {
            return false;
        }
        return true;
    }

    // Check if item touches at least one artboard
    function isOnAnyArtboard(itemBounds) {
        for (var i = 0; i < abCount; i++) {
            if (intersects(itemBounds, abRects[i])) {
                return true;
            }
        }
        return false;
    }

    var pageItems = doc.pageItems;
    var deletedCount = 0;
    var skippedLocked = 0;

    // Iterate backwards to avoid index shifting on deletion
    for (var i = pageItems.length - 1; i >= 0; i--) {
        var item = pageItems[i];

        // Process only top-level items (skip children of groups/compound paths)
        if (item.parent && item.parent.typename !== "Document" && item.parent.typename !== "Layer") {
            continue;
        }

        // Safety check for locked / hidden layers or items
        if (item.locked || item.hidden || (item.layer && (item.layer.locked || !item.layer.visible))) {
            continue;
        }

        try {
            var b = item.visibleBounds; // [left, top, right, bottom]
            if (!isOnAnyArtboard(b)) {
                item.remove();
                deletedCount++;
            }
        } catch (err) {
            // Skip unmeasurable or locked items
            skippedLocked++;
        }
    }

    if (deletedCount > 0) {
       app.redraw();
        alert("Done! Removed " + deletedCount + " off-artboard object(s).", "JSX-Team Cleaner");
    } else {
        alert("No off-artboard objects found. Your canvas is already clean!", "JSX-Team Cleaner");
    }
})();
