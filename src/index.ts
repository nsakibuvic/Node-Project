import { Block, blocks } from './blocks';

const collectAllImageUrls = (data: Block) => {
    let result: string[] = [];
    for (let child of data.children!) {
        if (child.type === 'Image') {
            let url = child!.options!.url
            if (typeof url === 'string') {
                result.push(url)
            }
        }
        if (child.children) {
            result = result.concat(collectAllImageUrls(child));
        }
    }
    return result;

}
// console.log(collectAllImageUrls(blocks));

const changeIDs = (data: Block, id1: string, id2: string): Block => {
    const filteredChildren = (data: Block) : Block | null => {
        if (data.id === id1) {
            return data;
        }
        if (data.children && data.children.length > 0) {
            for (let i = 0; i < data.children.length; i++) {
                const result = filteredChildren(data.children[i]);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    const filteredParent: any = (data: Block) : Block | null => {
        if (data.children && data.children.length > 0) {
            for (let i = 0; i < data.children.length; i++) {
                if (data.children[i].id === id2) {
                    return data;
                }
                const result = filteredParent(data.children[i]);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    const blockToMove = filteredChildren(data);
    const parent = filteredParent(data);
    console.log(blockToMove, parent, 'parent')
    if (!blockToMove || !parent) {
        throw new Error("Could not find the blocks with the provided IDs");
    }

    const index = parent.children.indexOf(blockToMove);
    if (index !== -1) {
        parent.children.splice(index, 1);
        parent.children.push(blockToMove);
    }
    console.log(data, 'data')
    return data;
}
changeIDs(blocks, '2m4WRKVtwL5R9mmQDoQCNK', 'qYqX7WhX2w1ruWL5qWbdXL');

const returnParentIds = (data: Block, id: string): string[] | boolean => {
    let parentIds: string[] = [];
    const returnIds = (data: Block) => {
        if (data.children && data.children.length > 0) {
            for (let i = 0; i < data.children.length; i++) {
                if (data.children[i].id === id) {
                    parentIds.unshift(data.id);
                    return true;
                }
                if (returnIds(data.children[i])) {
                    parentIds.unshift(data.id);
                    return true;
                }
            }
        }
        return false;
    }

    if (!returnIds(data)) {
        return false;
    }
    return parentIds;
}
// console.log(returnParentIds(blocks, 'ukSQ94CrnjhtaW41hEuCTb'));


const removeType = (data: Block, type: string) => {
    if (!data || !data.children) return data;
    if (data.type === type) return null;
    let children: (Block | null) [] = data.children
    children = data!.children.map(child => removeType(child, type)).filter(child => child !== null);
    return data;
}

// console.log(removeType(blocks, 'Image'));

const changeDataToString = (data: Block) => {
    let res = data.id + ": " + data.type;
    if (data.children) {
        res += "\n";
        for (let child of data.children) {
            res += "  " + changeDataToString(child);
        }
    }
    return res;
}

// console.log(changeDataToString(blocks));