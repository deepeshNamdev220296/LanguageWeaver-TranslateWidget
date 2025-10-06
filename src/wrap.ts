let _documentTag = "html";
let _segmentTag = "y";

function wrap(segments: string[]): string {
  let xmlSegments = `<${_documentTag}>`;
  segments.forEach((segment) => {
    xmlSegments += `<${_segmentTag}>${compress(segment)}</${_segmentTag}>`;
  });
  return xmlSegments + `</${_documentTag}>`;
}

// some pages have huge amounts of whitespace, and LW charges per character
function compress(text: string) {
  return text.replace(/\s\s+/g, " ");
}

// split the translations in xml format into individual translated strings
function unwrap(xml: string): string[] {
  const documentTagLen = _documentTag.length + 2;
  const segmentTagLen = _segmentTag.length + 2;
  const xmlSegments = xml
    .substring(documentTagLen)
    .substring(0, xml.length - (documentTagLen * 2 + 1));
  const fragments = xmlSegments.split("<" + _segmentTag + ">");
  const segments: string[] = [];

  for (let i = 1; i < fragments.length; i++) {
    let translation = fragments[i].substring(
      0,
      fragments[i].length - (segmentTagLen + 1)
    );
    // ETS sometimes leaves entities in the translation
    // and there are tons of html tags added to arabic...
    translation = translation
      .replace(/<.*?>/g, "")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/&amp;/g, "&");
    segments.push(translation);
  }
  return segments;
}

export { wrap, unwrap };
