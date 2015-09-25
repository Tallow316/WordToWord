walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    //v = v.replace(/\relpace_me\b/g, "with_me");

    v = v.replace(/\bPeasant\b/g, "Console User");
    v = v.replace(/\bPCMR\b/g, "PC Users");
    v = v.replace(/\bterrorist\b/g, "Big Meanie-head");

	
    textNode.nodeValue = v;
}


