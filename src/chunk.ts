import { iChunk } from "./interface";

// size limit in characters
const chunkMax = 2000;

export function chunkNodes(guidtabId: number, nodes: HTMLElement[]): iChunk[] {
  let allChunks: iChunk[] = [];
  let currentChunk: iChunk = { id: 0, nodes: [], segments: [] };
  let chunkCounter = 0;
  let chunkSize = 0;

  for (let i = 0; i < nodes.length; ++i) {
    currentChunk.nodes.push(nodes[i]);
    let segmentInfo = extractSegments(nodes[i]);
    currentChunk.segments.push(...segmentInfo.segments);
    chunkSize += segmentInfo.length;
    if (chunkSize >= chunkMax || i === nodes.length - 1) {
      allChunks.push(currentChunk);
      currentChunk = { id: ++chunkCounter, nodes: [], segments: [] };
      chunkSize = 0;
    }
  }
  return allChunks;
}

function extractSegments(node: HTMLElement): {
  segments: string[];
  length: number;
} {
  let segments: string[] = [];
  let length = 0;
  if (node.attributes && node.attributes.length > 0) {
    for (let i = 0; i < node.attributes.length; ++i) {
      let att = node.attributes[i];
      if (node.attributes.getNamedItem("tr_" + att.name) !== null) {
        let segment = node.attributes.getNamedItem(att.name)!.value;
        segments.push(segment);
        length += segment.length;
        //todo: if a node has more than one translatable attribute,
        // we get more segments than nodes and it all becomes messy
        // since it is a fringe case, tackle later
        return { segments: segments, length: length };
      }
    }
  } else {
    segments.push(node.nodeValue!);
    length += node.nodeValue!.length;
  }
  return { segments: segments, length: length };
}
